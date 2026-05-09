import { AuthComponent } from "@/components/ui/sign-up";

export default function CustomAuthDemo() {
  return (
    <div className="bg-white min-h-screen text-black">
      <AuthComponent
        logo={<img src="./public/logoXDN.png" alt="Logo" className="h-20 w-20" />}
        brandName=""
      />
    </div>
  );
}
