"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function MatterportEmbed() {
  const [consented, setConsented] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-border-soft bg-surface-mute">
      <div className="relative aspect-video w-full">
        {consented ? (
          <iframe
            title="Virtueller 3D-Rundgang durch unsere Praxis"
            src={siteConfig.matterportEmbed}
            className="h-full w-full"
            allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-8 text-center">
            <p className="max-w-md text-pretty text-base leading-relaxed text-graphite">
              Beim Laden des 3D-Rundgangs werden Daten an Matterport (USA)
              übertragen. Wir bitten Sie um Ihre Zustimmung — Sie können diese
              jederzeit zurückziehen.
            </p>
            <button
              type="button"
              onClick={() => setConsented(true)}
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-red px-6 text-sm font-medium text-white transition-colors hover:bg-brand-navy"
            >
              Rundgang laden
            </button>
            <p className="text-xs text-graphite-soft">
              Mehr in unserer{" "}
              <a
                href="/datenschutz"
                className="underline underline-offset-2 hover:text-brand-red"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
