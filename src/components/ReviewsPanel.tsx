import { businessConfig } from "@/data/business";
import { reviews, reviewSummary } from "@/data/reviews";

/** Shows verified review data only. Until it is supplied, shows a clearly structured placeholder. */
export function ReviewsPanel() {
  const hasSummary = reviewSummary.rating !== null && reviewSummary.reviewCount !== null;
  const link = reviewSummary.reviewUrl || businessConfig.googleMapsUrl;

  return (
    <div className="rounded-md border border-line bg-white p-6 md:p-8">
      {hasSummary ? (
        <p className="text-3xl font-extrabold">
          {reviewSummary.rating}
          <span className="ml-2 text-lg font-semibold text-muted">
            from {reviewSummary.reviewCount} Google reviews
          </span>
        </p>
      ) : (
        <p className="text-lg leading-relaxed text-muted">
          Verified Google reviews will appear here once Elgyboat confirms the rating and review link.
        </p>
      )}

      {reviews.length > 0 && (
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {reviews.map((r) => (
            <li key={r.author + r.text.slice(0, 12)} className="rounded-md bg-mist p-4">
              <blockquote className="leading-relaxed">{r.text}</blockquote>
              <p className="mt-2 text-sm font-semibold text-muted">{r.author}</p>
            </li>
          ))}
        </ul>
      )}

      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center font-semibold text-teal-deep underline underline-offset-4 hover:text-navy">
        See Elgyboat on Google
      </a>
    </div>
  );
}
