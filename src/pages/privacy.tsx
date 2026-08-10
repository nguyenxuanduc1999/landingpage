import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Globe } from 'lucide-react';
import { Footer } from '@/components/ui/footer';

export default function PrivacyPage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-md bg-black/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>
          <div className="flex items-center gap-2">
            <img src="/logoXDN.png" alt="XDN Logo" className="h-6 w-6 rounded object-cover" />
            <span className="font-semibold text-sm">XDN</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.08),transparent_50%)]" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className="text-purple-500 text-xs font-semibold uppercase tracking-wider">Privacy Protection</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 font-serif tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-400 text-sm mt-3">Last updated: August 10, 2026</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none space-y-10 text-zinc-300">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">1. Overview</h2>
            </div>
            <p className="leading-relaxed">
              At XDN, we prioritize the privacy and security of our visitors and users. This Privacy Policy document contains types of information that is collected and recorded by XDN and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">2. Information We Collect</h2>
            </div>
            <p className="leading-relaxed">
              We collect information in the following ways to provide a better experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li><strong>Contact Information:</strong> If you contact us directly, we may receive additional information about you such as your name, email address, phone number, and the contents of the message and/or attachments you may send us.</li>
              <li><strong>Log Files:</strong> XDN follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">3. How We Use Your Information</h2>
            </div>
            <p className="leading-relaxed">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Provide, operate, and maintain our website.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Develop new products, services, features, and functionality.</li>
              <li>Communicate with you, either directly or through one of our partners, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">4. Cookies and Web Beacons</h2>
            </div>
            <p className="leading-relaxed">
              Like any other website, XDN uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">5. GDPR & CCPA Data Protection Rights</h2>
            <p className="leading-relaxed">
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">6. Security of Your Data</h2>
            <p className="leading-relaxed">
              The security of your personal data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <div className="border-t border-white/10 bg-zinc-950/40">
        <Footer />
      </div>
    </div>
  );
}
