import { businessConfig } from "./business";

export type Review = { author: string; text: string; rating: number; sourceUrl?: string };

/**
 * Only add reviews that are real, public and verified (copy exact text, link the source).
 * Never write testimonials by hand.
 */
export const reviews: Review[] = [];

export const reviewSummary = businessConfig.reviews;
