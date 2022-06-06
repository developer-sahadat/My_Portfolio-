import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img className="rounded-2xl" src={item.image} alt="" />
      </div>

      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>

      <div className="flex  items-center justify-between">
        <a
          href={item.lHref}
          target="blank"
          className="btn btn-md bg-accent hover:bg-secondary-hover mx-2 transition-all"
        >
          Live Link
        </a>
        <a
          href={item.gHref}
          target="blank"
          className="btn btn-md bg-accent hover:bg-secondary-hover transition-all"
        >
          Code Link
        </a>
      </div>
    </div>
  );
};

export default Project;
