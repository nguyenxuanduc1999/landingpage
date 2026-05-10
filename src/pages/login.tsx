import { AuthComponent } from "@/components/ui/sign-up";
import { Footer } from "@/components/ui/footer";

export default function CustomAuthDemo() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <div className="bg-white min-h-screen text-black">
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[80] pointer-events-none select-none">
          <img src="/logoXDN.png" alt="Logo XDN" className="h-20 w-20 object-contain" draggable={false} />
        </div>
        <AuthComponent
          particleBackground
          logo={<img src="/logoXDN.png" alt="Logo" className="h-20 w-20" />}
          brandName=""
        />
        <Footer forceLightMode />
      </div>
    </>
  );
}
