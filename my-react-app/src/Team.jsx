/*
import React from 'react';
import './Team.css';
import andrea from "./assets/andrea.png";
import brooke from "./assets/brooke.png";
import ayda from "./assets/ayda.png";
import carolina from "./assets/carolina.png";
import dylan from "./assets/dylan.png";
import sophia from "./assets/sophia.png";
import brynn from "./assets/brynn.png";
import lucia from "./assets/lucia.png";
import kara from "./assets/kara.png";
import izzy from "./assets/izzy.png";
import sadie from "./assets/sadie.png";
import filler from "./assets/filler.png";



const Team = () => {
  return (
    <div>
      <h2 className="board">WiCS 2023-2024 Board</h2>
      <p className="boardTitle"> This year's board of coordinators at Notre Dame who organize and lead events and activites for the students. </p>
      <div className="grid-container3">
        <div className="boardPicture">
          <img src={andrea} alt="Andrea Picture" />
          <p className="name">Andrea Turner</p>
          <p className="position">Co-President</p>
        </div>
        <div className="boardPicture">
          <img src={brooke}  alt="Brooke Picture" />
          <p className="name">Brooke Mackey</p>
          <p className="position">Co-President</p>
        </div>
        <div className="boardPicture">
        <img src={ayda}  alt="Ayda Picture" />
        <p className="name">Ayda Varela</p>
        <p className="position">Vice President</p>
        </div>
        <div className="boardPicture">
          <img src={carolina}  alt="Carolina Picture" />
          <p className="name">Carolina Carpenetti</p>
          <p className="position">Secretary</p>
        </div>
      </div>
      <div className="grid-container3">
        <div className="boardPicture">
          <img src={dylan}  alt="Dylan Picture" />
          <p className="name">Dylan Vonderhorst</p>
          <p className="position">Girls Who Code Coordinator</p>
        </div>
        <div className="boardPicture">
          <img src={sophia}  alt="Sophia Picture" />
          <p className="name">Sophia Noonan</p>
          <p className="position">Apparel Coordinator</p>
        </div>
        <div className="boardPicture">
          <img src={brynn}  alt="Brynn Picture" />
          <p className="name">Brynn Johnson</p>
          <p className="position">Volunteer Coordinator - Riley High School</p>
        </div>
        <div className="boardPicture">
          <img src={lucia}  alt="Lucia Picture" />
          <p className="name">Lucia Raciti</p>
          <p className="position">Volunteer Coordinator - Riley High School</p>
        </div>
      </div>
      <div className="grid-container3">
        <div className="boardPicture">
          <img src={kara}  alt="Kara Picture" />
          <p className="name">Kara Clouse</p>
          <p className="position">Social Events Coordinator</p>
        </div>
        <div className="boardPicture">
          <img src={izzy}  alt="Izzy Picture" />
          <p className="name">Izzy Molnar</p>
          <p className="position">Volunteer Coordinator - Adams High School</p>
        </div>
        <div className="boardPicture">
          <img src={filler}  alt="Filler Picture" />
          <p className="name">Samara Jacobo</p>
          <p className="position">Volunteer Coordinator - Adams High School</p>
        </div>
        <div className="boardPicture">
          <img src={sadie}  alt="Sadie Picture" />
          <p className="name">Sadie Kho</p>
          <p className="position">Website Coordinator</p>
        </div>
      </div>
      <div className="footer">
        @ 2024 University of Notre Dame Women in CS
      </div>
    </div>
  );
};

export default Team;


// Team.jsx
// Team.jsx
import React, { useEffect, useRef } from 'react';
import './Team.css';
import andrea from "./assets/andrea.png";
import brooke from "./assets/brooke.png";
import ayda from "./assets/ayda.png";
import carolina from "./assets/carolina.png";
import dylan from "./assets/dylan.png";
import sophia from "./assets/sophia.png";
import brynn from "./assets/brynn.png";
import lucia from "./assets/lucia.png";
import kara from "./assets/kara.png";
import izzy from "./assets/izzy.png";
import sadie from "./assets/sadie.png";
import filler from "./assets/filler.png";

const Team = () => {
  const boardPictureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    boardPictureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      boardPictureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <h2 className="board">WiCS 2023-2024 Board</h2>
      <p className="boardTitle">This year's board of coordinators at Notre Dame who organize and lead events and activities for the students.</p>
      <div className="grid-container3">
        {[andrea, brooke, ayda, carolina].map((img, index) => (
          <div className="boardPicture" key={index} ref={el => boardPictureRefs.current[index] = el}>
            <img src={img} alt={`Picture ${index}`} />
            <p className="name">{['Andrea Turner', 'Brooke Mackey', 'Ayda Varela', 'Carolina Carpenetti'][index]}</p>
            <p className="position">{['Co-President', 'Co-President', 'Vice President', 'Secretary'][index]}</p>
          </div>
        ))}
      </div>
      <div className="grid-container3">
        {[dylan, sophia, brynn, lucia].map((img, index) => (
          <div className="boardPicture" key={index + 4} ref={el => boardPictureRefs.current[index + 4] = el}>
            <img src={img} alt={`Picture ${index + 4}`} />
            <p className="name">{['Dylan Vonderhorst', 'Sophia Noonan', 'Brynn Johnson', 'Lucia Raciti'][index]}</p>
            <p className="position">{['Girls Who Code Coordinator', 'Apparel Coordinator', 'Volunteer Coordinator - Riley High School', 'Volunteer Coordinator - Riley High School'][index]}</p>
          </div>
        ))}
      </div>
      <div className="grid-container3">
        {[kara, izzy, filler, sadie].map((img, index) => (
          <div className="boardPicture" key={index + 8} ref={el => boardPictureRefs.current[index + 8] = el}>
            <img src={img} alt={`Picture ${index + 8}`} />
            <p className="name">{['Kara Clouse', 'Izzy Molnar', 'Samara Jacobo', 'Sadie Kho'][index]}</p>
            <p className="position">{['Social Events Coordinator', 'Volunteer Coordinator - Adams High School', 'Volunteer Coordinator - Adams High School', 'Website Coordinator'][index]}</p>
          </div>
        ))}
      </div>
      <div className="footer">
        @ 2024 University of Notre Dame Women in CS
      </div>
    </div>
  );
};

export default Team;
*/
import React, { useEffect, useRef } from 'react';
import './Team.css';
import andrea from "./assets/andrea.png";
import brooke from "./assets/brooke.png";
import ayda from "./assets/ayda.png";
import carolina from "./assets/carolina.png";
import dylan from "./assets/dylan.png";
import sophia from "./assets/sophia.png";
import brynn from "./assets/brynn.png";
import lucia from "./assets/lucia.png";
import kara from "./assets/kara.png";
import izzy from "./assets/izzy.png";
import sadie from "./assets/sadie.png";
import filler from "./assets/filler.png";

const Team = () => {
  const boardPictureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    boardPictureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      boardPictureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <h2 className="board">WiCS 2023-2024 Board</h2>
      <p className="boardTitle">This year's board of coordinators at Notre Dame who organize and lead events and activities for the students.</p>
      <div className="grid-container3">
        {[andrea, brooke, ayda, carolina].map((img, index) => (
          <div className="boardPicture" key={index} ref={el => boardPictureRefs.current[index] = el}>
            <img src={img} alt={`Picture ${index}`} />
            <p className="name">{['Andrea Turner', 'Brooke Mackey', 'Ayda Varela', 'Carolina Carpenetti'][index]}</p>
            <p className="position">{['Co-President', 'Co-President', 'Vice President', 'Secretary'][index]}</p>
          </div>
        ))}
      </div>
      <div className="grid-container3">
        {[dylan, sophia, brynn, lucia].map((img, index) => (
          <div className="boardPicture" key={index + 4} ref={el => boardPictureRefs.current[index + 4] = el}>
            <img src={img} alt={`Picture ${index + 4}`} />
            <p className="name">{['Dylan Vonderhorst', 'Sophia Noonan', 'Brynn Johnson', 'Lucia Raciti'][index]}</p>
            <p className="position">{['Girls Who Code Coordinator', 'Apparel Coordinator', 'Volunteer Coordinator - Riley High School', 'Volunteer Coordinator - Riley High School'][index]}</p>
          </div>
        ))}
      </div>
      <div className="grid-container3">
        {[kara, izzy, filler, sadie].map((img, index) => (
          <div className="boardPicture" key={index + 8} ref={el => boardPictureRefs.current[index + 8] = el}>
            <img src={img} alt={`Picture ${index + 8}`} />
            <p className="name">{['Kara Clouse', 'Izzy Molnar', 'Samara Jacobo', 'Sadie Co'][index]}</p>
            <p className="position">{['Social Events Coordinator', 'Volunteer Coordinator - Adams High School', 'Volunteer Coordinator - Adams High School', 'Website Coordinator'][index]}</p>
          </div>
        ))}
      </div>
      <div className="footer">
        @ 2024 University of Notre Dame Women in CS
      </div>
    </div>
  );
};

export default Team;
