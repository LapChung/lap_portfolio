import React from 'react';
import './Projects.scss';
import joinotes from '../../assets/images/joinotes.jpg';
import {Image} from 'semantic-ui-react';

function Projects() {
    return (
        <div className='project'>
            <span className='project-title'>Projects</span>
            <Image className='joinotes-img' src={joinotes}/>
        </div>
    );
}

export default Projects;