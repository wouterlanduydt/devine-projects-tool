import React from 'react';

import {Link} from 'react-router-dom';

const Projects = () => {
  return (
    <ul>
      <li>
        <p className='project-title'><strong>Appnormal consult is TOMORROW, and there are THREE DAYS left until the deadline.</strong></p>
        <p className='project-notes'>Dit zijn notities over de Appnormal opdracht. Zoals todos of feedback van op consult momenten.</p>
        <Link to={`/edit`}>
          <p>Edit</p>
        </Link>
      </li>
    </ul>
  );
};

export default Projects;
