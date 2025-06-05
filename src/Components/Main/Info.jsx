import { memo } from "react";
import { Github, Facebook, Mail } from "lucide-react";
import { useMainContext } from "../../Context/MainContextProvider";

const Info = () => {
  const { activeNav, setActiveNav } = useMainContext();
  const navigationLink = ["about", "skills", "projects"];
  const contacts = [
    {
      contactName: "Github",
      link: "https://github.com/Pahad08",
      icon: <Github />,
    },
    {
      contactName: "Facebook",
      link: "https://web.facebook.com/Mastah.Pahad",
      icon: <Facebook />,
    },
    {
      contactName: "mastahpahad@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=mastahpahad@gmail.com",
      icon: <Mail />,
    },
  ];

  return (
    <>
      <header className="lg:w-[45%] lg:py-30 w-full lg:sticky lg:top-0 max-h-screen flex lg:gap-24 gap-10 flex-col">
        <section>
          <a className="text-4xl font-bold tracking-wide" href="#">
            Fahad Bagundang
          </a>
          <p className="mt-3 font-semibold text-lg">Full Stack Web Developer</p>
        </section>

        <ul className="lg:flex hidden flex-col gap-4 w-max">
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
                        ? "bg-primary w-18 h-px"
                        : "bg-secondary w-10 h-px"
                    } group-hover:w-18 group-hover:bg-primary transition-all duration-200 ease-in-out`}
                  ></span>
                  <span
                    className={`${
                      activeNav.toLowerCase() === link.toLowerCase()
                        ? "text-primary"
                        : "text-secondary"
                    } group-hover:text-primary uppercase text-sm`}
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
          })}
        </section>
      </header>
    </>
  );
};

export default memo(Info);
