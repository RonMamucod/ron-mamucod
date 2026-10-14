import React from 'react'
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
        <div className='container mx-auto px-6 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Column */}
            <div className='space-y-8 '>
              <div className='animate-fade-in'>
                <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
              </div>

              <h2 className='text-4xl md:text-5xl font-black leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
                Where creativity meets code,
                <span className='font-serif italic font-normal text-white'> 
                  {' '}crafting experiences that click.
                </span>
              </h2>

              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I’m a passionate web developer and SEO expert with experience in UI/UX design, website development, and search engine optimization. I’m proficient in WordPress, with a strong focus on building and optimizing websites that are both visually appealing and functional.</p>
                <p>
                 I specialize in creating clean, responsive, and user-friendly WordPress websites, from engaging landing pages to fully functional business and e-commerce sites. With my background in UI/UX design, I aim to deliver websites that provide a great user experience while applying SEO best practices to improve search visibility, website performance, and online presence.</p>
                <p>
                  When I’m not coding, I’m exploring new technologies, improving my SEO skills, and working on projects that challenge my creativity and help me grow as a developer.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  "My mission is to create web experiences that go beyond functionality—where clean code meets intuitive design and every interaction feels seamless."
                </p>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className='grid sm:grid-cols-2 gap-6'>
              {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )

}

export default About
