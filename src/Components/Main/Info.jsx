import { memo, useState } from "react";
import { Github, Facebook, Mail } from "lucide-react";

const Info = () => {
  const [activeNav, setActiveNav] = useState("about");
  const navigationLink = ["about", "skills", "project"];
  const contacts = [
    {
      contactName: "Github",
      link: "https://github.com/Pahad08",
      isLink: true,
      icon: <Github />,
    },
    {
      contactName: "Facebook",
      link: "https://web.facebook.com/Mastah.Pahad",
      isLink: true,
      icon: <Facebook />,
    },
    {
      contactName: "mastahpahad@gmail.com",
      link: "",
      isLink: false,
      icon: <Mail />,
    },
  ];

  return (
    <>
      <header className="lg:w-[45%] lg:py-30 w-full sticky top-0 max-h-screen flex gap-24 flex-col">
        <section>
          <a className="text-4xl font-bold tracking-wide" href="#">
            Fahad Bagundang
          </a>
          <p className="mt-3 font-semibold text-lg">Full Stack Web Developer</p>
        </section>

        <ul className="flex flex-col gap-4 w-max">
          {navigationLink.map((link, index) => {
            return (
              <li key={index}>
                <a
                  className="group flex items-center hover:cursor-pointer gap-3 font-semibold"
                  onClick={() => {
                    setActiveNav(link);
                  }}
                  href={`#${index == 0 ? "" : link}`}
                >
                  <span
                    className={`${
                      activeNav.toLowerCase() === link.toLowerCase()
                        ? "bg-primary-content w-18 h-px"
                        : "bg-secondary w-10 h-px"
                    } group-hover:w-18 group-hover:bg-primary-content transition-all duration-200 ease-in-out`}
                  ></span>
                  <span
                    className={`${
                      activeNav.toLowerCase() === link.toLowerCase()
                        ? ""
                        : "text-secondary"
                    } group-hover:text-primary-content uppercase`}
                  >
                    {link}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <section className="flex gap-5">
          {contacts.map((contact, index) => {
            if (contact.isLink) {
              return (
                <a
                  href={contact.link}
                  key={index}
                  className="tooltip tooltip-primary"
                  data-tip={contact.contactName}
                  target="_blank"
                >
                  {contact.icon}
                </a>
              );
            } else {
              return (
                <span
                  className="tooltip cursor-pointer tooltip-primary"
                  data-tip={contact.contactName}
                  key={index}
                >
                  {contact.icon}
                </span>
              );
            }
          })}
        </section>
      </header>
    </>
  );
};

export default memo(Info);
