import React from 'react';
import {Image, Menu, Divider} from 'semantic-ui-react';
import SideBarItem from './SideBarItem/SideBarItem';
import profilepic from '../../assets/images/profilepic.jpg';
import './SideBar.scss';

export class SideBar extends React.Component {
    render() {
        return (
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
                <Image className='author-img' src={profilepic}/>
                <div className='name' align='center'>Lap Chung</div>
                <SideBarItem label='lapchung12@gmail.com' icon='envelope outline'/>
                <SideBarItem label='(404) 483 4687' icon='mobile'/>                
                <Divider />
                <SideBarItem icon='github' label={<a href='https://github.com/LapChung' target="_blank" rel="noopener noreferrer">GitHub</a>}/>
                <SideBarItem icon='facebook'label={<a href='https://www.facebook.com/lap.chung.357' target="_blank" rel="noopener noreferrer">Facebook</a>}/>
                <SideBarItem icon='instagram' label={<a href='https://www.instagram.com/_lchung/' target="_blank" rel="noopener noreferrer">Instagram</a>}/>
                <SideBarItem icon='linkedin' label={<a href='https://www.linkedin.com/in/chung12' target="_blank" rel="noopener noreferrer">Linkedin</a>}/>
                <h1 className='h1'>More goood things to come!</h1>
            </Menu>
        );
    }
}

export default SideBar;

