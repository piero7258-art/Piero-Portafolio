import Image from "next/image";
import { AssetFile } from "@/lib/assets";

export function Media({
  asset,
  alt,
  className = "",
  priority = false
}: {
  asset?: AssetFile;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  if (!asset) return null;

  if (asset.type === "video") {
    return (
      <video
        className={className}
        src={asset.path}
        muted
        playsInline
        loop
        autoPlay
        preload="metadata"
        aria-label={alt}
      />
    );
  }

  return <Image className={className} src={asset.path} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" priority={priority} />;
}
