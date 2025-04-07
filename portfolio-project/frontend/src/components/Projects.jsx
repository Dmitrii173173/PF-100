import React, { useEffect, useState } from 'react';
import { getProjects } from '../api';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Проекты</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
            >
              Посмотреть проект
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 