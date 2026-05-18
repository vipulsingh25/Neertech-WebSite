// import React from 'react';
// import './Gallery.css';
// import Logo from '../../images/NeerTechlogo.png';
// import {g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11} from '../../images/image';

// function Gallery(){
//     return (
//         <>
//             {/* <div className='gallery-sec1'>
//                 <div className='page-title'><h1>Gallery</h1></div>
//             </div> */}
//             <div className='gallery-sec2'>
//                 <div className='gsec'>
//                     <div className='g1'><img src={g1}></img></div>
//                     <div className='g1'><img src={g2}></img></div>
//                     <div className='g1'><img src={g3}></img></div>
//                     <div className='g1'><img src={g4}></img></div>
//                     <div className='g1'><img src={g5}></img></div>
//                     <div className='g1'><img src={g6}></img></div>
//                     <div className='g1'><img src={g7}></img></div>
//                     <div className='g1'><img src={g8}></img></div>
//                     <div className='g1'><img src={g9}></img></div>
//                     <div className='g1'><img src={g10}></img></div>
//                     <div className='g1'><img src={g11}></img></div>
//                 </div>                
//             </div>

//         </>
//     );
// }

// export default Gallery;

import React, { useState } from 'react';
import './Gallery.css';
import { g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11 } from '../../images/image';

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11];

function Gallery() {
    const [lightbox, setLightbox] = useState(null);

    const openLightbox = (index) => setLightbox(index);
    const closeLightbox = () => setLightbox(null);
    const prevImage = (e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); };
    const nextImage = (e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); };

    return (
        <>
            <div className="gallery-header">
                <div className="gallery-header-inner">
                    <span className="gallery-label">Our Work</span>
                    <h1 className="gallery-title">Gallery</h1>
                    <p className="gallery-subtitle">A curated collection of our projects and milestones</p>
                </div>
                <div className="gallery-header-line" />
            </div>

            <div className="gallery-sec2">
                <div className="gsec">
                    {images.map((img, index) => (
                        <div
                            className="g1"
                            key={index}
                            onClick={() => openLightbox(index)}
                            style={{ '--delay': `${index * 60}ms` }}
                        >
                            <div className="g1-inner">
                                <img src={img} alt={`Gallery image ${index + 1}`} />
                                <div className="g1-overlay">
                                    <span className="g1-zoom">&#x2316;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightbox !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>&#x2715;</button>
                    <button className="lightbox-arrow lightbox-prev" onClick={prevImage}>&#8592;</button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={images[lightbox]} alt={`Gallery image ${lightbox + 1}`} />
                        <span className="lightbox-counter">{lightbox + 1} / {images.length}</span>
                    </div>
                    <button className="lightbox-arrow lightbox-next" onClick={nextImage}>&#8594;</button>
                </div>
            )}
        </>
    );
}

export default Gallery;

