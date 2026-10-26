import React, { useState } from 'react';
import { Globe, MapPin, Users, Quote, ArrowRight } from 'lucide-react';
import { globalOriginPoints } from '../data/mockContent';

export const CommunitySection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(globalOriginPoints[0]);

  const testimonials = [
    {
      quote:
        'In economic lecture halls, we quantify human migrations with vectors and regressions. ATLAS gave me back the human voice behind those statistics—the cadence of my grandmother’s kitchen in Istanbul.',
      author: 'Defne Karaca',
      course: 'MSc International Relations, Class of 2026',
      city: 'Istanbul',
    },
    {
      quote:
        'Holding the printed edition in the LSE Shaw Library felt monumental. In an age of ephemeral social threads, ATLAS creates physical books that preserve who we were when we crossed oceans to study here.',
      author: 'Julian Vance',
      course: 'BSc Philosophy & Economics, Class of 2025',
      city: 'Montreal / London',
    },
    {
      quote:
        'Writing about the acoustic energy of Lagos while sitting in the quiet fifth floor of the LSE Library made me realise that education is not about forgetting home, but learning to narrate it with clarity.',
      author: 'Tiwa Adeleke',
      course: 'MSc Finance & Economics, Class of 2026',
      city: 'Lagos',
    },
  ];

  return (
    <section id="community" className="py-16 lg:py-24 border-b border-[#3B241C]/15 bg-[#D7C6AE]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#7A3E2D] font-medium flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#6D2638]" />
            <span>International Student Community</span>
            <span aria-hidden="true">·</span>
            <span>The LSE Commonwealth of Letters</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#3B241C] tracking-tight">
            Seventy percent of LSE comes from abroad. We gather their stories.
          </h2>
          <p className="text-base text-[#3B241C]/85 font-sans leading-relaxed">
            The London School of Economics is one of the most internationally diverse academic institutions on earth. ATLAS exists as an independent, student-curated sanctuary where that multitude of languages, memories, and literary traditions finds tactile form.
          </p>
        </div>

        {/* Interactive Global Origin Explorer */}
        <div className="bg-[#F5E9DE] border border-[#3B241C]/20 rounded-sm p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#3B241C]/15">
            <div>
              <h3 className="font-editorial text-2xl text-[#3B241C] font-medium">
                Geographic Cartography of Contributors
              </h3>
              <p className="text-xs text-[#7A3E2D] font-serif italic">
                Select a global coordinate to inspect student contributions from that region.
              </p>
            </div>
            <div className="text-xs font-mono text-[#7A3E2D] bg-[#D7C6AE]/40 px-3 py-1.5 rounded-xs border border-[#3B241C]/10 self-start sm:self-auto">
              Selected: <span className="font-bold text-[#6D2638]">{selectedCity.city}, {selectedCity.country}</span>
            </div>
          </div>

          {/* City Coordinate Tags (functional clickable buttons) */}
          <div className="flex flex-wrap gap-2">
            {globalOriginPoints.map((point) => {
              const isSelected = selectedCity.city === point.city;
              return (
                <button
                  key={point.city}
                  onClick={() => setSelectedCity(point)}
                  className={`px-3 py-2 text-xs rounded-xs border transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#3B241C] border-[#3B241C] text-[#F5E9DE] font-semibold shadow-xs'
                      : 'bg-[#F5E9DE] border-[#3B241C]/20 text-[#3B241C] hover:border-[#6D2638] hover:bg-[#D7C6AE]/30'
                  }`}
                >
                  <MapPin className={`w-3 h-3 ${isSelected ? 'text-[#F1D98A]' : 'text-[#7A3E2D]'}`} />
                  <span>{point.city}</span>
                  <span className={`text-[10px] ml-1 font-mono ${isSelected ? 'text-[#D7C6AE]' : 'text-[#7A3E2D]'}`}>
                    ({point.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Region Deep-Dive Box */}
          <div className="bg-[#D7C6AE]/20 border border-[#3B241C]/15 rounded-sm p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs text-[#7A3E2D] font-mono tracking-wider">
                COORDINATES: {selectedCity.coords}
              </div>
              <h4 className="font-editorial text-xl font-medium text-[#3B241C]">
                {selectedCity.count} Published Works & Translations from {selectedCity.city}
              </h4>
              <p className="text-xs text-[#3B241C]/80 max-w-xl">
                LSE students hailing from {selectedCity.country} have contributed poetry, documentary photography, urban travelogues, and translations published in Volumes I through IV.
              </p>
            </div>

            <div className="text-xs text-[#6D2638] font-medium flex items-center gap-1 shrink-0">
              <span className="uppercase tracking-wider">Archived in Print</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Student Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F5E9DE] border border-[#3B241C]/15 p-6 rounded-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <Quote className="w-6 h-6 text-[#7A3E2D]/40" />
                <p className="font-serif italic text-sm text-[#3B241C]/90 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#3B241C]/10 text-xs">
                <span className="font-editorial text-base font-semibold text-[#3B241C] block">
                  {t.author}
                </span>
                <span className="text-[#7A3E2D] block mt-0.5">{t.course}</span>
                <span className="text-[11px] text-[#7A3E2D]/75 uppercase tracking-wider block mt-0.5">
                  Origin: {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
