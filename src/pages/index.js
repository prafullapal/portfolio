import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Skills from "@/components/skills";
import Image from "next/image";
import TextSphere from "@/components/TextSphere";
import Projects from "@/components/Projects";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Contact from "@/components/contact";

import { MdEmail } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";
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
            className={`mx-auto mt-8 border-2 border-blueText shadow-none transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-blueText rounded-full bg-opacity-[0.5]`}
            src={"/images/ProfilePic.JPG"}
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
                strings: [
                  "A B.Tech Undergrad Student",
                  "A Software Developer",
                  "A Full Stack Web Developer",
                  "An Android App Developer",
                ],
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
          <div className="p-8 font-normal text-lg text-justify mx-auto">
            <p className="text-4xl font-bold text-center mx-auto p-8">
              About Me
            </p>
            <p>
              I&#39;m a passionate full-stack web developer and a
              problem-solving enthusiast. With a strong foundation in Java, I
              have embraced the world of coding and continuously strive to
              expand my skill set. I love learning and experimenting with new
              technologies to develop clean and efficient web applications. As a
              fresher, I bring a fresh perspective and a hunger for growth. I
              approach problem-solving with a methodical and analytical mindset,
              breaking down complex tasks to deliver innovative solutions.
              Collaboration and effective communication are key aspects of my
              work. I&#39;m excited about the possibilities ahead in my career
              and eager to make a positive impact as a dedicated and
              enthusiastic developer. Let&#39;s connect and create exceptional
              web experiences together.
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

      <section id="education" className="bg-dark-2">
        {/* <Education /> */}
        <p className="text-4xl font-bold text-center py-8">Education</p>
        <div className="mx-[25vw]">
          <ol className="relative border-l border-gray-700 pb-8">
            <li className="bg-card p-8 rounded ml-6 mb-4">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-dark-2 bg-dark">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white block">
                Rajkiya Engineering College, Sonbhadra
              </h3>
              <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">
                B.Tech. - 7.65
              </span>
              <time className="block my-2 text-sm font-normal leading-none text-gray-500">
                Dr. A.P.J. Abdul Kalam Technical University, Lucknow
              </time>
              <p className="mb-4 text-base font-normal text-gray-400">
                7.65 C.G.P.A. secured till 4th Semester.
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
                Download ZIP
              </a> */}
            </li>
            <li className="bg-card p-8 rounded ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-dark-2 bg-dark">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                Dr. Virendra Swarup Education Center, Awadhpuri
              </h3>
              <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">
                Class X - 92.2%
              </span>
              <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">
                Class XII - 89.75%
              </span>
              <time className="block my-2 text-sm font-normal leading-none text-gray-500">
                Council for the Indian School Certificate Examinations
              </time>
              <p className="mb-4 text-base font-normal text-gray-400">
                Science Stream
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
                Download ZIP
              </a> */}
            </li>
          </ol>
        </div>
      </section>

      <section id="contact" className="bg-dark">
        <p className="text-4xl font-bold text-center py-8">Contact Me</p>
        <Contact />
      </section>

      <section id="footer" className="bg-dark-2">
        <h1 className="text-center text-gray-500 py-8 block">
          Made with <BsHeartFill color="red" style={{ display: "inline" }} /> by
          Prafulla Pal
        </h1>
      </section>
    </Layout>
  );
}
