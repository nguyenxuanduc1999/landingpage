import { AuthComponent } from "@/components/ui/sign-up";

export default function CustomAuthDemo() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <div className="bg-white min-h-screen text-black">
        <AuthComponent
          logo={<img src="./public/logoXDN.png" alt="Logo" className="h-20 w-20" />}
          brandName=""
        />
      </div>
    </>
  );
}
