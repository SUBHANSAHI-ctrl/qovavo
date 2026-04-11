import ContactForm from '@/src/components/ContactForm';
import { Clock, MessageCircle, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#08090F] text-[#DDE4F0]">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold text-[#4361EE] uppercase tracking-widest mb-3">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#DDE4F0] mb-3 tracking-tight">Get In Touch</h1>
            <p className="text-[#7B8BB0] max-w-xl">
              Ready to collaborate? Let&apos;s discuss your project and explore how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-[#DDE4F0] mb-4">Let&apos;s Collaborate</h2>
              <p className="text-[#7B8BB0] mb-8 text-sm leading-relaxed">
                We&apos;re always excited to hear about new projects, partnership opportunities, and innovative ideas.
                Whether you&apos;re looking to integrate our solutions, discuss a custom project, or explore collaboration
                possibilities, we&apos;re here to help.
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-[#4361EE]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#4361EE]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#DDE4F0]">Quick Response</p>
                    <p className="text-sm text-[#7B8BB0]">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-[#4361EE]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 text-[#4361EE]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#DDE4F0]">Personalized Consultation</p>
                    <p className="text-sm text-[#7B8BB0]">Tailored to your specific needs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-[#2DD4BF]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#DDE4F0]">Expert Guidance</p>
                    <p className="text-sm text-[#7B8BB0]">Support from our team of experts</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-6">
                <h3 className="text-sm font-bold text-[#DDE4F0] mb-1">Direct Contact</h3>
                <p className="text-sm text-[#7B8BB0] mb-2">Prefer to reach out directly?</p>
                <a
                  href="mailto:team@qovavo.com"
                  className="text-[#4361EE] text-sm font-medium hover:text-[#6681F4] transition-colors"
                >
                  team@qovavo.com
                </a>
              </div>
            </div>

            <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-8">
              <h2 className="text-xl font-bold text-[#DDE4F0] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
