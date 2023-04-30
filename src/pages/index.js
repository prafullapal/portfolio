import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Skills from "@/components/skills";
import Image from "next/image";
import TextSphere from "@/components/TextSphere";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>

      <section id="home">
        <div id="home" className="flex flex-col p-12 h-screen justify-center">
          <Image
            className={`mx-auto border-2 border-yellow rounded-full bg-secondary bg-opacity-[0.5]`}
            src="https://d33wubrfki0l68.cloudfront.net/32c48e23e828c42a99a37db81e2a91d7c8eed4de/d134a/assets/png/ram-maheshwari.png"
            alt="Profile Picture"
            width={250}
            height={250}
          />
          <p className="mx-auto pt-8 font-black md:text-6xl text-4xl">
            Hey, I&#39;m Prafulla Pal
          </p>
          <p className="mx-auto pt-6 font-medium md:text-2xl text-xl">
            I&#39;m a Full Stack Web Developer
          </p>
        </div>
      </section>

      <section id="skills" className="z-10">
        <Skills />
      </section>

      <section id="about" className="my-8">
        <div className="xl:mx-auto lg:mx-8 grid grid-cols-2 gap-4">
          <div className="p-8 font-normal text-xl text-justify mx-auto my-8">
            <p className="text-4xl font-bold text-center mx-auto p-8">
              About Me
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
            <TextSphere />
        </div>
      </section>

      <section id="projects" className="my-8">
        <Projects />
      </section>
      
    </Layout>
  );
}
