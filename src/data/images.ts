import { reverseArray } from '@/helpers/array';
import { createSlug } from '@/helpers/slug';

/**
 * From Old to New
 * YYYY/MM/DD
 */

const _images: Array<{
  date: string;
  dimensions: {
    height: number;
    width: number;
  };
  image: string;
  source: {
    address: string;
    name: string;
    url: string;
  };
}> = [
  {
    date: '2025-04-08',
    dimensions: {
      height: 1260,
      width: 2400,
    },
    image: '2025-04-08-p-cv.webp',
    source: {
      address: 'p.cv',
      name: 'P.CV',
      url: 'https://p.cv',
    },
  },
  {
    date: '2025-04-08',
    dimensions: {
      height: 1260,
      width: 2400,
    },
    image: '2025-04-08-artone-studio.webp',
    source: {
      address: 'artone.studio',
      name: 'Artone Studio',
      url: 'https://artone.studio',
    },
  },
  {
    date: '2025-04-08',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2025-04-08-frame-io.webp',
    source: {
      address: 'frame.io',
      name: 'Frame.io',
      url: 'https://frame.io',
    },
  },
  {
    date: '2025-04-08',
    dimensions: {
      height: 1260,
      width: 2402,
    },
    image: '2025-04-08-jasonjun-dev.webp',
    source: {
      address: 'jasonjun.dev',
      name: 'Jason Jun',
      url: 'https://jasonjun.dev',
    },
  },
  {
    date: '2025-04-08',
    dimensions: {
      height: 900,
      width: 1600,
    },
    image: '2025-04-08-openai-com.webp',
    source: {
      address: 'openai.com',
      name: 'OpenAI',
      url: 'https://openai.com',
    },
  },
  {
    date: '2025-04-09',
    dimensions: {
      height: 1620,
      width: 2880,
    },
    image: '2025-04-09-suno-com.webp',
    source: {
      address: 'suno.com',
      name: 'Suno',
      url: 'https://suno.com',
    },
  },
  {
    date: '2025-04-09',
    dimensions: {
      height: 1440,
      width: 2448,
    },
    image: '2025-04-09-sfcompute-com.webp',
    source: {
      address: 'sfcompute.com',
      name: 'SF Compute',
      url: 'https://sfcompute.com',
    },
  },
  {
    date: '2025-04-09',
    dimensions: {
      height: 1000,
      width: 2000,
    },
    image: '2025-04-09-sketch-com-blog.webp',
    source: {
      address: 'sketch.com/blog',
      name: 'Beyond the Canvas',
      url: 'https://sketch.com/blog',
    },
  },
  {
    date: '2025-04-09',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2025-04-09-sonarmusic-com-au.webp',
    source: {
      address: 'sonarmusic.com.au',
      name: 'Sonar Music',
      url: 'https://sonarmusic.com.au',
    },
  },
  {
    date: '2025-04-09',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2025-04-09-fruitful-com.webp',
    source: {
      address: 'fruitful.com',
      name: 'Fruitful',
      url: 'https://fruitful.com',
    },
  },
  {
    date: '2025-04-14',
    dimensions: {
      height: 900,
      width: 1600,
    },
    image: '2025-04-14-vibes-site.webp',
    source: {
      address: 'vibes.site',
      name: 'VIBES',
      url: 'https://vibes.site',
    },
  },
  {
    date: '2025-04-14',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2025-04-14-outerbase-com.webp',
    source: {
      address: 'outerbase.com',
      name: 'Outerbase',
      url: 'https://outerbase.com',
    },
  },
  {
    date: '2025-04-14',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2025-04-14-coldplay-com.webp',
    source: {
      address: 'coldplay.com',
      name: 'Coldplay',
      url: 'https://coldplay.com',
    },
  },
  {
    date: '2025-04-14',
    dimensions: {
      height: 628,
      width: 1200,
    },
    image: '2025-04-14-electronicmaterialsoffice-com.webp',
    source: {
      address: 'electronicmaterialsoffice.com',
      name: 'Electronic Materials Office',
      url: 'https://electronicmaterialsoffice.com',
    },
  },
  {
    date: '2025-04-14',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2025-04-14-magmamusicagency-com.webp',
    source: {
      address: 'magmamusicagency.com',
      name: 'Magma',
      url: 'https://magmamusicagency.com',
    },
  },
  {
    date: '2025-04-14',
    dimensions: {
      height: 720,
      width: 1280,
    },
    image: '2025-04-14-greenday-com.webp',
    source: {
      address: 'greenday.com',
      name: 'Green Day',
      url: 'https://greenday.com',
    },
  },
  {
    date: '2025-04-19',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2025-04-19-batch-film.webp',
    source: {
      address: 'batch.film',
      name: 'BATCH',
      url: 'https://batch.film',
    },
  },
  {
    date: '2025-08-08',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2025-08-08-super-work.webp',
    source: {
      address: 'super.work',
      name: 'Super',
      url: 'https://super.work',
    },
  },
  {
    date: '2025-08-10',
    dimensions: {
      height: 1260,
      width: 2400,
    },
    image: '2025-08-10-getvidflow-com.webp',
    source: {
      address: 'getvidflow.com',
      name: 'Vidflow',
      url: 'https://getvidflow.com',
    },
  },
  {
    date: '2025-08-10',
    dimensions: {
      height: 1260,
      width: 2400,
    },
    image: '2025-08-10-starcloud-com.webp',
    source: {
      address: 'starcloud.com',
      name: 'Starcloud',
      url: 'https://starcloud.com',
    },
  },
  {
    date: '2025-08-10',
    dimensions: {
      height: 1260,
      width: 2400,
    },
    image: '2025-08-10-raycast-com.webp',
    source: {
      address: 'raycast.com',
      name: 'Raycast',
      url: 'https://raycast.com',
    },
  },
  {
    date: '2025-08-10',
    dimensions: {
      height: 719,
      width: 1280,
    },
    image: '2025-08-10-checkout-com.webp',
    source: {
      address: 'checkout.com',
      name: 'Checkout',
      url: 'https://checkout.com',
    },
  },
  {
    date: '2025-08-10',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2025-08-10-neoculturalcouture-com.webp',
    source: {
      address: 'neoculturalcouture.com',
      name: 'NeoCultural Couture',
      url: 'https://neoculturalcouture.com',
    },
  },
  {
    date: '2025-12-08',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2025-12-08-craft-do.webp',
    source: {
      address: 'craft.do',
      name: 'Craft',
      url: 'https://craft.do',
    },
  },
  {
    date: '2026-07-17',
    dimensions: {
      height: 630,
      width: 1300,
    },
    image: '2026-07-17-retailpath-xyz.webp',
    source: {
      address: 'retailpath.xyz',
      name: 'RetailPath',
      url: 'https://retailpath.xyz',
    },
  },
  {
    date: '2026-07-17',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2026-07-17-jordans-peachworlds-com.webp',
    source: {
      address: 'jordans.peachworlds.com',
      name: 'Air Jordan 4 Translucent',
      url: 'https://jordans.peachworlds.com',
    },
  },
  {
    date: '2026-07-17',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2026-07-17-orkenworld-com.webp',
    source: {
      address: 'orkenworld.com',
      name: 'ORKEN',
      url: 'https://orkenworld.com',
    },
  },
  {
    date: '2026-08-22',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2026-08-22-solidroad-com.webp',
    source: {
      address: 'solidroad.com',
      name: 'Solidroad',
      url: 'https://solidroad.com',
    },
  },
  {
    date: '2026-08-22',
    dimensions: {
      height: 534,
      width: 960,
    },
    image: '2026-08-22-steel-dev.webp',
    source: {
      address: 'steel.dev',
      name: 'Steel',
      url: 'https://steel.dev',
    },
  },
  {
    date: '2026-08-22',
    dimensions: {
      height: 1256,
      width: 2400,
    },
    image: '2026-08-22-webflow-com.webp',
    source: {
      address: 'webflow.com',
      name: 'Webflow',
      url: 'https://webflow.com',
    },
  },
  {
    date: '2026-08-23',
    dimensions: {
      height: 692,
      width: 1200,
    },
    image: '2026-08-23-hermes-agent-nousresearch-com.webp',
    source: {
      address: 'hermes-agent.nousresearch.com',
      name: 'Hermes Agent',
      url: 'https://hermes-agent.nousresearch.com',
    },
  },
  {
    date: '2026-08-25',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2026-08-25-aquaduck-ai.webp',
    source: {
      address: 'aquaduck.ai',
      name: 'Aquaduck',
      url: 'https://aquaduck.ai',
    },
  },
  {
    date: '2026-08-25',
    dimensions: {
      height: 1260,
      width: 2400,
    },
    image: '2026-08-25-telemetry-dev.webp',
    source: {
      address: 'telemetry.dev',
      name: 'telemetry.dev',
      url: 'https://telemetry.dev',
    },
  },
  {
    date: '2026-08-25',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2026-08-25-letude-group.webp',
    source: {
      address: 'letude.group',
      name: "L'Étude",
      url: 'https://letude.group',
    },
  },
  {
    date: '2026-08-25',
    dimensions: {
      height: 675,
      width: 1200,
    },
    image: '2026-08-25-modal-com.webp',
    source: {
      address: 'modal.com',
      name: 'Modal',
      url: 'https://modal.com',
    },
  },
  {
    date: '2026-08-28',
    dimensions: {
      height: 629,
      width: 1200,
    },
    image: '2026-08-28-lovable-dev.webp',
    source: {
      address: 'lovable.dev',
      name: 'Lovable',
      url: 'https://lovable.dev',
    },
  },
  {
    date: '2026-08-28',
    dimensions: {
      height: 630,
      width: 1200,
    },
    image: '2026-08-28-dirtverse-co.webp',
    source: {
      address: 'dirtverse.co',
      name: 'Dirt',
      url: 'https://dirtverse.co',
    },
  },
  {
    date: '2026-08-28',
    dimensions: {
      height: 1080,
      width: 1920,
    },
    image: '2026-08-28-brightscout-com.webp',
    source: {
      address: 'brightscout.com',
      name: 'Brightscout',
      url: 'https://brightscout.com',
    },
  },
  {
    date: '2026-08-28',
    dimensions: {
      height: 627,
      width: 1200,
    },
    image: '2026-08-28-patch-io.webp',
    source: {
      address: 'patch.io',
      name: 'Patch',
      url: 'https://patch.io',
    },
  },
];

export const images = reverseArray(
  _images.map(image => ({
    ...image,
    image: `/images/og-images/${image.image}`,
    slug: createSlug(image.source.address, image.date),
  })),
);

export type Images = typeof images;
