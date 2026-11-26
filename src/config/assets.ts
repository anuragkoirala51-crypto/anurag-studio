/**
 * CENTRALIZED VISUAL ASSET CONFIGURATION — ANURAG STUDIOS
 *
 * Replace any `src` string below with your own photograph URL or local asset path.
 * Updating a single entry here automatically updates every component that uses it.
 */

export interface StudioAsset {
  id: string;
  slot: string;
  title: string;
  src: string;
  alt: string;
  aspectRatio: string;
}

const TEMP_IMAGES = {
  heroStage: '/src/assets/images/cinema_hero_stage_1795643752159.jpg',
  btsCrew: '/src/assets/images/cinema_bts_crew_1795643752790.jpg',
  narrativeStill: '/src/assets/images/film_still_narrative_1795643753617.jpg',
  commercialStill: '/src/assets/images/film_still_commercial_1795643756725.jpg',
  musicDocStill: '/src/assets/images/film_still_music_doc_1795643756129.jpg',
  directorPortrait: '/src/assets/images/cinema_portrait_director_1795643754958.jpg',
  journalFrame: '/src/assets/images/cinema_journal_frame_1795643757373.jpg',
} as const;

export const STUDIO_ASSETS = {
  IMAGE_01: {
    id: 'IMAGE_01',
    slot: '01',
    title: 'Main cinematic hero background',
    src: TEMP_IMAGES.heroStage,
    alt: 'Anurag Studios soundstage with cinema camera dolly and tungsten volumetric beam',
    aspectRatio: '16:9',
  },
  IMAGE_02: {
    id: 'IMAGE_02',
    slot: '02',
    title: 'Founder / creative director portrait',
    src: TEMP_IMAGES.directorPortrait,
    alt: 'Founder and Creative Director silhouette portrait beside cinema lens',
    aspectRatio: '3:4',
  },
  IMAGE_03: {
    id: 'IMAGE_03',
    slot: '03',
    title: 'Film production behind-the-scenes',
    src: TEMP_IMAGES.btsCrew,
    alt: 'Behind-the-scenes cinema camera rig on film production set',
    aspectRatio: '4:3',
  },
  IMAGE_04: {
    id: 'IMAGE_04',
    slot: '04',
    title: 'Cinematic short-film still',
    src: TEMP_IMAGES.narrativeStill,
    alt: 'Anamorphic nocturnal short-film frame under amber streetlamp',
    aspectRatio: '16:9',
  },
  IMAGE_05: {
    id: 'IMAGE_05',
    slot: '05',
    title: 'Commercial film still',
    src: TEMP_IMAGES.commercialStill,
    alt: 'Architectural commercial film frame with dramatic warm light beam',
    aspectRatio: '16:9',
  },
  IMAGE_06: {
    id: 'IMAGE_06',
    slot: '06',
    title: 'Music video still',
    src: TEMP_IMAGES.musicDocStill,
    alt: 'Atmospheric music video performance frame with electric blue haze',
    aspectRatio: '16:9',
  },
  IMAGE_07: {
    id: 'IMAGE_07',
    slot: '07',
    title: 'Documentary film still',
    src: TEMP_IMAGES.narrativeStill,
    alt: 'Documentary cinema frame capturing moody nocturnal atmosphere',
    aspectRatio: '16:9',
  },
  IMAGE_08: {
    id: 'IMAGE_08',
    slot: '08',
    title: 'Camera and cinematography setup',
    src: TEMP_IMAGES.btsCrew,
    alt: 'Anamorphic prime lens and cinema camera matte box rig',
    aspectRatio: '4:3',
  },
  IMAGE_09: {
    id: 'IMAGE_09',
    slot: '09',
    title: 'Film production crew',
    src: TEMP_IMAGES.heroStage,
    alt: 'Film production crew operating dolly track on dark soundstage',
    aspectRatio: '16:9',
  },
  IMAGE_10: {
    id: 'IMAGE_10',
    slot: '10',
    title: 'Creative direction project',
    src: TEMP_IMAGES.journalFrame,
    alt: 'Creative direction desk with prime lenses, 35mm film strip, and slate',
    aspectRatio: '16:9',
  },
  IMAGE_11: {
    id: 'IMAGE_11',
    slot: '11',
    title: 'Portfolio project 01 thumbnail — Narrative Short Film',
    src: TEMP_IMAGES.narrativeStill,
    alt: 'Selected work 01 — narrative short film key frame',
    aspectRatio: '16:9',
  },
  IMAGE_12: {
    id: 'IMAGE_12',
    slot: '12',
    title: 'Portfolio project 02 thumbnail — Commercial Film',
    src: TEMP_IMAGES.commercialStill,
    alt: 'Selected work 02 — architectural commercial film key frame',
    aspectRatio: '16:9',
  },
  IMAGE_13: {
    id: 'IMAGE_13',
    slot: '13',
    title: 'Portfolio project 03 thumbnail — Music Video',
    src: TEMP_IMAGES.musicDocStill,
    alt: 'Selected work 03 — music video performance key frame',
    aspectRatio: '16:9',
  },
  IMAGE_14: {
    id: 'IMAGE_14',
    slot: '14',
    title: 'Portfolio project 04 thumbnail — Documentary Featurette',
    src: TEMP_IMAGES.btsCrew,
    alt: 'Selected work 04 — documentary behind-the-scenes key frame',
    aspectRatio: '4:3',
  },
  IMAGE_15: {
    id: 'IMAGE_15',
    slot: '15',
    title: 'Portfolio project 05 thumbnail — Brand Campaign',
    src: TEMP_IMAGES.heroStage,
    alt: 'Selected work 05 — soundstage campaign key frame',
    aspectRatio: '16:9',
  },
  IMAGE_16: {
    id: 'IMAGE_16',
    slot: '16',
    title: 'Portfolio project 06 thumbnail — Visual Essay',
    src: TEMP_IMAGES.journalFrame,
    alt: 'Selected work 06 — analog celluloid visual essay key frame',
    aspectRatio: '16:9',
  },
  IMAGE_17: {
    id: 'IMAGE_17',
    slot: '17',
    title: 'Team portrait 01 — Founder / Creative Director',
    src: TEMP_IMAGES.directorPortrait,
    alt: 'Founder and Creative Director portrait placeholder',
    aspectRatio: '3:4',
  },
  IMAGE_18: {
    id: 'IMAGE_18',
    slot: '18',
    title: 'Team portrait 02 — Film Director',
    src: TEMP_IMAGES.directorPortrait,
    alt: 'Film Director portrait placeholder',
    aspectRatio: '3:4',
  },
  IMAGE_19: {
    id: 'IMAGE_19',
    slot: '19',
    title: 'Team portrait 03 — Cinematographer',
    src: TEMP_IMAGES.btsCrew,
    alt: 'Cinematographer on set portrait placeholder',
    aspectRatio: '3:4',
  },
  IMAGE_20: {
    id: 'IMAGE_20',
    slot: '20',
    title: 'Team portrait 04 — Lead Editor / Production',
    src: TEMP_IMAGES.journalFrame,
    alt: 'Lead Editor and Production Team portrait placeholder',
    aspectRatio: '3:4',
  },
  IMAGE_21: {
    id: 'IMAGE_21',
    slot: '21',
    title: 'Testimonial portrait 01',
    src: TEMP_IMAGES.directorPortrait,
    alt: 'Client collaborator portrait placeholder 01',
    aspectRatio: '1:1',
  },
  IMAGE_22: {
    id: 'IMAGE_22',
    slot: '22',
    title: 'Testimonial portrait 02',
    src: TEMP_IMAGES.btsCrew,
    alt: 'Client collaborator portrait placeholder 02',
    aspectRatio: '1:1',
  },
  IMAGE_23: {
    id: 'IMAGE_23',
    slot: '23',
    title: 'Behind-the-scenes journal image 01',
    src: TEMP_IMAGES.journalFrame,
    alt: 'Filmmaking slate, prime lenses, and 35mm strips on dark studio table',
    aspectRatio: '16:9',
  },
  IMAGE_24: {
    id: 'IMAGE_24',
    slot: '24',
    title: 'Behind-the-scenes journal image 02',
    src: TEMP_IMAGES.btsCrew,
    alt: 'Cinematography crew calibrating anamorphic rig between takes',
    aspectRatio: '16:9',
  },
  IMAGE_25: {
    id: 'IMAGE_25',
    slot: '25',
    title: 'Final cinematic CTA background',
    src: TEMP_IMAGES.heroStage,
    alt: 'Atmospheric film soundstage illuminated by warm cinema spotlight',
    aspectRatio: '16:9',
  },
} as const satisfies Record<string, StudioAsset>;

export type StudioAssetKey = keyof typeof STUDIO_ASSETS;

export function getAsset(key: StudioAssetKey): StudioAsset {
  return STUDIO_ASSETS[key];
}
