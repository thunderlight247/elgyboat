import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { projectCategories, projects } from "@/data/projects";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = { title: pageSeo.projects.title, description: pageSeo.projects.description, alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return (
    <>
      <PageHero path="/projects" title="Projects" intro="Residential, commercial, industrial and road works." />
      <section className="section">
        <div className="container-page">
          <p className="mb-8 text-sm text-muted">Project showcase: images to be replaced with Elgyboat&apos;s actual project portfolio.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {projectCategories.map((p) => <ProjectCard key={p.slug} title={p.title} description={p.description} image={p.image} />)}
          </div>
          {projects.length > 0 && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold">Completed projects</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {projects.map((p) => <ProjectCard key={p.title} title={`${p.title}, ${p.location}`} description={p.summary} image={p.image} />)}
              </div>
            </div>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
