import fs from "node:fs";
import path from "node:path";

export const assetRoot = path.join(process.cwd(), "public", "assets", "source");

export type AssetFile = {
  name: string;
  path: string;
  extension: string;
  type: "image" | "video" | "document" | "other";
};

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
const videoExtensions = new Set([".mp4", ".mov", ".m4v", ".webm"]);
const documentExtensions = new Set([".pdf"]);

export function publicAsset(relativePath: string) {
  return encodeURI(`/assets/source/${relativePath.replaceAll(path.sep, "/")}`);
}

export function titleFromSlug(value: string) {
  return value
    .replaceAll("-", " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getType(extension: string): AssetFile["type"] {
  if (imageExtensions.has(extension)) return "image";
  if (videoExtensions.has(extension)) return "video";
  if (documentExtensions.has(extension)) return "document";
  return "other";
}

export function listFiles(relativeFolder = ""): AssetFile[] {
  const absoluteFolder = path.join(assetRoot, relativeFolder);
  if (!fs.existsSync(absoluteFolder)) return [];

  const entries = fs.readdirSync(absoluteFolder, { withFileTypes: true });
  return entries
    .filter((entry) => !entry.name.startsWith("."))
    .flatMap((entry) => {
      const relativePath = path.join(relativeFolder, entry.name);
      if (entry.isDirectory()) return listFiles(relativePath);
      const extension = path.extname(entry.name).toLowerCase();
      const type = getType(extension);
      if (type === "other") return [];
      return [
        {
          name: entry.name,
          path: publicAsset(relativePath),
          extension,
          type
        }
      ];
    });
}

export function listDirectories(relativeFolder = "") {
  const absoluteFolder = path.join(assetRoot, relativeFolder);
  if (!fs.existsSync(absoluteFolder)) return [];

  return fs
    .readdirSync(absoluteFolder, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name);
}
