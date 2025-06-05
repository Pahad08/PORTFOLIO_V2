import html from "/assets/frontend/html.png";
import css from "/assets/frontend/css.png";
import js from "/assets/frontend/js.png";
import react from "/assets/frontend/react.png";
import alpine from "/assets/frontend/alpine.svg";
import bootstrap from "/assets/frontend/bootstrap.png";
import tailwindcss from "/assets/frontend/tailwindcss.svg";
import php from "/assets/backend/php.png";
import laravel from "/assets/backend/laravel.png";
import livewire from "/assets/backend/livewire.png";
import inertia from "/assets/backend/inertia.jpeg";
import ci4 from "/assets/backend/ci4.png";
import github from "/assets/tools/github.png";
import git from "/assets/tools/git.png";
import Skills from "../Section/Skills";
import Projects from "../Section/Projects";
import { memo, useEffect, useRef } from "react";
import ContentHeader from "../Utils/ContentHeader";
import { useMainContext } from "../../Context/MainContextProvider";

const Content = () => {
  const skillsContent = [
    {
      images: [html, css, js, react, alpine, bootstrap, tailwindcss],
      heading: "Frontend",
    },
    {
      heading: "Backend",
      images: [php, laravel, livewire, inertia, ci4],
    },
    { images: [github, git], heading: "Tools" },
  ];
  const projects = [
    {
      title: "Sale and Inventory Management System",
      description:
        "The Sale and Inventory Management System for Badong Lechon Manok is a custom-built software designed to monitor daily sales, manage stock levels of ingredients and products, and streamline operations across branches.",
      tools: ["PHP", "CSS", "Javascript"],
    },
    {
      title: "Student Grade Management System",
      description:
        "The Student Grade Management System is a digital platform designed to simplify the recording, tracking, and analysis of student academic performance. It allows teachers to input grades, calculate averages, and generate report cards efficiently.",
      tools: ["PHP", "CSS", "Javascript"],
    },
    {
      title: "Online Rental System for Lights and Sounds Services",
      description:
        "The Online Rental System for AF Professional Lights and Audio System is a web-based platform designed to streamline the booking and management of lights and sound equipment rentals, helping AF Professional enhance customer service, minimize scheduling conflicts, and efficiently manage their rental operations",
      tools: ["Laravel", "Jquery", "Bootstrap"],
    },
    {
      title: "Equipment Borrowing System",
      description:
        "The Equipment Borrowing System of Lambayong TESDA is a digital solution designed to manage the borrowing and return of tools and equipment used in training programs. This system streamlines the request process, tracks borrowed items in real time, records borrower information, and monitors equipment availability and condition.",
      tools: ["CodeIgniter 4", "Bootstrap", "Jquery"],
    },
    {
      title: "Graduate Tracer System",
      description:
        "The Graduate Tracer System (GTS) of CHED 12 is a data collection initiative that tracks the employment outcomes and career paths of graduates from higher education institutions in the region. It aims to gather valuable information on graduates' employment status, relevance of their academic programs, and contribution to the workforce.",
      tools: ["Laravel", "Alpine JS", "Tailwind", "Livewire"],
    },
  ];
  const { setActiveNav } = useMainContext();
  const aboutSection = useRef([]);

  useEffect(() => {
    const hash = location.hash.slice(1);

    if (hash) {
      const target = document.getElementById(hash);
      target.scrollIntoView({ behavior: "smooth" });
    }

    const targetSections = aboutSection.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    targetSections.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targetSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <main className="lg:py-30 lg:w-[55%] flex flex-col">
        <section id="about" ref={(el) => (aboutSection.current[0] = el)}>
          <ContentHeader heading="About" />
          <div>
            <p className="mb-3 text-justify tracking-wider">
              I am Fahad Bagundang, an aspiring web developer with a strong
              passion for technology and innovation. Ever since I was introduced
              to web development, I knew it was the path I wanted to pursue. As
              a{" "}
              <span className="font-semibold text-primary">
                Bachelor of Science in Information Systems (BSIS)
              </span>{" "}
              student at{" "}
              <span className="font-semibold text-primary">
                Sultan Kudarat State University
              </span>
              , I dedicate a significant amount of my time to practicing and
              improving my skills in front-end and back-end development.
            </p>
            <p className="mb-3 text-justify tracking-wider">
              I am eager not only to develop websites but also to share my
              knowledge and grow alongside others in the field. I believe in
              continuous learning and actively seek out opportunities to expand
              my understanding through collaboration and experience. As a
              student, I am hardworking, focused, an active listener, and always
              open to learning from others.
            </p>
            <p className="text-justify tracking-wider">
              Outside of academics, I enjoy playing video games and engaging in
              outdoor sports, which help me stay balanced and energized. My goal
              is to become a skilled and reliable web developer who can
              contribute meaningfully to the tech community and help create
              innovative digital solutions.
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="lg:pt-31"
          ref={(el) => (aboutSection.current[1] = el)}
        >
          <ContentHeader heading="Skills" />
          <div>
            {skillsContent.map((content, index) => {
              return (
                <div className={index == 0 ? "" : "mt-5"} key={index}>
                  <Skills images={content.images} heading={content.heading} />
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="projects"
          className="lg:pt-24"
          ref={(el) => (aboutSection.current[2] = el)}
        >
          <ContentHeader heading="Projects" />
          <div className="flex flex-col gap-5">
            <Projects projects={projects} />
          </div>
        </section>
      </main>
    </>
  );
};

export default memo(Content);
