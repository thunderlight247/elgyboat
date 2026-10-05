import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page">
        <h1 className="text-4xl font-extrabold">Page not found</h1>
        <p className="mt-3 text-lg text-muted">That page does not exist. Try the home page or request a quote.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Go to home</Button>
          <Button href="/quote" variant="outline">Request a Quote</Button>
        </div>
      </div>
    </section>
  );
}
