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
    <p className="text-4xl font-bold text-center py-8">
      My Projects
    </p>
    <div  className="flex flex-row flex-wrap justify-center">
    {projects.map((project,idx)=> 
      <div className="bg-card rounded-md h-min w-96 p-8 my-4 me-4 hover:bg-opacity-[0.5]" key={idx}>
        <Image src={project.img} width={320} height={250} alt={`Project - ${project.title}`} className="hover:shadow-2xl"></Image>
        <p className="text-2xl font-bold text-center my-4">
        {project.title}
        </p>
        <p className="font-normal text-lg text-justify">
          {project.desc}
        </p>
        {project.tags.map((tag,idy)=> 
        <span key={idy} className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blueText ring-1 ring-inset ring-blueText-700/10 me-2">{tag}</span>)}
        <div className="flex flex-row justify-between">
          <button className="rounded-md bg-yellow mt-2 p-2 hover:bg-opacity-[0.1]">Github</button>
          <button className="rounded-md bg-yellow mt-2 p-2 hover:bg-opacity-[0.1]">Preview</button>
        </div>
      </div>)}
    </div>
    </>
  );
}
