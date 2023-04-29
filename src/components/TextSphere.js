import { useEffect } from "react";
import TagCloud from "TagCloud";
export default function TextSphere() {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const skills = [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "NODEJS",
        "EXPRESSJS",
        "REACTJS",
        "MONGODB",
        "NEXTJS",
        "C++",
        "JAVA",
        "NPM",
        "YARN",
        "BABEL",
        "ES5/6",
        "GIT",
        "GITHUB",
        "BOOTSTRAP",
        "MATERIALUI",
        "TAILWINDCSS",
        "PYTHON",
      ];

      const options = {
        radius: 250,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, skills, options);
    };
  }, []);

  return (
    <>
      <div className="text-sphere mx-auto">
        <span className="tagcloud"></span>
      </div>
    </>
  );
}
