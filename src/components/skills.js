import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGit,
  FaGithub,
  FaJava,
  FaJs,
  FaPython,
  FaNpm,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiMysql,
  SiSqlite,
} from "react-icons/si";

export default function Skills() {
  const logos = [
    { key: "html", value: <FaHtml5 size={"50px"} /> },
    { key: "css", value: <FaCss3Alt size={"50px"} /> },
    { key: "reactjs", value: <FaReact size={"50px"} /> },
    { key: "nodejs", value: <FaNode size={"50px"} /> },
    { key: "expressjs", value: <SiExpress size={"50px"} /> },
    { key: "mongo", value: <SiMongodb size={"50px"} /> },
    { key: "git", value: <FaGit size={"50px"} /> },
    { key: "github", value: <FaGithub size={"50px"} /> },
    { key: "nextjs", value: <SiNextdotjs size={"50px"} /> },
    { key: "java", value: <FaJava size={"50px"} /> },
    { key: "javascript", value: <FaJs size={"50px"} /> },
    { key: "python", value: <FaPython size={"50px"} /> },
    { key: "npm", value: <FaNpm size={"50px"} /> },
    { key: "mysql", value: <SiMysql size={"50px"} /> },
    { key: "sql", value: <SiSqlite size={"50px"} /> },
  ];
  return (
      <Swiper
        slidesPerView={5}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{ delay: 2000 }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Scrollbar, Autoplay]}
        className="mySwiper max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
      >
        {logos.map((logo) => {
          return (
            <SwiperSlide key={logo.key} className="p-8">
              {logo.value}
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
}
