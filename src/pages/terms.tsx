import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, FileText, Scale, RefreshCw } from 'lucide-react';
import { Footer } from '@/components/ui/footer';

export default function TermsPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className="text-blue-500 text-xs font-semibold uppercase tracking-wider">Legal Agreements</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 font-serif tracking-tight">Terms and Conditions</h1>
          <p className="text-zinc-400 text-sm mt-3">Last updated: August 10, 2026</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none space-y-10 text-zinc-300">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">1. Acceptance of Terms</h2>
            </div>
            <p className="leading-relaxed">
              By accessing and using this website (the "Service"), you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">2. Intellectual Property Rights</h2>
            </div>
            <p className="leading-relaxed">
              All content, features, and functionality on this website, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of Xuan Duc Nguyen (XDN) and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">3. User Restrictions & Responsibilities</h2>
            </div>
            <p className="leading-relaxed">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from the Service.</li>
              <li>Attempt to decompile, reverse engineer, or disassemble any software contained on the website.</li>
              <li>Engage in any activity that interferes with or disrupts the Service or servers hosting the Service.</li>
              <li>Use the Service for any unlawful purpose or in violation of any local, state, national, or international law.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">4. Disclaimer & Limitations of Liability</h2>
            </div>
            <p className="leading-relaxed">
              The materials on this website are provided on an 'as is' basis. Xuan Duc Nguyen makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
            <p className="leading-relaxed">
              In no event shall Xuan Duc Nguyen or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">5. Governing Law</h2>
            <p className="leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Germany, and you irrevocably submit to the exclusive jurisdiction of the courts in Karlsruhe.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">6. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
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
