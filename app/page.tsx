import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Plane, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-green-950 to-slate-900 text-white overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:100px_100px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Top Navigation Bar */}
          <div className="absolute top-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pt-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xl sm:text-2xl font-bold tracking-wide">
                EXPERIENCE <span className="text-yellow-400">AVIATION</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <a href="tel:3055379291" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">(305) 537-9291</span>
                </a>
                <a href="mailto:fly@experienceaviation.org" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">fly@experienceaviation.org</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="mt-32 lg:mt-40 space-y-16">
            {/* Title Section */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-4">
                MISSION OF HOPE
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

            {/* Content Grid - 2 Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-20">
              {/* Left Column - Captain Photo & Story */}
              <div className="space-y-6">
                {/* Captain Photo Section */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-sm text-yellow-400 font-semibold mb-4 uppercase tracking-wide">Capt. Barrington Irving</div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-white/10 relative">
                    <Image
                      src="/people/Barrington1b.jpg"
                      alt="Capt. Barrington Irving"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Story Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-5 text-base leading-relaxed">
                  <p>
                    Jamaican born <strong className="text-yellow-400">Capt. Barrington Irving</strong>, Guinness World Record Holder as the first Black man and youngest person to fly solo around the world, is taking flight once again, this time for humanity.
                  </p>
                  <p>
                    On November 10th & 11th, Capt. Irving will lead a massive humanitarian mission, delivering over 100,000 pounds of critical supplies aboard his own aircraft and a Boeing 737-800 cargo jet bound for Jamaica. From the runway to the heart of the island, these supplies will be placed directly into the hands of local organizations and communities in need.
                  </p>
                  <p>
                    Through his 501(c)(3) non-profit organization - Experience Aviation, he has coordinated and delivered more than half a million pounds of humanitarian supplies, most notably during Hurricane Dorian in the Bahamas and Hurricane Helene in North Carolina.
                  </p>
                  <p className="pt-4 border-t border-white/10">
                    <strong className="text-yellow-400">Financial contributions</strong> can be made to the Experience Aviation nonprofit organization and are <strong className="text-yellow-400">tax-deductible</strong>.
                  </p>
                </div>
              </div>

              {/* Right Column - Mission Details & Donation */}
              <div className="space-y-6">
                {/* Mission Details Card */}
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 lg:p-8 space-y-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-xl font-bold">Mission Details</h2>
                  </div>
                  
                  <div className="space-y-4 text-sm lg:text-base">
                    <div className="flex items-start gap-3">
                      <Plane className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-yellow-400 text-xs uppercase tracking-wide">Aircraft</div>
                        <div className="text-slate-300">Boeing 737-800</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-yellow-400 text-xs uppercase tracking-wide">Capacity</div>
                        <div className="text-slate-300">50,000 lbs per flight</div>
                        <div className="text-slate-400 text-xs mt-1">$38,000 round trip ($1.32/lbs)</div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-yellow-500/20 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Trip 1:</span>
                        <span className="font-semibold text-yellow-400">Kingston</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Trip 2:</span>
                        <span className="font-semibold text-yellow-400">Montego Bay</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-yellow-500/20">
                      <div className="text-xs text-slate-400 italic leading-relaxed">
                        Capt. Irving's Learjet 40XR & other private aircraft will support
                      </div>
                    </div>
                  </div>
                </div>

                {/* Donation Card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-center text-yellow-400">DONATE NOW</h3>
                  
                  {/* QR Code Placeholder */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-[180px] aspect-square bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-white/20">
                      <div className="text-center text-slate-600 text-xs p-4">
                        <div className="text-3xl mb-2">📱</div>
                        <div>QR Code</div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-base py-6 rounded-xl shadow-lg"
                  >
                    <a 
                      href="https://www.gofundme.com/f/capt-barrington-irvings-humanitarian-flight-to-jamaica?attribution_id=sl:7fb859d2-163d-4ffa-9ffc-b4dd9aa8fa75&lang=en_US&ts=1761897423&utm_campaign=man_sharesheet_dash&utm_content=amp17_te&utm_medium=customer&utm_source=copy_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DONATE NOW
                    </a>
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-sm text-slate-300 pt-2">
                    <Instagram className="w-4 h-4" />
                    <a href="https://instagram.com/barringtonirving" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                      @barringtonirving
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-green-950 to-slate-900 text-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:100px_100px]" />
        </div>

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
                  "Consulate General of Jamaica",
                  "Memorial Healthcare System",
                  "Florida Panthers",
                  "Youville Rogers",
                  "Caribbean Springs",
                  "GEM",
                  "Miami-Dade County",
                  "Hope Worldwide",
                  "Irie Osgood",
                  "The Concours Club",
                  "JetRx",
                  "Palm Tree Records"
                ].map((partner, index) => (
                  <div 
                    key={index} 
                    className="group aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm hover:shadow-lg hover:border-yellow-500/30 transition-all duration-300 flex items-center justify-center p-4 hover:scale-105"
                  >
                    <div className="text-center text-slate-300 text-xs lg:text-sm font-medium group-hover:text-yellow-400 transition-colors">
                      {partner}
                    </div>
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
                  "7 Air",
                  "Signature Aviation",
                  "Xtreme Aviation",
                  "Atlantic"
                ].map((partner, index) => (
                  <div 
                    key={index} 
                    className="group aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm hover:shadow-lg hover:border-yellow-500/30 transition-all duration-300 flex items-center justify-center p-4 hover:scale-105"
                  >
                    <div className="text-center text-slate-300 text-sm lg:text-base font-semibold group-hover:text-yellow-400 transition-colors">
                      {partner}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xl font-bold">
              EXPERIENCE <span className="text-yellow-400">AVIATION</span>
            </div>
            
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
        </div>
      </footer>
    </div>
  );
}
