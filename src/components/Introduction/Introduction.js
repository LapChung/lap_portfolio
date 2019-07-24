import React from 'react';
import largepic from '../../assets/images/largepic.jpg';
import {Image} from 'semantic-ui-react';
import './Introduction.scss';

function Introduction() {

    return (
        <div>
            <Image className='background-img' src={largepic}></Image>
            <div className='introduction'>
                <div className='intro-name'>
                    <h1 className='name'>Hello!<br/>I'm Lap</h1>
                </div>
            </div>
        </div>
    );
}

export default Introduction;