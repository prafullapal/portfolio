import Image from "next/image";

export default function Projects() {
  const projects= [{
    img: "/images/a.png",
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    tags: ["react","nodejs","Expressjs"],
    url: "#",
    gitrepo: "#"
  },{
    img: "/images/b.png",
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    tags: ["react","nodejs","Expressjs"],
    url: "#",
    gitrepo: "#"
  },{
    img: "/images/c.png",
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    tags: ["react","nodejs","Expressjs"],
    url: "#",
    gitrepo: "#"
  }]
  return (
    <>
    <p className="text-4xl font-bold text-center my-8">
        My Projects
    </p>
    <div  className="flex flex-row flex-wrap justify-center">
    {projects.map((project)=> <>
      <div className="bg-secondary rounded-md h-min w-96 p-8 my-4 me-4 hover:bg-opacity-[0.5]" key={project.title}>
        <Image src={project.img} width={320} height={250} alt={`Project - ${project.title}`} className="hover:shadow-2xl"></Image>
        <p className="text-2xl font-bold text-center my-4">
        {project.title}
        </p>
        <p className="font-normal text-lg text-justify">
          {project.desc}
        </p>
        {project.tags.map((tag)=> <span key={tag} className="inline-flex items-center rounded-md bg-yellow-50 me-2 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-orange-600/30">
        {tag}
        </span>)}
        <div className="flex flex-row justify-between">
          <button className="rounded-md bg-yellow mt-2 p-2 hover:bg-opacity-[0.1]">Github</button>
          <button className="rounded-md bg-yellow mt-2 p-2 hover:bg-opacity-[0.1]">Preview</button>
        </div>
      </div>
    </>)}
    </div>
    </>
  );
}
