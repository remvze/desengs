import alphaSort from 'alpha-sort';

export interface DesignEngineer {
  definition?: string;
  github?: string;
  name: string;
  website?: string;
  x?: string;
}

export type DesignEngineers = Array<DesignEngineer>;

const designEngineers: DesignEngineers = [
  {
    github: 'https://github.com/Abil-Shrestha',
    name: 'Abil Shrestha',
    website: 'https://www.abilshr.com/',
    x: 'https://x.com/_abilshr',
  },
  {
    github: 'https://github.com/raunofreiberg',
    name: 'Rauno Freiberg',
    website: 'https://rauno.me/',
    x: 'https://x.com/raunofreiberg',
  },
  {
    github: 'https://github.com/johnphamous',
    name: 'John Phamous',
    website: 'https://pham.codes/',
    x: 'https://x.com/johnphamous',
  },
  {
    github: 'https://github.com/henryjeff',
    name: 'Henry Heffernan',
    website: 'https://henryheffernan.com/',
    x: 'https://x.com/henryheffernan',
  },
  {
    github: 'https://github.com/MaggieAppleton',
    name: 'Maggie Appleton',
    website: 'https://maggieappleton.com/',
    x: 'https://x.com/Mappletons',
  },
  {
    github: 'https://github.com/danhollick',
    name: 'Dan Hollick',
    x: 'https://x.com/DanHollick',
  },
  {
    github: 'https://github.com/dimitrisraptis96',
    name: 'Jim Raptis',
    website: 'https://www.jimraptis.com/',
    x: 'https://x.com/d__raptis',
  },
  {
    github: 'https://github.com/jh3y',
    name: 'Jhey Tompkins',
    website: 'https://www.jhey.dev/',
    x: 'https://x.com/jh3yy',
  },
  {
    github: 'https://github.com/segunadebayo',
    name: 'Segun Adebayo',
    website: 'https://www.adebayosegun.com/',
    x: 'https://x.com/thesegunadebayo',
  },
  {
    github: 'https://github.com/pugson',
    name: 'pugson',
    website: 'https://wojtek.im/',
    x: 'https://x.com/pugson',
  },
  {
    name: 'James Clements',
    x: 'https://x.com/jamesvclements',
  },
  {
    github: 'https://github.com/flornkm',
    name: 'Florian Kiem',
    website: 'https://floriankiem.com/',
    x: 'https://x.com/flornkm',
  },
  {
    github: 'https://github.com/samuelkraft',
    name: 'Samuel Kraft',
    website: 'https://samuelkraft.com/',
    x: 'https://x.com/samuelkraft',
  },
  {
    definition:
      'Design engineering is a discipline that rejects the artificial boundary between form and function. It operates on the premise that interface design and implementation are not sequential phases but a single, iterative act. Decisions about aesthetics, interaction, and technical architecture inform each other in real time.',
    github: 'https://github.com/brijr',
    name: 'Bridger Tower',
    website: 'https://brijr.dev/',
    x: 'https://x.com/bridgertower',
  },
  {
    github: 'https://github.com/danilowoz',
    name: 'Danilo Woznica',
    website: 'https://danilowoz.com/',
    x: 'https://x.com/danilowoz',
  },
  {
    github: 'https://github.com/pacocoursey',
    name: 'Paco Coursey',
    website: 'https://paco.me/',
    x: 'https://x.com/pacocoursey',
  },
  {
    github: 'https://github.com/emilkowalski',
    name: 'Emil Kowalski',
    website: 'https://emilkowal.ski/',
    x: 'https://x.com/emilkowalski_',
  },
  {
    github: 'https://github.com/emilwidlund',
    name: 'Emil Widlund',
    x: 'https://x.com/emilwidlund',
  },
  {
    github: 'https://github.com/jimmylee',
    name: 'Jimmy Lee',
    website: 'https://jimmyl.ee/',
    x: 'https://x.com/wwwjim',
  },
  {
    github: 'https://github.com/preetsuthar17',
    name: 'Preet Suthar',
    website: 'https://preetsuthar.me/',
    x: 'https://x.com/preetsuthar17',
  },
  {
    github: 'https://github.com/pqoqubbw',
    name: 'dmytro',
    website: 'https://pqoqubbw.dev/',
    x: 'https://x.com/pqoqubbw',
  },
  {
    github: 'https://github.com/bdrtsky',
    name: 'Serhii Bedrytskyi',
    website: 'https://serhii.be/',
    x: 'https://x.com/serhii_be',
  },
  {
    github: 'https://github.com/aaronmahlke',
    name: 'Aaron Mahlke',
    website: 'https://www.mahlke.design/',
    x: 'https://x.com/aaronmahlke',
  },
  {
    github: 'https://github.com/legions-developer',
    name: 'Gurbinder',
    website: 'https://legions.dev/',
    x: 'https://x.com/legionsdev',
  },
  {
    github: 'https://github.com/jmsbaduor',
    name: 'James Baduor',
    website: 'https://jamesbaduor.com/',
    x: 'https://x.com/jmsbaduor',
  },
  {
    github: 'https://github.com/mbaytas',
    name: 'M.A. Baytaş',
    website: 'https://baytas.net/',
    x: 'https://x.com/doctorbaytas',
  },
  {
    github: 'https://github.com/shadcn',
    name: 'shadcn',
    website: 'https://shadcn.com',
    x: 'https://x.com/shadcn',
  },
  {
    github: 'https://github.com/evilrabbit',
    name: 'Evil Rabbit',
    website: 'https://evilrabbit.com',
    x: 'https://x.com/evilrabbit_',
  },
  {
    definition:
      'A Design Engineer blends design thinking with technical skills to deliver complete product experiences. They move beyond owning a single stage of the process and take responsibility for the final result. A Design Engineer understands the problem, designs the solution, builds it, and refines the experience so the product is both visually compelling and technically solid.',
    github: 'https://github.com/ncdai',
    name: 'Chánh Đại',
    website: 'https://chanhdai.com/',
    x: 'https://x.com/iamncdai',
  },
  {
    github: 'https://github.com/rivertwilight',
    name: 'Rene Wang',
    website: 'https://rene.wang/en-US',
    x: 'https://x.com/rea1DonandTrump',
  },
  {
    github: 'https://github.com/amitmerchant1990',
    name: 'Amit Merchant',
    website: 'https://amitmerchant.com',
    x: 'https://x.com/amit_merchant',
  },
  {
    github: 'https://github.com/dimuuu',
    name: 'Dmytro Kondakov',
    website: 'https://www.dmytro.fyi/',
    x: 'https://x.com/dmytro_kondakov',
  },
  {
    github: 'https://github.com/molefrog',
    name: 'Alexey Taktarov',
    website: 'https://molefrog.com/',
    x: 'https://x.com/mlfrg',
  },
  {
    github: 'https://github.com/tikhonbelousko',
    name: 'Tikhon Belousko',
    website: 'https://www.tikhon.io/',
    x: 'https://x.com/_tikhon',
  },
  {
    name: 'Lauge',
    x: 'https://x.com/0xlauge',
  },
  {
    github: 'https://github.com/bdsqqq',
    name: 'Igor Bedesqui',
    website: 'https://bedes.qui.gg/',
    x: 'https://x.com/bedesqui',
  },
  {
    github: 'https://github.com/brenolasserre',
    name: 'Breno Lasserre',
    website: 'https://www.brenolasserre.com/',
    x: 'https://x.com/brenolasserre',
  },
  {
    github: 'https://github.com/matthewmorek',
    name: 'Matthew Morek',
    website: 'https://matthewmorek.com/',
    x: 'https://x.com/matthewmorek',
  },
  {
    github: 'https://github.com/vishalanandesc',
    name: 'vishal anand',
    website: 'https://engineering-experiments.vercel.app/',
    x: 'https://x.com/vishalanandtwts',
  },
  {
    name: 'Austin Valleskey',
    website: 'https://www.austinvalleskey.com/',
    x: 'https://x.com/austinvalleskey',
  },
  {
    github: 'https://github.com/cristicretu',
    name: 'Cristian Crețu',
    website: 'https://cretu.dev/',
    x: 'https://x.com/cristicrtu',
  },
  {
    github: 'https://github.com/rpavlini',
    name: 'Robert Pavlinić',
    website: 'https://rpavlini.com/',
    x: 'https://x.com/rpavlini',
  },
  {
    name: 'Joshua Wolk',
    website: 'https://www.joshuawolk.com/',
    x: 'https://x.com/joshuawolk',
  },
  {
    github: 'https://github.com/sorenblank',
    name: 'Soren Blank',
    website: 'https://sorenblank.com/',
    x: 'https://x.com/sorenblank',
  },
  {
    github: 'https://github.com/hugosaintemarie',
    name: 'Hugo Sainte-Marie',
    website: 'https://hugosaintemarie.com/',
    x: 'https://x.com/hugosaintemarie',
  },
  {
    github: 'https://github.com/abjt14',
    name: 'Abhijeet Singh',
    website: 'https://www.abjt.dev/',
    x: 'https://x.com/abjt14',
  },
  {
    github: 'https://github.com/gurvinder-singh02',
    name: 'Guri',
    website: 'https://gxuri.in/',
    x: 'https://x.com/Gur__vi',
  },
  {
    name: 'Lochie Axon',
    website: 'https://lochieaxon.com/',
    x: 'https://x.com/lochieaxon',
  },
  {
    github: 'https://github.com/Aeastr',
    name: 'aether',
    x: 'https://x.com/AetherAurelia',
  },
  {
    name: 'Vaun Blu',
    website: 'https://vaunb.lu/',
    x: 'https://x.com/vaunblu',
  },
  {
    github: 'https://github.com/raphaelsalaja',
    name: 'Raphael Salaja',
    website: 'https://www.raphaelsalaja.com/',
    x: 'https://x.com/raphaelsalaja',
  },
  {
    github: 'https://github.com/dave-hawkins',
    name: 'Dave Hawkins',
    website: 'https://davehawkins.co/',
    x: 'https://x.com/davehawkins',
  },
  {
    github: 'https://github.com/danbillson',
    name: 'Dan Billson',
    website: 'https://dnbls.com/',
    x: 'https://x.com/dbillson',
  },
  {
    github: 'https://github.com/moumen-soliman',
    name: 'Moumen Soliman',
    website: 'https://moumen.dev/',
    x: 'https://x.com/moumensoliman',
  },
  {
    github: 'https://github.com/raminrzdh',
    name: 'Ramin',
    website: 'https://raminrzdh.com/',
    x: 'https://x.com/raminrzdh',
  },
  {
    definition:
      'A Design Engineer is a person who blurs the lines between the traditional design and product engineer roles. They understand the constraints without letting it limit their creativity, it does quite the opposite. They create tangible and functional digital experiences that delight both in look and feel.',
    github: 'https://github.com/its-thepoe',
    name: 'Oladipupo Ayoola',
    website: 'https://thepoe.xyz/',
    x: 'https://x.com/its_thepoe/',
  },
  {
    github: 'https://github.com/evangelinensy',
    name: 'Evangeline',
    website: 'https://evangeline.design/',
    x: 'https://x.com/eggsvans',
  },
  {
    github: 'https://github.com/Saurabhdaswant',
    name: 'Saurabh Daswant',
    website: 'https://saurabhdaswant.com/',
    x: 'https://x.com/saurabhdaswant',
  },
  {
    github: 'https://github.com/ajaypatelaj',
    name: 'Ajay Patel',
    x: 'https://x.com/ajaypatel_aj',
  },
  {
    github: 'https://github.com/jessejanderson',
    name: 'Jesse J. Anderson',
    website: 'https://jessej.design/',
    x: 'https://x.com/adhdjesse',
  },
  {
    github: 'https://github.com/tothienbao6a0',
    name: 'Bao To',
    website: 'https://baothiento.com/',
    x: 'https://x.com/baothiento',
  },
  {
    github: 'https://github.com/daformat',
    name: 'Mathieu Jouhet',
    website: 'https://hello-mat.com/',
    x: 'https://x.com/daformat',
  },
  {
    github: 'https://github.com/lichin-lin',
    name: 'Lichin Lin',
    website: 'https://designtips.today/',
    x: 'https://x.com/lichinlin',
  },
  {
    github: 'https://github.com/Smintfy',
    name: 'Smintfy',
    website: 'https://www.smintfy.com/',
    x: 'https://x.com/smintfy',
  },
  {
    github: 'https://github.com/kaftarmery',
    name: 'Mery Kaftar',
    website: 'https://www.mery.codes/',
    x: 'https://x.com/merycodes',
  },
  {
    github: 'https://github.com/PixelJanitor',
    name: 'Derek Briggs',
    website: 'https://www.pixeljanitor.com/',
    x: 'https://x.com/PixelJanitor',
  },
  {
    github: 'https://github.com/joe-bell',
    name: 'Joe Bell',
    website: 'https://joebell.studio/',
    x: 'https://x.com/joebell_',
  },
  {
    github: 'https://github.com/bradlc',
    name: 'Brad Cornes',
    website: 'https://bradley.dev/',
    x: 'https://x.com/bradlc',
  },
  {
    github: 'https://github.com/alexcarpenter',
    name: 'Alex Carpenter',
    website: 'https://alexcarpenter.me/',
    x: 'https://x.com/hybrid_alex',
  },
  {
    name: 'Will Thomson',
    website: 'https://www.over-stimulated.com/',
    x: 'https://x.com/willthomson__',
  },
  {
    github: 'https://github.com/micahbrich',
    name: 'Micah Rich',
    website: 'https://micah.sh/',
    x: 'https://x.com/micahbrich',
  },
  {
    github: 'https://github.com/nattui',
    name: 'Natt Nguyen',
    website: 'https://natt.sh',
  },
  {
    name: 'Mike Harmer',
    website: 'https://www.mikeharmer.com/',
    x: 'https://x.com/mikeharmer',
  },
  {
    definition:
      'Design engineering is removing the abstraction between the idea of the thing and the thing itself. It binds together the creative act of exploration and the technical discipline of making something real.',
    github: 'https://github.com/heymynameisrob',
    name: 'Rob Hough',
    website: 'https://heymynameisrob.com/',    
  },
];

export const list = designEngineers
  .map(engineer => engineer.name)
  .sort(alphaSort({ caseInsensitive: true }))
  .map(name => designEngineers.find(engineer => engineer.name === name)!);
