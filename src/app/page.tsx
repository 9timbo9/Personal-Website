'use client';
import AnimatedBackgroundWrapper from '@/components/AnimatedBackgroundWrapper';
import TopBar from '@/components/TopBar';
import Image from 'next/image';


export default function Home() {
  return (
    // see if i can push
    <>
      <AnimatedBackgroundWrapper />
      <main className="relative z-10 flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left section (sticky header/intro) */}
        <div className="w-full lg:w-[40%] flex flex-col justify-start items-start pl-20 pr-10 py-10 lg:sticky lg:top-0 h-fit lg:h-screen lg:items-end lg:pr-0">
          <div className="w-full lg:w-auto lg:pl-0 lg:pr-10">
          <Image
            src="/headshot.jpg"
            alt="Timothy Nikolaev"
            width={256}
            height={256}
            unoptimized
            className="w-64 h-64 rounded-full object-cover mb-6 border-2 border-white"
          />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white pl-0 lg:pl-0">Timothy Nikolaev</h1>
            <p className="text-lg text-gray-300 max-w-md pl-6 lg:pl-0">
              Web Developer, Game Dev Enthusiast, and CS Student at University of Oregon
            </p>
            <TopBar />
          </div>
        </div>
        <div className="w-full lg:w-[20%]"></div>

        {/* Right section (scrollable content) */}
        <div className="w-full lg:w-[40%] px-10 py-20 space-y-24">
          {/* Replace these with real content later */}
          <section id="about">
            <h2 className="text-3xl font-semibold mb-4 text-white pl-2">About</h2>
            <p className="text-gray-400 pl-2">I am a fourth-year Computer Science student at the University of Oregon, with minors in Math and Earth Science. I&apos;m passionate about Artificial Intelligence and plan to focus my career in this field. I&apos;ve also been working on game projects and am excited about the possibility of contributing to game development.</p><br></br>
            <p className="text-gray-400 pl-2">I&apos;m currently exploring opportunities in AI, data science, and game developmentareas where I can apply my skills to innovative projects and help solve real-world problems. I enjoy learning new tools and technologies; right now, I&apos;m actively building in Unity, improving my 3D modeling with Blender, and open to developing websites as well.</p><br></br>
            <p className="text-gray-400 pl-2">I&apos;m currently seeking job opportunities where I can continue to grow, learn, and make an impact.</p>
          </section>

            <section id="experience">
            <h2 className="text-3xl font-semibold mb-4 text-white pl-2">Experience</h2>
            <div className="space-y-6">

              {/* Experience 1 */}
              <a
                href="https://continue.uoregon.edu/services/conf.php"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <div className="text-sm text-gray-400 min-w-[100px] sm:pt-1">2023 — Present</div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                    Web Developer -  UO Continuing and Professional Education | Eugene, OR
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm">Work with the Continuing and Professional Education IT team to fulfill client website requests. Design, edit, and update webpages; develop and maintain event websites; test for mobile responsiveness, accessibility compliance, and performance optimization. Support event-specific systems including registration forms, speaker profiles, and session scheduling tools.</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['PHP', 'JavaScript', 'HTML', 'CSS'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
               {/* Experience 2 */}
              <a
                href="https://www.brevia.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <div className="text-sm text-gray-400 min-w-[100px] sm:pt-1">June 2024 &ndash; August 2024</div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                  Intern, Brevia Consulting | London Area, United Kingdom
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm"> Gained experience in data analysis and data scraping skills. Developed data scraping scripts to collect competitor data from public websites and output it to Excel. Conducted data analytics for a press release on the frequency of a specific disease's mentions in parliamentary proceedings.</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Python', 'BeautifulSoup (bs4)', 'Requests', 'Excel'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              {/* Experience 3 */}
              <a
                href="#"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <div className="text-sm text-gray-400 min-w-[100px] sm:pt-1">March 2024 &ndash; Present</div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                  Math Grader, University of Oregon | Eugene, OR 
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm"> Reviewed and graded homework assignments with attention to accuracy and fairness. Provided detailed, constructive feedback aligned with course standards. Developed strong skills in technical communication and academic support</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['LaTeX', 'Proofs', 'Grading Tools'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

            </div>


          </section>
          <div className="pt-6">
          <a
            href="/TimothyNikolaevResume.pdf" // Replace with the actual path to your PDF
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-lime-300 transition duration-200"
          >
            View Full Résumé <span aria-hidden="true">↗</span>
          </a>
        </div>


          <section id="projects">
          <h2 className="text-3xl font-semibold mb-6 text-white pl-2">Projects</h2>
          <div className="space-y-6">
            {/* Project 1 */}
            <a
              href="https://grubify.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
            >
              <Image
                src="/project1.png"
                alt="Project 1 thumbnail"
                width={160}
                height={112}
                className="w-full md:w-40 h-28 object-cover rounded-md border border-white/10"
              />

              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                  Grubify
                </h3>
                <p className="text-gray-400 mt-1 text-sm">
                  Grubify is a full-stack recipe planning app that lets users browse, save, and manage meals while automatically generating shopping carts with the necessary ingredients. It integrates with the Kroger and Instacart APIs to provide real-time product availability, pricing, and cart creation, streamlining the meal planning and grocery shopping experience.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Python-Flask', 'SQLite3', 'React','CSS/Bootstrap'].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>

             {/* Project 2 */}
            <a
              href="https://github.com/9timbo9/Cone_Crisis"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
            >
            <Image
              src="/project2.png"
              alt="Project 2 thumbnail"
              width={160}
              height={112}
              className="w-full md:w-40 h-28 object-cover rounded-md border border-white/10"
            />

              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                  Cone Crisis
                </h3>
                <p className="text-gray-400 mt-1 text-sm">
                  Cone Crisis is a fast-paced ice cream shop simulator developed in Unity where players manage customer orders under time pressure. Gameplay includes scooping flavors, building sundaes, and handling increasing difficulty as customer demand rises. Designed with responsive UI, custom shaders, and smooth animations to deliver an engaging experience. Features player progression, scoring, and in-game tutorials.                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['C#', 'Unity', 'ShaderLab', 'HLSL', 'Game Development'].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>

          </div>
        </section>

          

        </div>
      </main>
    </>
  );
}
