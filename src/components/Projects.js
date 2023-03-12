import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
    <div className='inner-container'>
      <section className='project-section'>
        <h2>ProjectMania</h2>
        <p>Project management tool</p>
        <div className='buttons-container'>
          <Link to='https://tomrossner.github.io/project-mania-frontend/' className='project-link'>Check it out</Link>
          <Link to='https://github.com/TomRossner/project-mania-frontend' className='project-link'>View code</Link>
        </div>
      </section>
      <section className='project-section'>
        <h2>SmartBrain</h2>
        <p>Face recognition app</p>
        <div className='buttons-container'>
          <Link to='https://tomrossner.github.io/smart-brain-frontend/' className='project-link'>Check it out</Link>
          <Link to='https://github.com/TomRossner/smartbrain-frontend' className='project-link'>View code</Link>
        </div>
      </section>
      <section className='project-section'>
        <h2>CRWN-Clothing</h2>
        <p>E-commerce app</p>
        <div className='buttons-container'>
          <Link to='https://tomrossner.github.io/CRWN-Clothing/' className='project-link'>Check it out</Link>
          <Link to='https://github.com/TomRossner/crwn-clothing-frontend' className='project-link'>View code</Link>
        </div>
      </section>
    </div>
    </>
  )
}

export default Projects;