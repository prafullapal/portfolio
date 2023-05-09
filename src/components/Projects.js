import { Transition } from "@headlessui/react";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      img: "/images/projects/portfolio_project.png",
      title: "Portfolio",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
      tags: ["next.js", "react.js", "tailwindCss", "headlessUI"],
      url: "https://portfolio-prafullapal.vercel.app/",
      gitrepo: "https://github.com/prafullapal/portfolio",
    },
    {
      img: "/images/b.png",
      title: "Project 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
      tags: ["react", "nodejs", "Expressjs"],
      url: "#",
      gitrepo: "#",
    },
    {
      img: "/images/c.png",
      title: "Project 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
      tags: ["react", "nodejs", "Expressjs"],
      url: "#",
      gitrepo: "#",
    },
  ];
  return (
    <div className="pb-8">
      <p className="text-4xl font-bold text-center py-8">My Projects</p>

      <InView>
        {({ inView, ref }) => (
          <div ref={ref}>
            <Transition.Root show={inView}>
              <div className="flex flex-row flex-wrap justify-center">
                {projects.map((project, idx) => (
                  <Transition.Child
                    key={idx}
                    as="div"
                    enter="ease-in duration-[1000ms] transition-all"
                    enterFrom="opacity-0 translate-y-48"
                    enterTo="opacity-100 translate-y-0"
                    className="bg-card rounded-md h-min w-96 p-8 my-4 me-4 hover:bg-opacity-[0.5]"
                  >
                    <Image
                      src={project.img}
                      width={320}
                      height={250}
                      alt={`Project - ${project.title}`}
                      className="hover:shadow-2xl"
                    ></Image>
                    <p className="text-2xl font-bold text-center my-4">
                      {project.title}
                    </p>
                    <p className="font-normal text-lg text-justify">
                      {project.desc}
                    </p>
                    {project.tags.map((tag, idy) => (
                      <span
                        key={idy}
                        className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blueText ring-1 ring-inset ring-blueText-700/10 me-2"
                      >
                        {tag}
                      </span>
                    ))}
                    <div className="flex flex-row justify-between py-2">
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-md">
                        <Link href={project.gitrepo} passHref legacyBehavior>
                          <a target="_blank" rel="noopener noreferrer">
                            Github
                          </a>
                        </Link>
                      </button>
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-md">
                        <Link href={project.url} passHref legacyBehavior>
                          <a target="_blank" rel="noopener noreferrer">
                            Preview
                          </a>
                        </Link>
                      </button>
                    </div>
                  </Transition.Child>
                ))}
              </div>
            </Transition.Root>
          </div>
        )}
      </InView>
    </div>
  );
}
