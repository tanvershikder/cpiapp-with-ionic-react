import React from 'react';
import './Footer.css'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <>
            <p className='footer'>	&copy; {year} Copy right</p>
        </>
    );
};

export default Footer;