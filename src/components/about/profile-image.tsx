import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-full border border-primary/30 bg-card shadow-[0_0_45px_var(--glow)] ring-4 ring-primary/10 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
      <Image
        src="/images/profile_pic.webp"
        alt="Charlie Cook wearing a suit and yellow tie outdoors"
        fill
        sizes="(min-width: 1024px) 256px, (min-width: 640px) 224px, 192px"
        className="object-cover"
        priority={false}
      />
    </div>
  );
}
