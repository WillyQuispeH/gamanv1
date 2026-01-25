"use client";

import React, { useRef, useState, useEffect } from "react";

interface PreviewProps {
  oldVersion: string;
  newVersion: string;
}

const IMG_EXT = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"];
const DESKTOP_VIEWPORT_WIDTH = 1500;

function isImage(src: string): boolean {
  const lower = src.toLowerCase();
  if (IMG_EXT.some((ext) => lower.endsWith(ext) || lower.includes(ext + "?"))) return true;
  if (lower.startsWith("http://") || lower.startsWith("https://")) return false;
  return true;
}

function IframeMiniature({ src, alt }: { src: string; alt: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [dim, setDim] = useState({ w: 0, h: 0, scale: 1 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const scale = Math.min(w / DESKTOP_VIEWPORT_WIDTH, 1);
      setDim({ w, h, scale });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { w, h, scale } = dim;
  const viewportHeight = h > 0 && scale > 0 ? Math.round(h / scale) : 800;

  return (
    <div
      ref={wrapRef}
      className="w-full h-full overflow-hidden flex items-center justify-center bg-[#fafafa]"
    >
      <div
        className="relative overflow-hidden w-full h-full bg-white"
      >
        <div
          className="absolute left-0 top-0"
          style={{
            width: DESKTOP_VIEWPORT_WIDTH,
            height: viewportHeight,
            transform: `scale(${scale})`,
            transformOrigin: "0 0",
          }}
        >
          <iframe
            src={src}
            title={alt}
            className="border-0 block"
            style={{ width: DESKTOP_VIEWPORT_WIDTH, height: viewportHeight }}
            sandbox="allow-scripts allow-same-origin allow-popups"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

function MediaContent({
  src,
  alt,
  isImageType,
}: {
  src: string;
  alt: string;
  isImageType: boolean;
}) {
  if (isImageType) {
    return (
      <img src={src} alt={alt} className="w-full h-auto" />
    );
  }
  return <IframeMiniature src={src} alt={alt} />;
}

const Preview = ({ oldVersion, newVersion }: PreviewProps) => {
  return (
    <div className="w-full py-8 px-4 md:py-12 md:px-6">
      <div className="mx-auto md:max-w-7xl w-full">
        <div className="hidden md:block text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-muted-foreground">Versión actual</span>
            <span className="mx-3 text-muted-foreground/40">→</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Propuesta de mejora
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Este es un mockup basado en tu página actual. El diseño final puede personalizarse según tus preferencias y necesidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start  w-full">
          <div className="flex flex-col items-center w-full">
            <div className="mb-3">
              <h3 className="text-base font-medium text-muted-foreground/70">
                Tu página ahora
              </h3>
            </div>
            <div className="relative w-full max-w-full opacity-90  transition-all duration-300 ">
              <div
                className="relative bg-slate-800
               rounded-t-2xl rounded-b-lg p-1.5 shadow-md h-[300px] md:h-[450px] w-full flex flex-col"
              >
                <div className="bg-black rounded-t-xl rounded-b-sm overflow-hidden w-full h-full flex flex-col">
                  <div className="relative bg-white overflow-y-auto overflow-x-hidden w-full h-full">
                    <MediaContent src={oldVersion} alt="Versión actual" isImageType={isImage(oldVersion)} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-3">
              <h3 className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Propuesta mejorada
              </h3>
            </div>
            <div className="relative w-full max-w-full scale-100 transition-all duration-300 hover:scale-[1.02] group">
              <div
                className="relative bg-gradient-to-b from-slate-800 to-slate-900
               rounded-t-2xl rounded-b-lg p-1.5 shadow-2xl h-[300px] md:h-[450px] 
                w-full flex flex-col ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
              >
                <div className="bg-black rounded-t-xl rounded-b-sm overflow-hidden w-full h-full flex flex-col">
                  <div className="relative bg-white overflow-y-auto overflow-x-hidden w-full h-full">
                    <MediaContent src={newVersion} alt="Versión propuesta" isImageType={isImage(newVersion)} />
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                Propuesta
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
