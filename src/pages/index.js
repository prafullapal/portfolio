import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Skills from "@/components/skills";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="p-12">
        <p className="m-12 p-12">Hello</p>
      </div>
    </Layout>
  );
}
