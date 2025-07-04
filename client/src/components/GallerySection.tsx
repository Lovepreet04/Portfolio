import React, { useState, useEffect, useCallback } from "react";

const images = [
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQHzsWYWCv8kVQ/feedshare-shrink_1280/B56ZZ23T95GUAo-/0/1745750935149?e=1754524800&v=beta&t=zwrteEbinpMEHnOFFfJPbFWRWw7XjgY-b_mZSPDSrpA",
    alt: "Technical Treasure Hunt Winning"
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQFBJadXQejCeg/feedshare-shrink_1280/B56ZdA2vuRGsAk-/0/1749139784338?e=1754524800&v=beta&t=NMhxo8MT7mTYD5PnITlszRU8cSNDKajr1Ja7uJT4IfM",
    alt: "Low Code/No Code Comptition Innogration sepling"
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQE3G2XVyh11vw/feedshare-shrink_800/B56ZZ23T98GkAg-/0/1745750936740?e=1754524800&v=beta&t=aNKgK_p04WBK3hvEAHlYqOWecQD_GaP60rPRIecQn44",
    alt: "Technical Treasure Hunt Team"
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQGv5YXqOrYmiA/feedshare-shrink_1280/B56ZdA2vuTH8As-/0/1749139783316?e=1754524800&v=beta&t=84JMGA8sc1mCHu9hvOjNLfmRu3Y8LFHQ859WVku_z-8",
    alt: "Low Code/No Code Coordination Team"
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQHfGH1HU2DBOA/feedshare-shrink_2048_1536/B56ZdA2vu2HUAo-/0/1749139783558?e=1754524800&v=beta&t=4l_VV56sQGhiZ-Gqzuo0ErxDuIE8Dk892JgixvTvDb4",
    alt: "Low Code/No Code 3 day compition"
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQH_5mclUzGLJA/feedshare-shrink_800/B56ZdA2vvIGsAk-/0/1749139784692?e=1754524800&v=beta&t=EGENcbDF3UgsOXGx2OjBIAc5TzvA8Hsk_bEUGzT202k",
    alt: "Low Code/No Code Comptition Innogration"
  }
];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  // Keyboard navigation for Escape and arrows
  useEffect(() => {
    if (selected === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft" && selected > 0) setSelected(selected - 1);
      if (e.key === "ArrowRight" && selected < images.length - 1) setSelected(selected + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  const goLeft = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selected !== null && selected > 0) setSelected(selected - 1);
  }, [selected]);
  const goRight = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selected !== null && selected < images.length - 1) setSelected(selected + 1);
  }, [selected]);

  return (
    <section id="gallery" className="relative z-10 py-16 sm:py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A glimpse into my journey, work, and moments
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-lg cursor-pointer group" onClick={() => setSelected(idx)}>
              <img src={img.src} alt={img.alt} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
        {/* Lightbox Modal */}
        {selected !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
            {/* Left Arrow */}
            {selected > 0 && (
              <button
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-slate-700/80 hover:bg-cyan-600 text-white rounded-full p-3 shadow-lg z-10"
                onClick={goLeft}
                aria-label="Previous image"
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
            )}
            <img src={images[selected].src} alt={images[selected].alt} className="max-w-full max-h-[80vh] rounded-xl shadow-2xl border-4 border-cyan-500" />
            {/* Right Arrow */}
            {selected < images.length - 1 && (
              <button
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-slate-700/80 hover:bg-cyan-600 text-white rounded-full p-3 shadow-lg z-10"
                onClick={goRight}
                aria-label="Next image"
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
} 