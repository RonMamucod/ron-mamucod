import React from 'react'
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Wild Action",
    description:
      "Wild Action is the online presence of an Australian wildlife experiences and education organisation.",
    image: "/projects/wild-action.png",
    tags: ["Wordpress", "JavaScript", "CSS"],
    link: "https://wildaction.com.au/",
    github: "#",
  },
  {
    title: "Paramount Insulation",
    description:
      "Paramount Insulation is a dedicated Australian online store and supplier of high-performance building insulation products.",
    image: "/projects/paramount-insulation.png",
    tags: ["Wordpress", "WooCommerce", "JavaScript", "CSS"],
    link: "https://paramountinsulation.com.au/",
    github: "#",
  },
  {
    title: "The Flynn",
    description:
      "The Flynn is the official website for a stylish bar and restaurant located in Sydney’s Central Business District in Australia.",
    image: "/projects/the-flynn.png",
    tags: ["Wordpress", "JavaScript", "CSS"],
    link: "https://theflynn.com.au/",
    github: "#",
  },
  {
    title: "Dr Fresh",
    description:
      "Dr Fresh is the official website of a medical-led cosmetic and skin health clinic based in Melbourne, Victoria, Australia.",
    image: "/projects/dr-fresh.png",
    tags: ["Wordpress", "JavaScript", "CSS"],
    link: "https://drfresh.com.au/",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
          <div className='container mx-auto px-6 relative z-10'>
            {/* Section Header */}
            <div className='text-center mx-auto max-w-3xl mb-16'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
              <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
                Projects that
                <span className='font-serif italic font-normal text-white'> make an impact.</span>
              </h2>
              <p className='text-muted-foreground animate-fade-in animation-delay-200'>
                A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
              </p>
            </div>

            {/* Projects Grid */}
            <div className='grid md:grid-cols-2 gap-8'>
              {projects.map((project, idx) => (
                <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" tyle={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                  {/* Image */}
                  <div className='relative overflow-hidden aspect-video'>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                    {/* Overlay Links */}
                    <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                        <ArrowUpRight/>
                      </a>
                      <a href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                        <Github className='w-5 h-5'/>
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-6 space-y-4'>
                    <div className='flex items-start justify-between'>
                      <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                      <ArrowUpRight className='text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'/>
                    </div>
                    <p className='text-muted-foreground text-sm'>{project.description}</p>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                        {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All CTA */}
            <div className='text-center mt-12 animate-fade-in animation-delay-500'>
              <AnimatedBorderButton >
                <a href="https://davenircreative.com/" target='_blank' className="flex items-center gap-2">
                  View All Projects
                </a>
                <ArrowUpRight className='w-5 h-5'/>
              </AnimatedBorderButton>
            </div>
          </div>
    </section>
  )
}

export default Projects
