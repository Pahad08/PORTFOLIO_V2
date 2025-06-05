import { memo, useState } from "react";
import { MoveUpRight } from "lucide-react";

const Projects = ({ projects = [] }) => {
  const [currentIndex, setcurrentIndex] = useState(null);

  return (
    <>
      {projects.map((project, index) => {
        const isDimmed = currentIndex !== null && currentIndex !== index;
        return (
          <div
            className={`${
              isDimmed ? "opacity-40" : "opacity-100"
            } card transition group cursor-pointer w-full hover:glass`}
            key={index}
            onMouseEnter={() => setcurrentIndex(index)}
            onMouseLeave={() => setcurrentIndex(null)}
          >
            <div className="card-body">
              <h2 className="card-title group-hover:text-info">
                {project.title}
                <MoveUpRight
                  size={14}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </h2>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => {
                  return (
                    <div
                      key={index}
                      className="badge badge-soft badge-secondary items-center"
                    >
                      {tool}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default memo(Projects);
