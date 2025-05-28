import React, {useState} from 'react';
import { Link } from "react-router-dom";


export default function DropdownMenu({ open, setOpen }) {
    if (!open) return null;

    const linkStyle = {
        display: 'block', 
        padding: '8px 16px', 
        cursor: 'pointer',  
        textDecoration: 'none',
        color: 'black',
    }
    

    return (
       <div
            style={{
        position: 'fixed',
        right: 19,
        top: 60,
        background: 'white',
        border: '1px solid #ccc',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15',
        zIndex: '999',
            
    }} >
            
                <Link
                    to="/"
                     style={linkStyle}
                        onClick={() => setOpen(false)}
                        >

                        Home
                </Link>

                <Link 
                to="/planet-discovery-facility"
                style={linkStyle}
                onClick={() => setOpen(false)}
                >
                    Planet Discovery Facility
                    </Link>

                <Link
                to="/planet-orbital-period"
                style={linkStyle}
                onClick={() => setOpen(false)}
                >
                    Planet Orbital Period

                </Link>

           
                <Link 
                to="/planet-mass"
                style={linkStyle}
                    onClick={() => setOpen(false)}
                    >
                        Planet Mass
                    </Link>

        
            <Link
            to="/about-me"
            style={linkStyle}
                onClick={() => setOpen(false)}
                >
                    About Me
                    </Link>
        </div>
    );
}
