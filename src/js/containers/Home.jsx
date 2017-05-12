import React from 'react';

import Add from '../components/Add/';
import Projects from '../components/Projects';

const Home = () => (
  <section>
    <p className='header-text'>The Devine Project Manager helps you to keep track of your projects at a glance. See when the deadlines come closer. You can also store anything you want in notes. For example the questions you want to ask on consult, your personal to-dos, feedback,...</p>
    <Add />
    <Projects />
  </section>
);


export default Home;
