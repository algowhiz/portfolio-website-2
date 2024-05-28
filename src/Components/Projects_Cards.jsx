import React, { useState } from 'react';

const Projects_Cards = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className={`bg-white p-6 rounded-lg shadow-lg ${project.spanTwoColumns ? 'md:col-span-2' : 'md:col-span-1'}`}
          >
            <h2 className="text-2xl font-bold mb-2">{project.projectName}</h2>
            <img src={project.img} alt={project.projectName} className="w-full h-auto mb-4 rounded" />
            <p className="text-gray-700 font-bold ">{project.projectDesc}</p>
            <div className="flex space-x-2 mt-5">
              {project.langIcons}
            </div>
            <div className='flex gap-4'>
              <a href={project.link} className="text-blue-500 mt-4 block" target="_blank" rel="noopener noreferrer">View Code</a>
              {project.live && <a href={project.live} className="text-blue-500 mt-4 block" target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
      {projects.length > 4 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-black  text-white  py-2 px-4 rounded"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects_Cards;
