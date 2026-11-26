import { STUDIO_ASSETS, type StudioAssetKey } from './assets';

export interface StudioService {
  number: string;
  name: string;
  capabilities: string[];
  description: string;
  previewAsset: StudioAssetKey;
}

export interface FilmProject {
  id: string;
  number: string;
  title: string;
  category: 'Short Film' | 'Commercial' | 'Music Video' | 'Documentary';
  year: string;
  director: string;
  cinematographer: string;
  editor: string;
  runtime: string;
  format: string;
  shortDescription: string;
  directorNote: string;
  primaryAsset: StudioAssetKey;
  galleryAssets: [StudioAssetKey, StudioAssetKey, StudioAssetKey];
}

export interface TeamMember {
  id: string;
  role: string;
  namePlaceholder: string;
  focus: string;
  asset: StudioAssetKey;
}

export interface TestimonialItem {
  id: string;
  quotePlaceholder: string;
  authorPlaceholder: string;
  roleCompanyPlaceholder: string;
  projectType: string;
  asset: StudioAssetKey;
}

export interface JournalEntry {
  id: string;
  number: string;
  category: string;
  datePlaceholder: string;
  title: string;
  excerpt: string;
  body: string[];
  asset: StudioAssetKey;
}

export const STUDIO_CONTACT = {
  brandName: 'ANURAG STUDIOS',
  email: 'hello@anuragstudios.com', // [EDITABLE PLACEHOLDER]
  phone: '+00 000 000 0000', // [EDITABLE PLACEHOLDER]
  location: 'Mumbai / Kathmandu — Available Worldwide', // [EDITABLE PLACEHOLDER]
  socials: [
    { label: 'Instagram', href: '#contact', handle: '@anuragstudios' },
    { label: 'Vimeo', href: '#contact', handle: 'vimeo.com/anuragstudios' },
    { label: 'YouTube', href: '#contact', handle: 'youtube.com/@anuragstudios' },
    { label: 'LinkedIn', href: '#contact', handle: 'linkedin.com/company/anuragstudios' },
  ],
};

export const MARQUEE_REEL_ROW_1: { asset: StudioAssetKey; caption: string }[] = [
  { asset: 'IMAGE_03', caption: 'BTS · Camera Rig' },
  { asset: 'IMAGE_04', caption: 'Short Film · 35mm' },
  { asset: 'IMAGE_05', caption: 'Commercial · Light Study' },
  { asset: 'IMAGE_06', caption: 'Music Video · Stage' },
  { asset: 'IMAGE_08', caption: 'Cinematography · Anamorphic' },
  { asset: 'IMAGE_09', caption: 'Soundstage · Dolly' },
];

export const MARQUEE_REEL_ROW_2: { asset: StudioAssetKey; caption: string }[] = [
  { asset: 'IMAGE_07', caption: 'Documentary · Nocturne' },
  { asset: 'IMAGE_10', caption: 'Creative Direction · Slate' },
  { asset: 'IMAGE_01', caption: 'Production · Lighting' },
  { asset: 'IMAGE_05', caption: 'Brand Film · Architecture' },
  { asset: 'IMAGE_06', caption: 'Visuals · Atmosphere' },
  { asset: 'IMAGE_03', caption: 'Set · Direction' },
];

export const STUDIO_SERVICES: StudioService[] = [
  {
    number: '01',
    name: 'Film Production',
    capabilities: [
      'Short Films',
      'Feature Films',
      'Documentary Films',
      'Narrative Storytelling',
    ],
    description:
      'End-to-end narrative filmmaking from script breakdown and casting to principal photography and festival-ready finishing.',
    previewAsset: 'IMAGE_04',
  },
  {
    number: '02',
    name: 'Commercial Production',
    capabilities: [
      'Brand Films',
      'Advertising Films',
      'Promotional Videos',
      'Corporate Films',
    ],
    description:
      'High-impact visual campaigns engineered to elevate cultural brands with theatrical lighting, art direction, and precision craft.',
    previewAsset: 'IMAGE_05',
  },
  {
    number: '03',
    name: 'Cinematography',
    capabilities: [
      'Visual Storytelling',
      'Camera Direction',
      'Lighting Design',
      'Cinematic Composition',
    ],
    description:
      'Intentional framing, anamorphic lens language, and sculptural lighting design that give every scene unmistakable emotional weight.',
    previewAsset: 'IMAGE_08',
  },
  {
    number: '04',
    name: 'Post-Production',
    capabilities: [
      'Video Editing',
      'Color Grading',
      'Sound Design',
      'Visual Effects',
    ],
    description:
      'Rhythmic editorial assembly, filmic DI color pipelines, immersive soundscapes, and invisible visual effects.',
    previewAsset: 'IMAGE_10',
  },
  {
    number: '05',
    name: 'Creative Direction',
    capabilities: [
      'Concept Development',
      'Script Development',
      'Art Direction',
      'Visual Identity',
    ],
    description:
      'Original treatments, visual bibles, lookbooks, and holistic world-building before a single frame is captured.',
    previewAsset: 'IMAGE_09',
  },
];

export const FILM_PROJECTS: FilmProject[] = [
  {
    id: 'midnight-frequency',
    number: '01',
    title: 'After the Rain',
    category: 'Short Film',
    year: '2026',
    director: '[Director Name Placeholder]',
    cinematographer: '[Cinematographer Name Placeholder]',
    editor: '[Editor Name Placeholder]',
    runtime: '14 MIN',
    format: 'ARRI Alexa Mini LF · Anamorphic',
    shortDescription:
      'An atmospheric nocturnal study of solitude, memory, and quiet transformation set across rain-washed city streets.',
    directorNote:
      'Replace this synopsis with your actual short film statement, festival selections, and production notes directly inside src/config/studioConfig.ts.',
    primaryAsset: 'IMAGE_11',
    galleryAssets: ['IMAGE_03', 'IMAGE_08', 'IMAGE_11'],
  },
  {
    id: 'monolith-light',
    number: '02',
    title: 'Monolith in Light',
    category: 'Commercial',
    year: '2026',
    director: '[Director Name Placeholder]',
    cinematographer: '[Cinematographer Name Placeholder]',
    editor: '[Editor Name Placeholder]',
    runtime: '02 MIN 15 SEC',
    format: '35mm Film Emulation · 2.39:1',
    shortDescription:
      'A sculptural brand film exploring shadow, brutalist architecture, and natural golden-hour geometry.',
    directorNote:
      'Replace this production brief with client campaign objectives, shooting locations, and creative direction details in src/config/studioConfig.ts.',
    primaryAsset: 'IMAGE_12',
    galleryAssets: ['IMAGE_09', 'IMAGE_10', 'IMAGE_12'],
  },
  {
    id: 'electric-echo',
    number: '03',
    title: 'Electric Echo',
    category: 'Music Video',
    year: '2025',
    director: '[Director Name Placeholder]',
    cinematographer: '[Cinematographer Name Placeholder]',
    editor: '[Editor Name Placeholder]',
    runtime: '04 MIN 10 SEC',
    format: 'Anamorphic Primes · 48fps Slow Motion',
    shortDescription:
      'A kinetic visual performance bathed in volumetric cobalt haze, practical tungsten flares, and hypnotic camera choreography.',
    directorNote:
      'Replace with artist credits, track notes, and stage lighting breakdowns inside src/config/studioConfig.ts.',
    primaryAsset: 'IMAGE_13',
    galleryAssets: ['IMAGE_01', 'IMAGE_04', 'IMAGE_13'],
  },
  {
    id: 'frames-of-craft',
    number: '04',
    title: 'Frames of Craft',
    category: 'Documentary',
    year: '2025',
    director: '[Director Name Placeholder]',
    cinematographer: '[Cinematographer Name Placeholder]',
    editor: '[Editor Name Placeholder]',
    runtime: '22 MIN',
    format: 'Handheld Cinema · Natural Light',
    shortDescription:
      'An intimate documentary portrait following independent artisans and filmmakers obsessing over every tactile detail.',
    directorNote:
      'Replace with documentary subject notes, filming timeline, and screening details in src/config/studioConfig.ts.',
    primaryAsset: 'IMAGE_14',
    galleryAssets: ['IMAGE_08', 'IMAGE_23', 'IMAGE_14'],
  },
  {
    id: 'stage-zero',
    number: '05',
    title: 'Stage Zero Campaign',
    category: 'Commercial',
    year: '2025',
    director: '[Director Name Placeholder]',
    cinematographer: '[Cinematographer Name Placeholder]',
    editor: '[Editor Name Placeholder]',
    runtime: '01 MIN 30 SEC',
    format: 'Soundstage Dolly · Large Format',
    shortDescription:
      'A theatrical launch film built on choreographed dolly movements, stark darkness, and precision tungsten key light.',
    directorNote:
      'Replace with commercial deliverables, crew credits, and campaign context in src/config/studioConfig.ts.',
    primaryAsset: 'IMAGE_15',
    galleryAssets: ['IMAGE_05', 'IMAGE_03', 'IMAGE_15'],
  },
  {
    id: 'celluloid-diaries',
    number: '06',
    title: 'Celluloid Diaries',
    category: 'Short Film',
    year: '2024',
    director: '[Director Name Placeholder]',
    cinematographer: '[Cinematographer Name Placeholder]',
    editor: '[Editor Name Placeholder]',
    runtime: '09 MIN',
    format: 'Super 35 · Experimental Essay',
    shortDescription:
      'An experimental visual essay meditating on tactile filmmaking, optical lenses, and the patience of analog cinema.',
    directorNote:
      'Replace with your visual essay overview and creative credits in src/config/studioConfig.ts.',
    primaryAsset: 'IMAGE_16',
    galleryAssets: ['IMAGE_04', 'IMAGE_06', 'IMAGE_16'],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'founder',
    role: 'Founder / Creative Director',
    namePlaceholder: '[Founder Name]',
    focus: 'Vision, Narrative Direction & Studio Leadership',
    asset: 'IMAGE_17',
  },
  {
    id: 'director',
    role: 'Director',
    namePlaceholder: '[Director Name]',
    focus: 'Narrative & Commercial Film Direction',
    asset: 'IMAGE_18',
  },
  {
    id: 'cinematographer',
    role: 'Cinematographer',
    namePlaceholder: '[Cinematographer Name]',
    focus: 'Lighting Design, Lens Language & Camera Movement',
    asset: 'IMAGE_19',
  },
  {
    id: 'editor-production',
    role: 'Editor & Production Team',
    namePlaceholder: '[Lead Editor / Producer Name]',
    focus: 'Editorial Rhythm, DI Color & On-Set Production',
    asset: 'IMAGE_20',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testimonial-01',
    quotePlaceholder:
      '"[Client Testimonial Placeholder 01 — Replace with an authentic quote from a director, producer, or brand partner about working with Anurag Studios from concept to final grade.]"',
    authorPlaceholder: '[Client Name Placeholder]',
    roleCompanyPlaceholder: '[Title · Brand or Agency Name]',
    projectType: 'Commercial Production',
    asset: 'IMAGE_21',
  },
  {
    id: 'testimonial-02',
    quotePlaceholder:
      '"[Client Testimonial Placeholder 02 — Replace with real collaborator feedback highlighting cinematography quality, storytelling clarity, and on-set execution.]"',
    authorPlaceholder: '[Collaborator Name Placeholder]',
    roleCompanyPlaceholder: '[Role · Production Partner]',
    projectType: 'Narrative Film & Post-Production',
    asset: 'IMAGE_22',
  },
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'shaping-darkness',
    number: '01',
    category: 'Cinematography',
    datePlaceholder: 'Production Diary · Entry 01',
    title: 'Shaping Darkness: Lighting with Negative Fill & Practical Tungsten',
    excerpt:
      'Notes from the soundstage on carving silhouette, controlling haze density, and choosing where light should never fall.',
    body: [
      'Great cinematography is defined as much by what stays in shadow as by what enters the key light. On our recent soundstage tests, we stripped the rig down to a single hard tungsten source balanced against a subtle cool rim.',
      'Replace this journal article with your own behind-the-scenes filmmaking notes, camera tests, lighting diagrams, and studio updates inside src/config/studioConfig.ts.',
    ],
    asset: 'IMAGE_24',
  },
  {
    id: 'from-script-to-slate',
    number: '02',
    category: 'Behind the Scenes',
    datePlaceholder: 'Filmmaking Insights · Entry 02',
    title: 'From Treatment to First Slate: Building a Visual Bible',
    excerpt:
      'How Anurag Studios aligns directors, cinematographers, and art departments around a unified tonal language before day one.',
    body: [
      'Every memorable film begins long before lenses leave the case. We assemble tactile reference decks—textures, lens distortion tests, soundscapes, and color palettes—so every department speaks the same cinematic language.',
      'Use this editable journal section to publish studio announcements, director essays, and creative experiments.',
    ],
    asset: 'IMAGE_23',
  },
  {
    id: 'color-as-memory',
    number: '03',
    category: 'Creative Experiments',
    datePlaceholder: 'Post-Production · Entry 03',
    title: 'Color as Emotion: Balancing Warm Amber Against Nocturnal Blue',
    excerpt:
      'Exploring photochemical print emulation and tonal contrast in our grading suite for narrative shorts and music films.',
    body: [
      'Color grading is the final rewrite of a film. By holding deep blacks at neutral obsidian and letting practical highlights bloom gently into warm orange, every frame retains tactile filmic depth.',
      'Edit or expand these journal entries anytime in src/config/studioConfig.ts.',
    ],
    asset: 'IMAGE_04',
  },
];

export function getAsset(key: StudioAssetKey) {
  return STUDIO_ASSETS[key];
}
