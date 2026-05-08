import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const logos = [
  {
    id: "logo-2",
    description: "Figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Next.js",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-9",
    description: "HTML5",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-10",
    description: "CSS3",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-11",
    description: "MongoDB",
    image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-12",
    description: "Linux",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
    className: "h-7 w-auto",
  },
  {
    id: "logo-13",
    description: "Cloud/Networking",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Cloud-computing-2.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-14",
    description: "Full Stack",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-15",
    description: "Google Cloud",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Cloud_logo.svg",
    className: "h-7 w-auto",
  },
];

export function LogosSlider() {
  return (
    <div className="relative h-[100px] w-full overflow-hidden">
      <InfiniteSlider className="flex h-full w-full items-center" duration={30} gap={48}>
        {logos.map((logo) => (
          <div key={logo.id} className="flex w-32 items-center justify-center">
            <img src={logo.image} alt={logo.description} className={logo.className} />
          </div>
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className="pointer-events-none absolute left-0 top-0 h-full w-[200px]"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute right-0 top-0 h-full w-[200px]"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}
