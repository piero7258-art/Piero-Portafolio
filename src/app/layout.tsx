import type { Metadata } from "next";
import "./globals.css";
import { ExperienceProvider } from "@/components/ExperienceProvider";
import { Nav } from "@/components/Nav";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/"
  },
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  keywords: [
    "Piero Galley",
    "Creative Producer",
    "Audiovisual Producer",
    "Creative Director",
    "Director",
    "Filmmaker",
    "Motion Designer",
    "Video Editor",
    "Editor",
    "Sound Designer",
    "AI Creative",
    "Creative Technologist",
    "Artificial Intelligence",
    "Brand Strategy",
    "Visual Storytelling",
    "DJ"
  ],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/assets/source/Piero%20Fotos/Foto%20principal.png", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: ["/assets/source/Piero%20Fotos/Foto%20principal.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: [
      "Creative Producer",
      "Audiovisual Producer",
      "Director",
      "Editor",
      "Sound Designer",
      "DJ",
      "Creative Technologist"
    ],
    email: `mailto:${site.email}`,
    url: site.url,
    sameAs: [site.instagram, site.linkedin, site.youtube, site.tiktok]
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <ExperienceProvider>
          <Nav />
          {children}
        </ExperienceProvider>
      </body>
    </html>
  );
}
