import { IdolGallery } from "@/components/idol-gallery";

export default function GaleriePage() {
  return (
    <div className="relative min-h-screen px-6 pt-32 pb-10 sm:px-10 sm:pt-40 sm:pb-14 overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 synth-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <IdolGallery />
      </div>
    </div>
  );
}