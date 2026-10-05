import { businessConfig, fullAddress } from "@/data/business";

export function MapSection() {
  return (
    <div className="overflow-hidden rounded-md border border-line bg-white">
      {businessConfig.googleMapsEmbedUrl ? (
        <iframe
          title={`Map showing ${businessConfig.name}, ${fullAddress()}`}
          src={businessConfig.googleMapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-72 w-full border-0 md:h-96"
          allowFullScreen
        />
      ) : null}
      <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">{fullAddress()}</p>
        <a href={businessConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold text-teal-deep underline underline-offset-4 hover:text-navy">
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
