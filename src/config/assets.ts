/**
 * CENTRALIZED VISUAL ASSET CONFIGURATION — ANURAG STUDIOS
 *
 * Every photo and video in the project is cleanly marked and numbered:
 * - PHOTOS: 1 through 25 (stored in src/assets/images/1.jpg to 25.jpg)
 * - VIDEOS: 1 through 7 (Showreel + 6 Film Projects)
 *
 * To replace any photo with your own:
 * Simply replace the corresponding file in `src/assets/images/[number].jpg`,
 * or update the import/src below.
 */

import photo1 from '../assets/images/1.jpg';
import photo2 from '../assets/images/2.jpg';
import photo3 from '../assets/images/3.jpg';
import photo4 from '../assets/images/4.jpg';
import photo5 from '../assets/images/5.jpg';
import photo6 from '../assets/images/6.jpg';
import photo7 from '../assets/images/7.jpg';
import photo8 from '../assets/images/8.jpg';
import photo9 from '../assets/images/9.jpg';
import photo10 from '../assets/images/10.jpg';
import photo11 from '../assets/images/11.jpg';
import photo12 from '../assets/images/12.jpg';
import photo13 from '../assets/images/13.jpg';
import photo14 from '../assets/images/14.jpg';
import photo15 from '../assets/images/15.jpg';
import photo16 from '../assets/images/16.jpg';
import photo17 from '../assets/images/17.jpg';
import photo18 from '../assets/images/18.jpg';
import photo19 from '../assets/images/19.jpg';
import photo20 from '../assets/images/20.jpg';
import photo21 from '../assets/images/21.jpg';
import photo22 from '../assets/images/22.jpg';
import photo23 from '../assets/images/23.jpg';
import photo24 from '../assets/images/24.jpg';
import photo25 from '../assets/images/25.jpg';

export interface StudioAsset {
  id: string;
  slot: string;
  number: number;
  badge: string;
  title: string;
  src: string;
  alt: string;
  aspectRatio: string;
  location: string;
}

export interface StudioVideo {
  id: string;
  slot: string;
  number: number;
  badge: string;
  title: string;
  category: string;
  location: string;
  posterAsset: string;
}

export const STUDIO_ASSETS = {
  IMAGE_01: {
    id: 'IMAGE_01',
    slot: '01',
    number: 1,
    badge: 'photo 1',
    title: 'Photo 1 · Main Cinematic Hero Background',
    src: photo1,
    alt: 'Photo 1 — Anurag Studios soundstage with cinema camera dolly and tungsten volumetric beam',
    aspectRatio: '16:9',
    location: 'Hero Section (Full screen background)',
  },
  IMAGE_02: {
    id: 'IMAGE_02',
    slot: '02',
    number: 2,
    badge: 'photo 2',
    title: 'Photo 2 · Founder / Creative Director Portrait',
    src: photo2,
    alt: 'Photo 2 — Founder and Creative Director silhouette portrait beside cinema lens',
    aspectRatio: '3:4',
    location: 'Hero Section (Floating showreel trigger card)',
  },
  IMAGE_03: {
    id: 'IMAGE_03',
    slot: '03',
    number: 3,
    badge: 'photo 3',
    title: 'Photo 3 · Film Production Behind-The-Scenes Rig',
    src: photo3,
    alt: 'Photo 3 — Behind-the-scenes cinema camera rig on film production set',
    aspectRatio: '4:3',
    location: 'About Section & Marquee Reel',
  },
  IMAGE_04: {
    id: 'IMAGE_04',
    slot: '04',
    number: 4,
    badge: 'photo 4',
    title: 'Photo 4 · Cinematic Short-Film Still (35mm)',
    src: photo4,
    alt: 'Photo 4 — Anamorphic nocturnal short-film frame under amber streetlamp',
    aspectRatio: '16:9',
    location: 'Services Section (Film Production service card)',
  },
  IMAGE_05: {
    id: 'IMAGE_05',
    slot: '05',
    number: 5,
    badge: 'photo 5',
    title: 'Photo 5 · Commercial Film Still (Light Study)',
    src: photo5,
    alt: 'Photo 5 — Architectural commercial film frame with dramatic warm light beam',
    aspectRatio: '16:9',
    location: 'Services Section (Commercial Production service card)',
  },
  IMAGE_06: {
    id: 'IMAGE_06',
    slot: '06',
    number: 6,
    badge: 'photo 6',
    title: 'Photo 6 · Music Video Still (Atmospheric Stage)',
    src: photo6,
    alt: 'Photo 6 — Atmospheric music video performance frame with electric blue haze',
    aspectRatio: '16:9',
    location: 'Marquee Reel Section',
  },
  IMAGE_07: {
    id: 'IMAGE_07',
    slot: '07',
    number: 7,
    badge: 'photo 7',
    title: 'Photo 7 · Documentary Film Still (Nocturne)',
    src: photo7,
    alt: 'Photo 7 — Documentary cinema frame capturing moody nocturnal atmosphere',
    aspectRatio: '16:9',
    location: 'Marquee Reel Section',
  },
  IMAGE_08: {
    id: 'IMAGE_08',
    slot: '08',
    number: 8,
    badge: 'photo 8',
    title: 'Photo 8 · Anamorphic Prime Lens & Matte Box Rig',
    src: photo8,
    alt: 'Photo 8 — Anamorphic prime lens and cinema camera matte box rig',
    aspectRatio: '4:3',
    location: 'About Section & Services (Cinematography)',
  },
  IMAGE_09: {
    id: 'IMAGE_09',
    slot: '09',
    number: 9,
    badge: 'photo 9',
    title: 'Photo 9 · Film Production Crew & Soundstage Dolly',
    src: photo9,
    alt: 'Photo 9 — Film production crew operating dolly track on dark soundstage',
    aspectRatio: '16:9',
    location: 'About Section & Services (Creative Direction)',
  },
  IMAGE_10: {
    id: 'IMAGE_10',
    slot: '10',
    number: 10,
    badge: 'photo 10',
    title: 'Photo 10 · Creative Direction Desk & 35mm Slate',
    src: photo10,
    alt: 'Photo 10 — Creative direction desk with prime lenses, 35mm film strip, and slate',
    aspectRatio: '16:9',
    location: 'About Section & Services (Post-Production)',
  },
  IMAGE_11: {
    id: 'IMAGE_11',
    slot: '11',
    number: 11,
    badge: 'photo 11',
    title: 'Photo 11 · Portfolio Film 01 Key Frame Still',
    src: photo11,
    alt: 'Photo 11 — Selected work 01 narrative short film key frame',
    aspectRatio: '16:9',
    location: 'Projects Section (Film 01 "After the Rain")',
  },
  IMAGE_12: {
    id: 'IMAGE_12',
    slot: '12',
    number: 12,
    badge: 'photo 12',
    title: 'Photo 12 · Portfolio Film 02 Key Frame Still',
    src: photo12,
    alt: 'Photo 12 — Selected work 02 architectural commercial film key frame',
    aspectRatio: '16:9',
    location: 'Projects Section (Film 02 "Monolith in Light")',
  },
  IMAGE_13: {
    id: 'IMAGE_13',
    slot: '13',
    number: 13,
    badge: 'photo 13',
    title: 'Photo 13 · Portfolio Film 03 Key Frame Still',
    src: photo13,
    alt: 'Photo 13 — Selected work 03 music video performance key frame',
    aspectRatio: '16:9',
    location: 'Projects Section (Film 03 "Electric Echo")',
  },
  IMAGE_14: {
    id: 'IMAGE_14',
    slot: '14',
    number: 14,
    badge: 'photo 14',
    title: 'Photo 14 · Portfolio Film 04 Key Frame Still',
    src: photo14,
    alt: 'Photo 14 — Selected work 04 documentary behind-the-scenes key frame',
    aspectRatio: '4:3',
    location: 'Projects Section (Film 04 "Frames of Craft")',
  },
  IMAGE_15: {
    id: 'IMAGE_15',
    slot: '15',
    number: 15,
    badge: 'photo 15',
    title: 'Photo 15 · Portfolio Film 05 Key Frame Still',
    src: photo15,
    alt: 'Photo 15 — Selected work 05 soundstage campaign key frame',
    aspectRatio: '16:9',
    location: 'Projects Section (Film 05 "Stage Zero Campaign")',
  },
  IMAGE_16: {
    id: 'IMAGE_16',
    slot: '16',
    number: 16,
    badge: 'photo 16',
    title: 'Photo 16 · Portfolio Film 06 Key Frame Still',
    src: photo16,
    alt: 'Photo 16 — Selected work 06 analog celluloid visual essay key frame',
    aspectRatio: '16:9',
    location: 'Projects Section (Film 06 "Celluloid Diaries")',
  },
  IMAGE_17: {
    id: 'IMAGE_17',
    slot: '17',
    number: 17,
    badge: 'photo 17',
    title: 'Photo 17 · Team Portrait: Founder / Creative Director',
    src: photo17,
    alt: 'Photo 17 — Founder and Creative Director portrait placeholder',
    aspectRatio: '3:4',
    location: 'Team Section (Member 01)',
  },
  IMAGE_18: {
    id: 'IMAGE_18',
    slot: '18',
    number: 18,
    badge: 'photo 18',
    title: 'Photo 18 · Team Portrait: Film Director',
    src: photo18,
    alt: 'Photo 18 — Film Director portrait placeholder',
    aspectRatio: '3:4',
    location: 'Team Section (Member 02)',
  },
  IMAGE_19: {
    id: 'IMAGE_19',
    slot: '19',
    number: 19,
    badge: 'photo 19',
    title: 'Photo 19 · Team Portrait: Cinematographer',
    src: photo19,
    alt: 'Photo 19 — Cinematographer on set portrait placeholder',
    aspectRatio: '3:4',
    location: 'Team Section (Member 03)',
  },
  IMAGE_20: {
    id: 'IMAGE_20',
    slot: '20',
    number: 20,
    badge: 'photo 20',
    title: 'Photo 20 · Team Portrait: Lead Editor / Post-Production',
    src: photo20,
    alt: 'Photo 20 — Lead Editor and Production Team portrait placeholder',
    aspectRatio: '3:4',
    location: 'Team Section (Member 04)',
  },
  IMAGE_21: {
    id: 'IMAGE_21',
    slot: '21',
    number: 21,
    badge: 'photo 21',
    title: 'Photo 21 · Client Testimonial Portrait 01',
    src: photo21,
    alt: 'Photo 21 — Client collaborator portrait placeholder 01',
    aspectRatio: '1:1',
    location: 'Testimonials Section (Review 01)',
  },
  IMAGE_22: {
    id: 'IMAGE_22',
    slot: '22',
    number: 22,
    badge: 'photo 22',
    title: 'Photo 22 · Client Testimonial Portrait 02',
    src: photo22,
    alt: 'Photo 22 — Client collaborator portrait placeholder 02',
    aspectRatio: '1:1',
    location: 'Testimonials Section (Review 02)',
  },
  IMAGE_23: {
    id: 'IMAGE_23',
    slot: '23',
    number: 23,
    badge: 'photo 23',
    title: 'Photo 23 · Behind-the-Scenes Journal Article 01',
    src: photo23,
    alt: 'Photo 23 — Filmmaking slate, prime lenses, and 35mm strips on studio table',
    aspectRatio: '16:9',
    location: 'Journal / Articles Section (Article 01)',
  },
  IMAGE_24: {
    id: 'IMAGE_24',
    slot: '24',
    number: 24,
    badge: 'photo 24',
    title: 'Photo 24 · Behind-the-Scenes Journal Article 02',
    src: photo24,
    alt: 'Photo 24 — Cinematography crew calibrating anamorphic rig between takes',
    aspectRatio: '16:9',
    location: 'Journal / Articles Section (Article 02)',
  },
  IMAGE_25: {
    id: 'IMAGE_25',
    slot: '25',
    number: 25,
    badge: 'photo 25',
    title: 'Photo 25 · Final Cinematic CTA Background',
    src: photo25,
    alt: 'Photo 25 — Atmospheric film soundstage illuminated by warm cinema spotlight',
    aspectRatio: '16:9',
    location: 'Contact & Booking Section (Footer CTA)',
  },
} as const satisfies Record<string, StudioAsset>;

export const STUDIO_VIDEOS: Record<string, StudioVideo> = {
  VIDEO_01: {
    id: 'VIDEO_01',
    slot: '01',
    number: 1,
    badge: 'video 1',
    title: 'Video 1 · Studio Showreel',
    category: 'Showreel Preview',
    location: 'Hero Section (Magnetic Showreel Button & Player)',
    posterAsset: 'IMAGE_02',
  },
  VIDEO_02: {
    id: 'VIDEO_02',
    slot: '02',
    number: 2,
    badge: 'video 2',
    title: 'Video 2 · Film 01 "After the Rain"',
    category: 'Short Film',
    location: 'Projects Section (Film 01 Interactive Cinema Player)',
    posterAsset: 'IMAGE_11',
  },
  VIDEO_03: {
    id: 'VIDEO_03',
    slot: '03',
    number: 3,
    badge: 'video 3',
    title: 'Video 3 · Film 02 "Monolith in Light"',
    category: 'Commercial',
    location: 'Projects Section (Film 02 Interactive Cinema Player)',
    posterAsset: 'IMAGE_12',
  },
  VIDEO_04: {
    id: 'VIDEO_04',
    slot: '04',
    number: 4,
    badge: 'video 4',
    title: 'Video 4 · Film 03 "Electric Echo"',
    category: 'Music Video',
    location: 'Projects Section (Film 03 Interactive Cinema Player)',
    posterAsset: 'IMAGE_13',
  },
  VIDEO_05: {
    id: 'VIDEO_05',
    slot: '05',
    number: 5,
    badge: 'video 5',
    title: 'Video 5 · Film 04 "Frames of Craft"',
    category: 'Documentary',
    location: 'Projects Section (Film 04 Interactive Cinema Player)',
    posterAsset: 'IMAGE_14',
  },
  VIDEO_06: {
    id: 'VIDEO_06',
    slot: '06',
    number: 6,
    badge: 'video 6',
    title: 'Video 6 · Film 05 "Stage Zero Campaign"',
    category: 'Commercial',
    location: 'Projects Section (Film 05 Interactive Cinema Player)',
    posterAsset: 'IMAGE_15',
  },
  VIDEO_07: {
    id: 'VIDEO_07',
    slot: '07',
    number: 7,
    badge: 'video 7',
    title: 'Video 7 · Film 06 "Celluloid Diaries"',
    category: 'Short Film',
    location: 'Projects Section (Film 06 Interactive Cinema Player)',
    posterAsset: 'IMAGE_16',
  },
};

export type StudioAssetKey = keyof typeof STUDIO_ASSETS;

export function getAsset(key: StudioAssetKey): StudioAsset {
  return STUDIO_ASSETS[key];
}

export function getAssetBadgeBySrc(src?: string): string | undefined {
  if (!src) return undefined;
  const match = Object.values(STUDIO_ASSETS).find(
    (asset) => asset.src === src
  );
  return match?.badge;
}
