import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Plane, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import GoFundMeEmbed from "@/components/GoFundMeEmbed";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Unified Background for All Sections */}
      <div className="fixed inset-0">
        <Image
          src="/images/camoflag.png"
          alt="Jamaica Flag Camo Pattern"
          fill
          className="object-cover blur-sm opacity-40 sm:opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/50 sm:from-slate-900/60 sm:via-slate-900/40 sm:to-slate-900/60" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Main Hero Content */}
          <div className="space-y-16 sm:mt-32 lg:mt-40">
            {/* Title Section */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex justify-center mb-10 w-full px-4">
                <div className="relative h-24 w-full max-w-sm sm:h-32 sm:max-w-2xl">
                  <Image
                    src="/logos/experience-aviation-white.png"
                    alt="Experience Aviation"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Capt. Barrington Irving's
                <br />
                <span className="text-yellow-400">Humanitarian Flight</span>
                <br />
                to Jamaica
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Delivering over 100,000 pounds of critical supplies to communities in need.
                <br />
                November 10th & 11th, 2024
              </p>
            </div>

            {/* Content - Symmetrical 2-Column on Desktop, Single Column on Mobile */}
            <div className="max-w-7xl mx-auto mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Top Section - Photo Left, Bio Right */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Captain Photo Section */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col h-full">
                      <div className="text-sm text-yellow-400 font-semibold mb-4 uppercase tracking-wide">Capt. Barrington Irving</div>
                      <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-white/10 relative min-h-[500px]">
                        <Image
                          src="/people/Barrington1b.jpg"
                          alt="Capt. Barrington Irving"
                          fill
                          className="object-cover object-[70%_center] lg:object-[90%_center]"
                          priority
                        />
                      </div>
                    </div>

                    {/* Story Card */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col h-full">
                      <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">Together for Jamaica: Relief in Flight - A Mission to Rebuild Jamaica</h3>
                      <p className="text-sm italic text-slate-300 mb-6">Hurricane Melissa left a trail of devastation, but together, we can bring relief, hope, and the tools to rebuild.</p>
                      <div className="space-y-5 text-base leading-relaxed">
                        <p>
                          When Hurricane Melissa struck Jamaica, it left behind devastation and determination. People and entire communities across the island are rebuilding, but they need help now.
                        </p>
                        <p>
                          In response, a coalition of volunteers, pilots, and community partners, is preparing to deliver more than 100,000 pounds of critical supplies directly to the island. Spearheaded by Jamaican-born <strong className="text-yellow-400">Capt. Barrington Irving</strong>, a pilot recognized by Guinness World Records as the first Black man and youngest person to fly solo around the world, this team will fly a Boeing 737-800 cargo jet and his own aircraft from South Florida to Jamaica carrying critical survival and rebuilding supplies on two flights: November 10th and 11th.
                        </p>
                        <p>
                          From the runway to remote parishes, every delivery is being coordinated with trusted local organizations working on the ground for effective last-mile distribution in order to ensure all the aid gets into the hands of those who need it.
                        </p>
                        <p>
                          Right now, we're gathering both donations of supplies and financial support to make these relief flights possible. You can:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                          <li>Donate funds to help fuel and launch the aircraft.</li>
                          <li>Contribute supplies from our list of most-needed items.</li>
                          <li>Drop off goods at one of our South Florida collection centers listed below.</li>
                        </ul>
                        <p className="pt-4 border-t border-white/10">
                          Every dollar and every item helps us move faster and farther, getting aid directly into the hands of families rebuilding their lives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mission Details Card - Left */}
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-7 h-7 text-yellow-400" />
                    <h2 className="text-2xl sm:text-3xl font-bold">Mission Details</h2>
                  </div>
                  
                  <div className="space-y-6 text-sm sm:text-base">
                    {/* Aircraft Section */}
                    <div className="bg-slate-900/30 rounded-xl p-4 border border-yellow-500/10">
                      <div className="flex items-start gap-4">
                        <div className="bg-yellow-500/20 rounded-lg p-2">
                          <Plane className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-yellow-400 text-xs uppercase tracking-wider mb-1">Aircraft</div>
                          <div className="text-white font-semibold text-lg">Boeing 737-800</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Capacity Section */}
                    <div className="bg-slate-900/30 rounded-xl p-4 border border-yellow-500/10">
                      <div className="flex items-start gap-4">
                        <div className="bg-yellow-500/20 rounded-lg p-2">
                          <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-yellow-400 text-xs uppercase tracking-wider mb-1">Capacity</div>
                          <div className="text-white font-semibold text-lg">50,000 lbs per flight</div>
                          <div className="text-slate-300 text-sm mt-1">$38,000 round trip <span className="text-yellow-400">($1.32/lbs)</span></div>
                        </div>
                      </div>
                    </div>

                    {/* Destinations Section */}
                    <div className="bg-slate-900/30 rounded-xl p-4 border border-yellow-500/10">
                      <div className="font-bold text-yellow-400 text-xs uppercase tracking-wider mb-3">Destinations</div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 px-3 bg-yellow-500/10 rounded-lg">
                          <span className="text-slate-200">Trip 1</span>
                          <span className="font-bold text-yellow-400 text-lg">Kingston</span>
                        </div>
                        <div className="flex justify-between items-center py-2 px-3 bg-yellow-500/10 rounded-lg">
                          <span className="text-slate-200">Trip 2</span>
                          <span className="font-bold text-yellow-400 text-lg">Montego Bay</span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Support */}
                    <div className="pt-2">
                      <div className="text-xs text-slate-300 italic leading-relaxed text-center bg-slate-900/20 rounded-lg py-3 px-4">
                        Capt. Irving's Learjet 40XR & other private aircraft will support
                      </div>
                    </div>

                    {/* Instagram Section */}
                    <div className="pt-4 border-t border-yellow-500/20">
                      <div className="text-xs uppercase tracking-wider text-slate-400 mb-3 text-center">Follow the Mission</div>
                      <a 
                        href="https://instagram.com/barringtonirving" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-900/40 hover:bg-slate-900/60 rounded-lg border border-white/10 hover:border-yellow-500/30 transition-all group"
                      >
                        <Instagram className="w-5 h-5 text-slate-300 group-hover:text-yellow-400 transition-colors" />
                        <span className="text-slate-300 group-hover:text-yellow-400 transition-colors font-medium">@barringtonirving</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Donation Card - Right */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 flex items-center justify-center">
                  {/* GoFundMe Embed */}
                  <div className="bg-slate-900/30 rounded-xl p-4 border border-white/10 w-full">
                    <GoFundMeEmbed />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative py-20 lg:py-32 text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Supply Partners */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Supply Partners
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Together, we're making a difference through collaborative support and generosity
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                {[
                  { name: "Consulate General of Jamaica", logo: "/logos/consulate.png" },
                  { name: "Memorial Healthcare System", logo: "/logos/memorial.png" },
                  { name: "Florida Panthers", logo: "/logos/Florida_Panthers.png" },
                  { name: "Youville Rogers", logo: "/logos/rosalind.png" },
                  { name: "Caribbean Springs", logo: "/logos/carribeanstrong.png" },
                  { name: "GEM", logo: "/logos/GEM-logo.webp" },
                  { name: "Miami-Dade County", logo: "/logos/miami-dade.png" },
                  { name: "Rogers", logo: "/logos/rogers.png" },
                  { name: "Miramar", logo: "/logos/miramar.png" },
                  { name: "The Concours Club", logo: "/logos/concours.png" },
                  { name: "JetRx", logo: "/logos/JetRx.webp" },
                  { name: "Palm Tree Records", logo: "/logos/tms.png" },
                  { name: "BOBM", logo: "/logos/bobm.png" },
                  { name: "Gargamel", logo: "/logos/gargamel.png" },
                  { name: "LHCH", logo: "/logos/lhch.png" },
                  { name: "Var City", logo: "/logos/var-city.png" },
                  { name: "VIP", logo: "/logos/vip.png" }
                ].map((partner, index) => (
                  <div 
                    key={index} 
                    className="group aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm hover:shadow-lg hover:border-yellow-500/30 transition-all duration-300 flex items-center justify-center p-4 hover:scale-105"
                  >
                    {partner.logo ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    ) : (
                      <div className="text-center text-slate-300 text-xs lg:text-sm font-medium group-hover:text-yellow-400 transition-colors">
                        {partner.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Partners */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Delivery Partners
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Ensuring safe and efficient delivery of supplies to those in need
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {[
                  { name: "7 Air", logo: "/logos/7air.png" },
                  { name: "Signature Aviation", logo: "/logos/signature-aviation.webp" },
                  { name: "Xtreme Aviation", logo: "/logos/xtreme.png" },
                  { name: "Atlantic", logo: "/logos/Atlantic_logo.png" }
                ].map((partner, index) => (
                  <div 
                    key={index} 
                    className="group aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm hover:shadow-lg hover:border-yellow-500/30 transition-all duration-300 flex items-center justify-center p-4 hover:scale-105"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logistics Partner */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Logistics Partner
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Providing essential logistics support for mission success
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
              <div className="flex justify-center">
                <div 
                  className="group aspect-[4/3] w-full max-w-xs bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm hover:shadow-lg hover:border-yellow-500/30 transition-all duration-300 flex items-center justify-center p-4 hover:scale-105"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/logos/mj.png"
                      alt="Logistics Partner"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative text-white py-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
              <a href="tel:3055379291" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>(305) 537-9291</span>
              </a>
              <a href="mailto:fly@experienceaviation.org" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>fly@experienceaviation.org</span>
              </a>
              <a href="https://instagram.com/barringtonirving" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Instagram className="w-4 h-4" />
                <span>@barringtonirving</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>&copy; 2025 Experience Aviation. All rights reserved. 501(c)(3) Non-Profit Organization.</p>
            <p className="mt-2">14600 NW 44th Court, Opa-Locka, FL 33054</p>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-center">
            <a 
              href="https://themediastandard.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <span className="text-sm text-slate-400">DEVELOPED IN COLLABORATION WITH</span>
              <div className="relative h-10 w-32">
                <Image
                  src="/logos/tms-text-logo-white.png"
                  alt="TMS"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
