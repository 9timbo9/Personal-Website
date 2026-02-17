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
        <div className="w-full lg:w-[50%] flex flex-col justify-start items-start pl-20 pr-10 py-10 lg:sticky lg:top-0 h-fit lg:h-screen lg:items-end lg:pr-0">
          <div className="w-full lg:w-auto lg:pl-0 lg:pr-10">
            <Image
              src="/Personal-Website/headshot.jpg"
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
        {/* <div className="w-full lg:w-[20%]"></div> */}

        {/* Right section (scrollable content) */}
        <div className="w-full lg:w-[60%] px-10 py-20 space-y-24">
          {/* Replace these with real content later */}
          <section id="about">
            <h2 className="text-3xl font-semibold mb-4 text-white pl-2">About</h2>
            <p className="text-gray-400 pl-2">
              I am a fourth-year Computer Science student at the University of Oregon with minors in Mathematics and Earth Science. I am passionate about software engineering, artificial intelligence, and interactive systems, with experience building web, mobile, and game applications.
            </p>

            <p className="text-gray-400 pl-2 mt-4">
              My work spans full-stack web development, machine learning projects, and gameplay systems in Unity. I enjoy designing responsive user experiences, implementing data-driven features, and creating interactive software that feels polished and intuitive.
            </p>

            <p className="text-gray-400 pl-2 mt-4">
              I am currently seeking opportunities where I can grow as a developer and contribute to impactful products in AI, software engineering, or interactive technology.
            </p>

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
                    Web Developer - UO Continuing and Professional Education | Eugene, OR
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm">
                    Work with the Continuing and Professional Education IT team to fulfill client website requests. Design, edit,
                    and update webpages; develop and maintain event websites; test for mobile responsiveness, accessibility
                    compliance, and performance optimization. Support event-specific systems including registration forms,
                    speaker profiles, and session scheduling tools.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["PHP", "JavaScript", "HTML", "CSS"].map((tech) => (
                      <span key={tech} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              {/* Experience 2 */}
              <a
                href="#"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <div className="text-sm text-gray-400 min-w-[100px] sm:pt-1">December 2025 &ndash; Present</div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                    Frontend Developer, Rifflect | Remote (Based in NYC)
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm">
                    Contributing to a cross-platform music-based social discovery app by building and refining mobile UI features,
                    profile flows, and interaction components in a collaborative startup environment.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["React Native", "Expo", "TypeScript", "Clerk", "PostHog"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              {/* Experience 3 */}
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
                  <p className="text-gray-400 mt-1 text-sm">
                    Gained experience in data analysis and data scraping skills. Developed data scraping scripts to collect
                    competitor data from public websites and output it to Excel. Conducted data analytics for a press release on
                    the frequency of a specific disease&apos;s mentions in parliamentary proceedings.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Python", "BeautifulSoup (bs4)", "Requests", "Excel"].map((tech) => (
                      <span key={tech} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              {/* Experience 4 */}
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
                  <p className="text-gray-400 mt-1 text-sm">
                    Reviewed and graded homework assignments with attention to accuracy and fairness. Provided detailed,
                    constructive feedback aligned with course standards. Developed strong skills in technical communication and
                    academic support.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["LaTeX", "Proofs", "Grading Tools"].map((tech) => (
                      <span key={tech} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
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
              href="/Personal-Website/TimothyNikolaevResume.pdf" // Replace with the actual path to your PDF
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-lime-300 transition duration-200"
            >
              View Full Résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
          {/* Websites for Client*/}
          <section id="clients" >
            <h2 className="text-3xl font-semibold mb-6 text-white pl-2">Websites/Clients</h2>
            <p className="text-gray-400 pl-2">Websites for various clients I&apos;ve worked on in my position at UO Continuing and Professional Education</p><br></br>
            <div className="flex flex-col gap-6 ">
              <a
                href="https://conference.iste.org/2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <Image
                  src="/Personal-Website/ISTE.png"
                  alt="ISTE thumbnail"
                  width={200}
                  height={150}
                  className="w-100 h-75 object-cover rounded-md border border-white/10"
                />
                <h3 className="text-sm font-semibold text-white group-hover:text-lime-300 transition duration-200">
                  ISTE 2024, 2025, 2026, and 2027 Conference Website
                </h3>
              </a>
            </div>

            <div className="flex flex-col gap-6 ">
              <a
                href="https://charterconference.org/2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <Image
                  src="/Personal-Website/CCSA.png"
                  alt="CCSA thumbnail"
                  width={200}
                  height={150}
                  className="w-100 h-75 object-cover rounded-md border border-white/10"
                />
                <h3 className="text-sm font-semibold text-white group-hover:text-lime-300 transition duration-200">
                  CCSA 2024, 2025, 2026, and 2027 Conference Website
                </h3>
              </a>
            </div>

            <div className="flex flex-col gap-6 ">
              <a
                href="https://publiccharters.org/conference/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <Image
                  src="/Personal-Website/NCSC.png"
                  alt="NCSC thumbnail"
                  width={200}
                  height={150}
                  className="w-100 h-75 object-cover rounded-md border border-white/10"
                />
                <h3 className="text-sm font-semibold text-white group-hover:text-lime-300 transition duration-200">
                  NCSC 2024, 2025, and 2026 Conference Website
                </h3>
              </a>
            </div>
            <div className="flex flex-col gap-6 ">
              <a
                href="https://www.csdcconference.org/2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <Image
                  src="/Personal-Website/CSDC.png"
                  alt="CSCD thumbnail"
                  width={200}
                  height={150}
                  className="w-100 h-75 object-cover rounded-md border border-white/10"
                />
                <h3 className="text-sm font-semibold text-white group-hover:text-lime-300 transition duration-200">
                  CSCD 2024, 2025, and 2026 Conference Website
                </h3>
              </a>
            </div>

            <div className="pl-4">
              <br></br>
              <p className='text-med font-semibold text-gray-400 pb-1.5'>Other websites I&apos;ve worked on include:</p>
              <ul className='text-lg'>
                <li><a href="https://www.ieccwa.org/2026/" target="_blank" className="hover:text-lime-300 transition-all duration-200 text-white hover:scale-120">IECC</a></li>
                <li><a href="https://ncce.org/conference/" target="_blank" className="hover:text-lime-300 transition-all duration-200 text-white hover:scale-120"> NCCE</a></li>
                <li><a href="https://center.uoregon.edu/AUA/2026/" target="_blank" className="hover:text-lime-300 transition-all duration-200 text-white hover:scale-120"> AUA</a></li>
                <li><a href="https://center.uoregon.edu/LSA/2025/registration/" target="_blank" className="hover:text-lime-300 transition-all duration-200 text-white hover:scale-120"> LSA</a></li>
              </ul>
            </div>

          </section>

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
                  src="/Personal-Website/project1.png"
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
                    {['Python-Flask', 'SQLite3', 'React', 'CSS/Bootstrap'].map((tech) => (
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
                href="https://github.com/9timbo9/ctr-distributed-training"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <Image
                  src="/Personal-Website/project2.png"
                  alt="Project 2 thumbnail"
                  width={160}
                  height={112}
                  className="w-full md:w-40 h-28 object-cover rounded-md border border-white/10"
                />

                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                    Click-Through Rate (CTR) prediction pipeline
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm">
                    This project implements a fairness-aware Click-Through Rate (CTR) prediction pipeline using PyTorch’s Wide & Deep architecture, trained on the anonymized Criteo Fairness in Job Ads Dataset. It includes preprocessing, training, and a FastAPI REST service for real-time predictions, and can be adapted for recruiter-owned, non-anonymized datasets to power production ad targeting systems. Checkout the README.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['PyTorch', 'FastAPI', 'scikit-learn', 'Machine Learning', 'Model Deployment'].map((tech) => (
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

              {/* Project 3 */}
              <a
                href="https://github.com/9timbo9/Cone_Crisis"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <Image
                  src="/Personal-Website/project3.png"
                  alt="Project 3 thumbnail"
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
              {/* Project 5 – Coulomb Stress App (In Dev) */}
              <a
                href="#" // change if different
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                <Image
                  src="/Personal-Website/project4.png"
                  alt="Coulomb Stress App thumbnail"
                  width={160}
                  height={112}
                  className="w-full md:w-40 h-28 object-cover rounded-md border border-white/10"
                />

                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                    Coulomb Stress Visualization App <span className="text-xs text-gray-400">(In Development)</span>
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm">
                    Interactive tool to compute and visualize Coulomb stress changes on active faults using USGS data and
                    Okada-based modeling. Aims to make seismic stress analysis accessible for public and educational use.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Python', 'FastAPI', 'Plotly', 'USGS APIs', 'GIS'].map((tech) => (
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



        </div >
      </main >
    </>
  );
}
