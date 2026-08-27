import {
  type MotionValue,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

import type { websites } from '@/data/websites';
import { shuffle } from '@/helpers/random';

import styles from './index.module.css';

type Website = (typeof websites)[number];

interface Props {
  websites: Website[];
}

interface GridSlot {
  column: number;
  id: string;
  index: number;
  row: number;
}

interface GridItemProps {
  allocator: WebsiteAllocator;
  data: GridSlot;
  mapX: MotionValue<number>;
  mapY: MotionValue<number>;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  totalHeight: number;
  totalWidth: number;
  viewport: { height: number; width: number };
  websites: Website[];
}

interface WebsiteAllocator {
  next: (slotId: string) => number;
  register: (slotId: string, websiteIndex: number) => void;
  unregister: (slotId: string) => void;
}

const CARD_WIDTH = 360;
const CARD_HEIGHT = 202.5;
const GAP = 24;
const STEP_X = CARD_WIDTH + GAP;
const STEP_Y = CARD_HEIGHT + GAP;
const INITIAL_PADDING = 12;

export function SerendipityCanvas({ websites }: Props) {
  const mapX = useMotionValue(INITIAL_PADDING);
  const mapY = useMotionValue(INITIAL_PADDING);
  const didPan = useRef(false);
  const [viewport, setViewport] = useState({ height: 0, width: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const randomizedWebsites = useMemo(() => shuffle(websites), [websites]);

  useEffect(() => {
    const updateViewport = () =>
      setViewport({ height: window.innerHeight, width: window.innerWidth });

    setIsMounted(true);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const grid = useMemo(() => {
    if (viewport.width === 0 || randomizedWebsites.length === 0)
      return { slots: [], totalHeight: 0, totalWidth: 0 };

    const columns = Math.max(Math.ceil(viewport.width / STEP_X) + 2, 4);
    const rows = Math.max(Math.ceil(viewport.height / STEP_Y) + 2, 5);
    const totalWidth = columns * STEP_X;
    const totalHeight = rows * STEP_Y;
    const slots: GridSlot[] = Array.from(
      { length: columns * rows },
      (_, index) => ({
        column: index % columns,
        id: `slot-${index}`,
        index,
        row: Math.floor(index / columns),
      }),
    );

    return { slots, totalHeight, totalWidth };
  }, [randomizedWebsites, viewport]);

  const springX = useSpring(mapX, { damping: 20, mass: 0.6, stiffness: 40 });
  const springY = useSpring(mapY, { damping: 20, mass: 0.6, stiffness: 40 });
  const allocator = useMemo<WebsiteAllocator>(() => {
    const assignments = new Map<string, number>();
    const usage = Array.from({ length: randomizedWebsites.length }, () => 0);
    let cursor = grid.slots.length % randomizedWebsites.length;

    for (const slot of grid.slots) {
      const websiteIndex = slot.index % randomizedWebsites.length;
      assignments.set(slot.id, websiteIndex);
      usage[websiteIndex] += 1;
    }

    return {
      next(slotId) {
        const current = assignments.get(slotId);
        if (current !== undefined) usage[current] -= 1;

        // Prefer a website that isn't displayed by any other card. When there
        // are fewer websites than cards, choose one with the lowest usage.
        let nextIndex = cursor;
        let lowestUsage = Number.POSITIVE_INFINITY;
        for (let offset = 0; offset < usage.length; offset += 1) {
          const candidate = (cursor + offset) % usage.length;
          if (usage[candidate] === 0) {
            nextIndex = candidate;
            break;
          }
          if (usage[candidate] < lowestUsage) {
            lowestUsage = usage[candidate];
            nextIndex = candidate;
          }
        }

        assignments.set(slotId, nextIndex);
        usage[nextIndex] += 1;
        cursor = (nextIndex + 1) % usage.length;
        return nextIndex;
      },
      register(slotId, websiteIndex) {
        const previous = assignments.get(slotId);
        if (previous === websiteIndex) return;
        if (previous !== undefined) usage[previous] -= 1;
        assignments.set(slotId, websiteIndex);
        usage[websiteIndex] += 1;
      },
      unregister(slotId) {
        const current = assignments.get(slotId);
        if (current === undefined) return;
        usage[current] -= 1;
        assignments.delete(slotId);
      },
    };
  }, [grid.slots, randomizedWebsites.length]);

  const onWheel = (event: React.WheelEvent<HTMLElement>) => {
    mapX.set(mapX.get() - event.deltaX);
    mapY.set(mapY.get() - event.deltaY);
  };

  const onPan = (
    _: PointerEvent,
    info: { delta: { x: number; y: number } },
  ) => {
    if (Math.abs(info.delta.x) + Math.abs(info.delta.y) > 0)
      didPan.current = true;
    mapX.set(mapX.get() + info.delta.x);
    mapY.set(mapY.get() + info.delta.y);
  };

  const onLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (didPan.current) event.preventDefault();
  };

  if (!isMounted) return <main className={styles.viewport} />;

  return (
    <main className={styles.viewport} onWheel={onWheel}>
      <motion.div
        className={styles.canvas}
        onPan={onPan}
        onPointerDown={() => {
          didPan.current = false;
        }}
      >
        {grid.slots.map(slot => (
          <GridItem
            allocator={allocator}
            data={slot}
            key={slot.id}
            mapX={springX}
            mapY={springY}
            totalHeight={grid.totalHeight}
            totalWidth={grid.totalWidth}
            viewport={viewport}
            websites={randomizedWebsites}
            onClick={onLinkClick}
          />
        ))}
      </motion.div>

      <motion.header
        animate={{ opacity: 1, y: 0 }}
        className={styles.header}
        initial={{ opacity: 0, y: -8 }}
      >
        <a href="/inspiration">Inspiration</a>
        <span>/ SERENDIPITY</span>
      </motion.header>

      <motion.aside
        animate={{ opacity: 1, y: 0 }}
        className={styles.help}
        initial={{ opacity: 0, y: 8 }}
      >
        <span>DRAG TO ROAM</span>
      </motion.aside>
    </main>
  );
}

function GridItem({
  allocator,
  data,
  mapX,
  mapY,
  onClick,
  totalHeight,
  totalWidth,
  viewport,
  websites,
}: GridItemProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const websiteIndex = useRef(data.index % websites.length);
  const previousX = useRef<number | null>(null);
  const previousY = useRef<number | null>(null);
  const baseX = data.column * STEP_X;
  const baseY = data.row * STEP_Y;
  const x = useTransform(mapX, latest => {
    let position = (baseX + latest + totalWidth * 1000) % totalWidth;
    if (position < -CARD_WIDTH) position += totalWidth;
    if (position > viewport.width + STEP_X) position -= totalWidth;
    return position;
  });
  const y = useTransform(mapY, latest => {
    let position = (baseY + latest + totalHeight * 1000) % totalHeight;
    if (position < -CARD_HEIGHT) position += totalHeight;
    if (position > viewport.height + STEP_Y) position -= totalHeight;
    return position;
  });
  const opacity = useTransform([x, y], ([latestX, latestY]) =>
    (latestX as number) > -CARD_WIDTH - GAP &&
    (latestX as number) < viewport.width + GAP &&
    (latestY as number) > -CARD_HEIGHT - GAP &&
    (latestY as number) < viewport.height + GAP
      ? 1
      : 0,
  );
  const website = websites[websiteIndex.current];

  useEffect(() => {
    allocator.register(data.id, websiteIndex.current);
    return () => allocator.unregister(data.id);
  }, [allocator, data.id]);

  // Updating this through React state makes every wrapped card re-render in the
  // middle of a gesture. Keep the animation path outside React and only update
  // the two DOM attributes that actually changed.
  const advanceWebsite = () => {
    websiteIndex.current = allocator.next(data.id);
    const nextWebsite = websites[websiteIndex.current];

    anchorRef.current?.setAttribute('href', nextWebsite.url);
    imageRef.current?.setAttribute('alt', `Screenshot of ${nextWebsite.name}`);
    imageRef.current?.setAttribute('src', nextWebsite.screenshot);
  };

  useMotionValueEvent(x, 'change', latest => {
    if (
      previousX.current !== null &&
      Math.abs(latest - previousX.current) > totalWidth / 2
    )
      advanceWebsite();
    previousX.current = latest;
  });

  useMotionValueEvent(y, 'change', latest => {
    if (
      previousY.current !== null &&
      Math.abs(latest - previousY.current) > totalHeight / 2
    )
      advanceWebsite();
    previousY.current = latest;
  });

  return (
    <motion.a
      className={styles.imageCard}
      draggable={false}
      href={`/inspiration/${website.slug}`}
      ref={anchorRef}
      style={{ height: CARD_HEIGHT, opacity, width: CARD_WIDTH, x, y }}
      onClick={onClick}
    >
      <img
        alt={`Screenshot of ${website.name}`}
        decoding="async"
        draggable={false}
        loading="lazy"
        ref={imageRef}
        src={website.screenshot}
      />
    </motion.a>
  );
}
