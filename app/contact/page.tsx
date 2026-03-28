import ContactForm from '@/src/components/ContactForm';
import { Clock, MessageCircle, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate? Let's discuss your project and explore how we can work together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Let's Collaborate</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're always excited to hear about new projects, partnership opportunities, and innovative ideas. 
                Whether you're looking to integrate our solutions, discuss a custom project, or explore collaboration 
                possibilities, we're here to help.
              </p>
              
              {/* ICON LIST */}
              <div className="space-y-4">
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <p className="text-gray-300">Quick response within 24 hours</p>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-purple-400" />
                  <p className="text-gray-300">Personalized consultation</p>
                </div>

                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-300">Expert guidance and support</p>
                </div>

              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#1e293b] to-[#334155] rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Direct Contact</h3>
                <p className="text-gray-300 mb-2">Prefer to reach out directly?</p>
                <a 
                  href="mailto:team@qovavo.com" 
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  team@qovavo.com
                </a>
              </div>
            </div>

            <div className="bg-[#1e293b] rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}