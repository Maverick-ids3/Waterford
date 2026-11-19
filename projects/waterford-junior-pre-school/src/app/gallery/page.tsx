import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { GalleryLightbox, type GalleryPhoto } from "@/components/gallery-lightbox";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Snapshots from school life at Waterford Junior & Pre-School — classroom activities, events, uniform pride, and outdoor play.",
};

function getGalleryPhotos(): GalleryPhoto[] {
  const rootDir = process.cwd();
  const picturesDir = path.join(rootDir, "pictures");
  const publicPicturesDir = path.join(rootDir, "public", "pictures");

  // Choose source directory: check root "pictures" first, fallback to "public/pictures"
  const sourceDir = fs.existsSync(picturesDir) ? picturesDir : publicPicturesDir;

  if (!fs.existsSync(sourceDir)) {
    return [];
  }

  // Ensure public/pictures exists so images can be served by Next.js
  if (!fs.existsSync(publicPicturesDir)) {
    fs.mkdirSync(publicPicturesDir, { recursive: true });
  }

  const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
  const files = fs
    .readdirSync(sourceDir)
    .filter((file) => allowedExtensions.has(path.extname(file).toLowerCase()));

  // Keep public/pictures in sync with the source directory
  if (sourceDir === picturesDir) {
    const existingInPublic = fs.readdirSync(publicPicturesDir);
    // Remove files from public/pictures that were deleted in pictures/
    for (const f of existingInPublic) {
      if (!files.includes(f)) {
        try {
          fs.unlinkSync(path.join(publicPicturesDir, f));
        } catch {
          // ignore
        }
      }
    }
    // Copy any new or modified files
    for (const f of files) {
      const srcFile = path.join(picturesDir, f);
      const destFile = path.join(publicPicturesDir, f);
      if (!fs.existsSync(destFile) || fs.statSync(srcFile).mtimeMs > fs.statSync(destFile).mtimeMs) {
        try {
          fs.copyFileSync(srcFile, destFile);
        } catch {
          // ignore
        }
      }
    }
  }

  return files.map((file) => {
    return {
      src: `/pictures/${encodeURIComponent(file)}`,
      alt: "Waterford school photo",
      title: "",
    };
  });
}

export default function GalleryPage() {
  const photos = getGalleryPhotos();

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        heading="Snapshots from school life."
      />

      {/* Feature image */}
      <SectionWrapper className="grid items-center gap-[clamp(28px,6vw,76px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Image
          src="/assets/waterford-gallery-board.png"
          alt="Waterford Junior and Pre-School photo and announcement gallery"
          width={800}
          height={560}
          priority
          style={{ width: "100%", height: "auto" }}
          className="max-h-[560px] w-full rounded-lg object-cover shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
        />
        <div>
          <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold-dark">
            Recent Moments
          </p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
            Classroom activities, announcements, events, and learner portraits.
          </h2>
          <p className="mt-4 text-[1.04rem] text-waterford-muted">
            Our Waterford&apos;s visual style
          </p>
        </div>
      </SectionWrapper>

      {/* Interactive Photo Gallery with Lightbox */}
      <SectionWrapper className="pt-0">
        <div className="mb-8 text-center">
          <p className="mb-2 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold-dark">
            Explore Waterford
          </p>
          <h2 className="m-0 text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.12]">
            School Photo Gallery
          </h2>
        </div>

        <GalleryLightbox photos={photos} />
      </SectionWrapper>
    </>
  );
}
