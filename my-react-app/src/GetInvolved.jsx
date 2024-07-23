
import React from 'react';
import './GetInvolved.css';

const GetInvolved = () => {
  return (
    <div className="App">
      <h1>Get Involved</h1>
      <p>
        Are you enthusiastic about promoting inclusivity in the tech field? Do you aspire to 
        contribute to the growth of the University of Notre Dame’s Women in Computer Science (WiCS) community? 
        Whether you're new to computer science or already familiar with Notre Dame WiCS, we welcome you to join 
        our community!
      </p>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfmVD_8VUx7oO1qVVldglUC9iDZZO-fiOwbdwuRU_JZALQD2g/viewform?embedded=true" 
        width="640" 
        height="1173" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
        title="Get Involved Form"
      >
        Loading…
      </iframe>
      <div className="footer">
        @ 2024 University of Notre Dame Women in CS
      </div>
    </div>
    
  );
};

export default GetInvolved;



