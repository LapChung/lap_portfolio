import React from 'react';
import './About.scss';
import {Divider} from 'semantic-ui-react';

function About() {
    return (
        <div className='about'>
            <span className='about-me'>About Me</span>
            <div className='desc'>
                <p>I am a recent graduate from the University of Georgia with a degree in computer science. I enjoy exploring new technologies and experimenting with them.
                    As such, I am currently learning ReactJS and playing around with the large libraries it has to offer!<br/>
                    <b>I am also searching for a full-time opportunity in web development.</b>
                     When I am not coding, I am usually at the gym or hanging with my friends playing games.
                </p>
            </div>
            <span className='about-me'>Fun Fact</span>
            <div className='desc'>
                <p>In the past 2 years, I have lost over 100 lbs!!</p>
            </div>
            <Divider/>
        </div>
    );
}

export default About;