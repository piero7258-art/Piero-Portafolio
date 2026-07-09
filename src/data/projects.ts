import { AssetFile, listFiles, publicAsset, slugify } from "@/lib/assets";

export type YouTubeVideo = {
  id: string;
  title: string;
  start?: number;
};

export type Project = {
  slug: string;
  title: string;
  category: "Commercial" | "Documentary" | "DJ Sets" | "Short Film" | "Experimental" | "Creative Research" | "Sound Design";
  displayTitle?: string;
  description: string;
  role: string;
  year: string;
  tools: string[];
  outcome: string[];
  credits: string[];
  youtubeVideos: YouTubeVideo[];
  cover: string;
  gallery: AssetFile[];
  related: string[];
  links?: { label: string; href: string }[];
};

export const youtube = {
  channel: "https://www.youtube.com/channel/UCnthzs1bF5c_nxaGGQqiePA",
  featuredVideoId: "mgf-R6k1hXc",
  featuredTitle: "Piero Galley - Portfolio Reel"
};

function thumbnail(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function galleryFrom(folder: string, limit = 8) {
  return listFiles(folder)
    .filter((asset) => asset.type === "image")
    .slice(0, limit);
}

const projects: Project[] = [
  {
    slug: slugify("renacer"),
    title: "RENACER",
    category: "Short Film",
    description:
      "A cinematic short-form piece built around transformation, rhythm and emotional visual storytelling.",
    role: "Director / Editor / Visual Storyteller",
    year: "2024",
    tools: ["Premiere Pro", "DaVinci Resolve", "Sound Design", "Creative Direction"],
    outcome: ["Published film piece", "Narrative edit", "Cinematic pacing", "Portfolio anchor"],
    credits: ["Direction, editing and visual storytelling by Piero Galley."],
    youtubeVideos: [{ id: "kRpbZvxGMpc", title: "RENACER" }],
    cover: thumbnail("kRpbZvxGMpc"),
    gallery: galleryFrom("Piero Fotos", 8),
    related: ["a-traves-de-mis-ojos", "bendita-final"]
  },
  {
    slug: slugify("a traves de mis ojos"),
    title: "A traves de mis ojos",
    category: "Short Film",
    description:
      "University short film shaped through intimate point of view, location sound and carefully designed audio post-production.",
    role: "Sound Design / Location Sound / Audio Post-production",
    year: "2025",
    tools: ["Location Sound", "Sound Design", "Audio Post-production", "Narrative Structure"],
    outcome: ["Short film release", "Location audio capture", "Sound-led narrative support"],
    credits: ["Sound design, location sound and audio post-production by Piero Galley."],
    youtubeVideos: [{ id: "mnK7CYhXY-k", title: "A traves de mis ojos - Cortometraje Universitario" }],
    cover: thumbnail("mnK7CYhXY-k"),
    gallery: galleryFrom("Piero Fotos/Personal", 10),
    related: ["renacer", "documental-la-historia-de-mi-perra-vida", "bendita-final"]
  },
  {
    slug: slugify("documental la historia de mi perra vida"),
    title: "Documental La Historia de mi Perra Vida",
    displayTitle: "La Historia de mi Perra Vida",
    category: "Documentary",
    description:
      "A documentary project centered on character, memory and lived experience, supported by sound design and audio post-production that keeps the story intimate and grounded.",
    role: "Sound Design / Audio Production / Audio Post-production",
    year: "2025",
    tools: ["Sound Design", "Audio Production", "Audio Post-production", "Dialogue Treatment"],
    outcome: ["Published documentary", "Clean narrative audio", "Documentary atmosphere", "Sound-led emotional continuity"],
    credits: ["Documentary by Jaime Ganoza.", "Sound design, audio production and audio post-production by Piero Galley."],
    youtubeVideos: [{ id: "2ThviHROtbw", title: "Documental La Historia de mi Perra Vida" }],
    cover: thumbnail("2ThviHROtbw"),
    gallery: galleryFrom("Piero Fotos/Personal", 8),
    related: ["a-traves-de-mis-ojos", "renacer", "bendita-final"]
  },
  {
    slug: slugify("sociedad peruana bienes raices prestopolis growth system"),
    title: "Real Estate Growth System",
    displayTitle: "SPBR / Prestopolis",
    category: "Commercial",
    description:
      "A performance content and community management case study for Sociedad Peruana de Bienes Raices and Prestopolis, connecting paid strategy, content production, sales messaging, platform distribution and weekly podcast post-production.",
    role: "Content Strategist / Community Manager / Digital Distribution / Podcast Producer",
    year: "April-May 2026",
    tools: ["Meta Business Suite", "YouTube Studio", "Content Strategy", "Paid Segmentation", "Community Management", "Podcast Production"],
    outcome: [
      "92.6K YouTube views in the selected period",
      "+365 YouTube subscribers",
      "5.9K watch hours",
      "S/ 446 estimated YouTube revenue",
      "98.9K Meta views and 42.5K reach documented",
      "2.9K Instagram link clicks documented",
      "Weekly podcast production and post-production workflow"
    ],
    credits: [
      "Brands: Sociedad Peruana de Bienes Raices and Prestopolis.",
      "Content creation, paid strategy, community management, digital distribution and podcast production by Piero Galley.",
      "Sales messaging and audience segmentation developed in collaboration with the commercial team."
    ],
    youtubeVideos: [],
    cover: publicAsset("Real Estate Growth Case/youtube-overview-spbr.jpeg"),
    gallery: galleryFrom("Real Estate Growth Case", 8),
    related: ["community-management-case-study", "creative-research-ai-systems", "renacer"],
    links: [
      { label: "SPBR YouTube", href: "https://www.youtube.com/c/SOCIEDADPERUANADEBIENESRAICES" },
      { label: "SPBR LinkedIn", href: "https://www.linkedin.com/company/sociedadperuanadebienesraices/?originalSubdomain=pe" },
      { label: "SPBR Instagram", href: "https://www.instagram.com/sociedadbienesraices/?hl=es" },
      { label: "SPBR TikTok", href: "https://www.tiktok.com/@bienes.raicess" },
      { label: "SPBR Facebook", href: "https://www.facebook.com/BienesRaicessPeru/?locale=es_LA" },
      { label: "Prestopolis YouTube", href: "https://www.youtube.com/@Prestopolis" },
      { label: "Prestopolis Instagram", href: "https://www.instagram.com/prestopolis/" },
      { label: "Prestopolis Facebook", href: "https://www.facebook.com/prestopolispe/?locale=es_LA" },
      { label: "Prestopolis LinkedIn", href: "https://www.linkedin.com/company/prestopolis/" }
    ]
  },
  {
    slug: slugify("mondo central beat casona de camana 2025"),
    title: "Mondo @ CENTRAL BEAT",
    category: "DJ Sets",
    description:
      "Premium audiovisual case study for a deep minimal and tech house live performance in Casona de Camana.",
    role: "Video Editor / Audiovisual Producer / Music Culture Direction",
    year: "2025",
    tools: ["Premiere Pro", "Color", "Music Sync", "Event Coverage"],
    outcome: ["Published DJ set", "Long-form performance coverage", "Club atmosphere captured"],
    credits: ["Artist: Mondo (PE)", "Location: Casona de Camana", "Audiovisual edit and production support by Piero Galley."],
    youtubeVideos: [{ id: "ooNVwBGn8l4", title: "Mondo (PE) @ CENTRAL BEAT - CASONA DE CAMANA 2025", start: 291 }],
    cover: thumbnail("ooNVwBGn8l4"),
    gallery: galleryFrom("Ediciones", 8),
    related: ["mondo-fun-village-2025", "dj-frodo-home-sesh-vol-1"]
  },
  {
    slug: slugify("mondo fun village 2025"),
    title: "Mondo @ Fun Village",
    category: "DJ Sets",
    description:
      "A live deep tech and tech house performance treated as a music-led visual story rather than a simple recording.",
    role: "Video Editor / Audiovisual Producer",
    year: "2025",
    tools: ["Premiere Pro", "DaVinci Resolve", "Sound Sync", "Event Coverage"],
    outcome: ["Published DJ set", "Performance edit", "Artist-focused audiovisual piece"],
    credits: ["Artist: Mondo (PE)", "Location: Fun Village", "Audiovisual edit and production support by Piero Galley."],
    youtubeVideos: [{ id: "1g_Hocme6mU", title: "Mondo (PE) @ Fun Village 2025", start: 47 }],
    cover: thumbnail("1g_Hocme6mU"),
    gallery: galleryFrom("edits chambas mondo", 6),
    related: ["mondo-central-beat-casona-de-camana-2025", "dj-frodo-home-sesh-vol-1"]
  },
  {
    slug: slugify("dj frodo home sesh vol 1"),
    title: "DJ Frodo - Home Sesh Vol.1",
    category: "DJ Sets",
    description:
      "A personal DJ performance in the tech house, deep and minimal space, centered on groove and intimate session energy.",
    role: "DJ / Performer / Sound Curator",
    year: "2025",
    tools: ["DJ Performance", "Music Selection", "Live Mixing", "Sound Direction"],
    outcome: ["Published DJ session", "Personal music identity", "Long-form mix content"],
    credits: ["DJ: Frodo", "Recorded in Lima, Peru."],
    youtubeVideos: [{ id: "LRNgj25GJoc", title: "DJ Frodo - Home Sesh Vol.1" }],
    cover: thumbnail("LRNgj25GJoc"),
    gallery: galleryFrom("Eventos", 4),
    related: ["mondo-central-beat-casona-de-camana-2025", "mondo-fun-village-2025"]
  },
  {
    slug: slugify("bendita final"),
    title: "Bendita",
    category: "Sound Design",
    description:
      "Music-driven visual edit focused on color, pacing, post-production rhythm and audio-visual texture.",
    role: "Editor / Color / Sound Design",
    year: "2024",
    tools: ["Premiere Pro", "Color Grading", "Sound Design", "Post-production"],
    outcome: ["Published edit", "Music video language", "Color and sound-led visual treatment"],
    credits: ["Editing, color and sound treatment by Piero Galley."],
    youtubeVideos: [{ id: "0PEU-QAzmFs", title: "Bendita final 2.1 tb2" }],
    cover: thumbnail("0PEU-QAzmFs"),
    gallery: galleryFrom("Ediciones", 10),
    related: ["renacer", "a-traves-de-mis-ojos"]
  },
  {
    slug: slugify("tech house deep minimal groove"),
    title: "Tech House / Deep Minimal Groove",
    displayTitle: "Tech House / DJ Sets",
    category: "Experimental",
    description:
      "A music experiment exploring groove, tempo, repetition and club-oriented mood as part of the DJ identity system.",
    role: "DJ / Creative Experiment",
    year: "2026",
    tools: ["DJ Performance", "Sound Selection", "Creative Direction"],
    outcome: ["Published experimental mix", "Personal music language", "Audience testing"],
    credits: ["DJ: Frodo"],
    youtubeVideos: [
      { id: "b4RGsFcB8MQ", title: "2026 techouse deepminimal groove seesh" },
      { id: "5n2Me992pcM", title: "2026 urban/reparto" }
    ],
    cover: thumbnail("b4RGsFcB8MQ"),
    gallery: galleryFrom("Piero Fotos/Personal", 6),
    related: ["dj-frodo-home-sesh-vol-1"]
  },
  {
    slug: slugify("community management case study"),
    title: "Community Management Case Study",
    displayTitle: "Community Management / Case Study",
    category: "Commercial",
    description:
      "A strategy and content case study built from social media work, campaign planning, community growth and paid media execution.",
    role: "Creative Strategist / Community Manager / Content Producer",
    year: "2024-2025",
    tools: ["Meta Ads", "Content Strategy", "Analytics", "Campaign Planning"],
    outcome: ["Campaign systems", "Audience engagement", "Performance reporting", "Brand communication"],
    credits: ["Brands: Arenas Discoteca, Camille Spa", "Creative strategy, community management and campaign production by Piero Galley."],
    youtubeVideos: [],
    cover: publicAsset("Community y redes/Arenas.jpg"),
    gallery: galleryFrom("Community y redes", 16),
    related: ["sociedad-peruana-bienes-raices-prestopolis-growth-system", "renacer", "bendita-final"]
  },
  {
    slug: slugify("creative research ai systems"),
    title: "Creative Research & AI Systems",
    displayTitle: "Creative Research / Artificial Intelligence",
    category: "Creative Research",
    description:
      "A research-led creative practice connecting artificial intelligence, documentation, content systems and production workflows.",
    role: "AI Creative / Researcher / Creative Technologist",
    year: "2025-Present",
    tools: ["AI Workflows", "Research", "Documentation", "Creative Systems"],
    outcome: ["AI-assisted creative process", "Research documentation", "Workflow design"],
    credits: ["Creative research, AI workflow design and documentation by Piero Galley."],
    youtubeVideos: [{ id: "nq_I9ziiY0s", title: "Mush Room seeeesh 1" }],
    cover: thumbnail("nq_I9ziiY0s"),
    gallery: galleryFrom("Mk y Publi", 8),
    related: ["community-management-case-study"]
  }
];

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project) {
  return project.related
    .map((slug) => getProject(slug))
    .filter((related): related is Project => Boolean(related));
}

export function getFeaturedAssets() {
  return {
    portrait: publicAsset("Piero Fotos/Foto principal.png"),
    portraitAlt: publicAsset("Piero Fotos/foto principal 2.JPG"),
    dj: publicAsset("Eventos/PieroDJFRODO.jpg"),
    editing: publicAsset("Ediciones/Mondo Casona de Camana.JPG"),
    community: publicAsset("Community y redes/Arenas.jpg"),
    flyer: publicAsset("Flyers y diseños/Mondo MasterClass.png")
  };
}
