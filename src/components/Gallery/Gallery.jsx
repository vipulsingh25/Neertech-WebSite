import React from 'react';
import './Gallery.css';
import Logo from '../../images/NeerTechlogo.png';
import {g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11} from '../../images/image';

function Gallery(){
    return (
        <>
            {/* <div className='gallery-sec1'>
                <div className='page-title'><h1>Gallery</h1></div>
            </div> */}
            <div className='gallery-sec2'>
                <div className='gsec'>
                    <div className='g1'><img src={g1}></img></div>
                    <div className='g1'><img src={g2}></img></div>
                    <div className='g1'><img src={g3}></img></div>
                    <div className='g1'><img src={g4}></img></div>
                    <div className='g1'><img src={g5}></img></div>
                    <div className='g1'><img src={g6}></img></div>
                    <div className='g1'><img src={g7}></img></div>
                    <div className='g1'><img src={g8}></img></div>
                    <div className='g1'><img src={g9}></img></div>
                    <div className='g1'><img src={g10}></img></div>
                    <div className='g1'><img src={g11}></img></div>
                </div>                
            </div>

        </>
    );
}

export default Gallery;