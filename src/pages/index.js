import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Skills from "@/components/skills";
import Image from "next/image";
import TextSphere from "@/components/TextSphere";
import Projects from "@/components/Projects";
import Typewriter from "typewriter-effect";
import Link from "next/link";

import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const social = [
    {
      logo: <MdEmail />,
      url: "mailto:prafullapal.recsonbhadra@gmail.com",
    },
    {
      logo: <AiFillGithub />,
      url: "https://github.com/prafullapal",
    },
    {
      logo: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/prafullapal18/",
    },
    {
      logo: <AiFillInstagram />,
      url: "https://www.instagram.com/prafulla_pal_/",
    },
  ];

  const resume =
    "https://drive.google.com/file/d/1cBYMVUnmGNipYYrw7MUlIgDJJKecbyhj/view?usp=sharing";

  return (
    <Layout>
      <section id="home" className="bg-dark">
        <div className="flex flex-col p-12 min-h-screen justify-center">
          <Image
            className={`mx-auto mt-8 border-2 border-blueText rounded-full bg-opacity-[0.5]`}
            src="https://d33wubrfki0l68.cloudfront.net/32c48e23e828c42a99a37db81e2a91d7c8eed4de/d134a/assets/png/ram-maheshwari.png"
            alt="Profile Picture"
            width={250}
            height={250}
          />
          <p className="mx-auto pt-8 font-black md:text-6xl text-4xl">
            Hey, I&#39;m Prafulla Pal
          </p>
          <div className="mx-auto flex flex-row pt-6 font-medium md:text-2xl text-xl">
            <Typewriter
              options={{
                strings: ["A Full Stack Web Developer", "An Undergraduate"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="social_media flex flex-row mx-auto justify-between my-8 text-blueText text-4xl gap-x-4">
            {social.map((elem, idx) => (
              <Link key={idx} href={elem.url} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  {elem.logo}
                </a>
              </Link>
            ))}
          </div>
          <button className="mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
            <Link href={resume} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Link>
          </button>
        </div>
      </section>

      <section id="about" className="bg-dark-2">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-4 grid-cols-1">
          <div className="p-8 font-normal text-xl text-justify mx-auto">
            <p className="text-4xl font-bold text-center mx-auto p-8">
              About Me
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              betwee eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <TextSphere />
        </div>
      </section>

      <section id="skills" className="bg-dark-2">
        <Skills />
      </section>

      <section id="projects" className="bg-dark">
        <Projects />
      </section>

    </Layout>
  );
}
