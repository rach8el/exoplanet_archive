import React from 'react'
import { useState } from 'react';


function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{ fontSize: '45px', 
      textAlign: 'left',
      position: 'relative',
      left: '0',
       }}>
        Welcome!
      </div>
      <div>
      </div>
      <hr />
      <div style={{
        fontSize: '25px',
        textAlign: 'left',
        position: 'fixed',
        left: 30,
      }}>
        <b>Welcome</b> to Exoplanet Archive! This is an interactive web application designed to organize the data in <b>NASA’s own exoplanet archive!</b>
      </div>
      <div style={{
        fontSize: '40px',
        textAlign: 'justify',
        position: 'fixed',
        left: 10,
        bottom: 12,
      }}>
        <hr />
        NASA's Exoplanet Archive
      </div>
      <div style={{
        fontSize: '25px',
        textAlign: 'right',
        position: 'fixed',
        left: 230,
        bottom: 110,
      }}>
        Using this application, you can find information about all of the exoplanets NASA has collected data on, whether it be the name, mass, or orbital period of a planet!
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/3D_Saturn.png"
        height="80"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 113,
        }}></img>
    </div>
  );
}

export default Home
