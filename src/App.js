import React from 'react';
import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <React.Fragment>
      <SideBar/>
      <Introduction/>
      <About/>
      <Projects />
    </React.Fragment>
  );
}

export default App;
