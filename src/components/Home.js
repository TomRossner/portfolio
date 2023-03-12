import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/projects');
    }
    
  return (
    <div className='inner-container'>
        <h2>Hello.</h2>
        <h1>My name is Tom,</h1>
        <h3>I'm a Full Stack Developer</h3>
        <p>I build end-to-end web applications using the latest web technologies and tools.</p>
        <button className='btn light' onClick={handleClick}>Check my latest projects</button>
    </div>
  )
}

export default Home;