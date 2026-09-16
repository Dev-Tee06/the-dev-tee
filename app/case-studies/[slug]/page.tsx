import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/home/FinalCTA";
import { caseStudies } from "@/lib/data";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/animations/AnimatedSection";
import { RevealText } from "@/components/ui/animations/RevealText";
import { RevealImage } from "@/components/ui/animations/RevealImage";
import { Span } from "next/dist/trace";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const study = caseStudies.find((s) => s.slug === resolvedParams.slug);
  if (!study) return { title: "Not Found" };
  return {
    title: `${study.client} Case Study | dev-tee.org`,
    description: study.challenge,
  };
}

export default async function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const study = caseStudies.find((s) => s.slug === resolvedParams.slug);
  if (!study) notFound();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden relative border-b border-gray-800 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection delay={0.1}>
              <SectionLabel className="text-electric mb-6 block">
                {study.client} — {study.industry}
              </SectionLabel>
            </AnimatedSection>

            <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold tracking-tight leading-[1.05] mb-8 break-normal">
              <span>
                A Clearer Web Experience for a business ready to move forward.
              </span>
            </h1>

            <AnimatedSection delay={0.6}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Title
                  </h4>
                  <p className="font-medium text-white">{study.title}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Outcome
                  </h4>
                  <p className="font-medium text-white">{study.outcome}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Services
                  </h4>
                  <p className="font-medium text-white">
                    {study.services.join(", ")}
                  </p>
                </div>
              </div>
              {study.link && (
                <div className="mt-8 flex justify-start">
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-electric text-white font-bold rounded hover:bg-blue-600 transition-colors group"
                  >
                    Visit Website{" "}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              )}
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {study.slug === "eunice-samson" ? (
              <div className="mb-12 space-y-12">
                <AnimatedSection>
                  <h2 className="text-3xl font-bold text-navy mb-6">
                    Website Redesign Transformation
                  </h2>
                  <p className="text-text-muted text-lg leading-relaxed mb-8">
                    When redesigning the Ilesanmi Eunice platform, we took
                    careful note of the need for stronger visual hierarchy,
                    clearer content structure, and a more compelling aesthetic.
                    The former design functioned but lacked the premium,
                    authoritative feel necessary for a strategic copywriter. In
                    our new implementation, we introduced a sophisticated
                    layout, enhanced typography, and cohesive storytelling that
                    better reflects her brand identity and guides the user
                    effortlessly toward client inquiry.
                  </p>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <RevealImage>
                    <div className="flex flex-col space-y-4">
                      <h3 className="text-xl font-bold text-navy text-center">
                        Former Design (Before)
                      </h3>
                      <div className="w-full aspect-square md:aspect-[4/5] rounded-xl relative overflow-hidden bg-gray-100 shadow-xl border border-border-subtle">
                        <img
                          src={study.image}
                          alt={`${study.client} Before`}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </RevealImage>
                  <RevealImage>
                    <div className="flex flex-col space-y-4">
                      <h3 className="text-xl font-bold text-navy text-center">
                        Current Design (After)
                      </h3>
                      <div className="w-full aspect-square md:aspect-[4/5] rounded-xl relative overflow-hidden bg-gray-100 shadow-xl border border-border-subtle">
                        <img
                          src="/case6.png"
                          alt={`${study.client} After`}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </RevealImage>
                </div>
              </div>
            ) : (
              <RevealImage>
                <div className="w-full aspect-[21/9] rounded-xl mb-12 relative overflow-hidden bg-gray-100 shadow-xl border border-border-subtle">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </RevealImage>
            )}

            <div className="prose prose-lg max-w-none text-text-primary">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-navy mb-6">
                  1. The Business Context
                </h2>
                <p className="mb-10 text-text-muted text-lg leading-relaxed">
                  Before any design or code was executed, we took the time to
                  fundamentally understand {study.client}&apos;s operations and
                  market position. A web experience shouldn&apos;t just exist—it
                  must serve a strategic business purpose and clearly
                  communicate value.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-navy mb-6">
                  2. The Challenge
                </h2>
                <p className="mb-10 text-text-muted text-lg leading-relaxed">
                  {study.challenge} We needed to solve these specific roadblocks
                  and engineer a digital presence that effectively turns
                  interest into action.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-navy mb-6">
                  3. The Strategy & Experience
                </h2>
                <p className="mb-10 text-text-muted text-lg leading-relaxed">
                  {study.approach} By aligning bold, modern design with clear
                  information architecture, we mapped out a user journey
                  designed to build trust and effortlessly guide users toward
                  the intended goal.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-navy mb-6">
                  4. The Execution & Outcome
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                  The final build combined high-performance engineering with a
                  polished, conversion-focused interface. {study.outcome} We
                  didn&apos;t just build a website; we delivered a scalable
                  digital asset that drives measurable value and positions{" "}
                  {study.client} as an authority.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
