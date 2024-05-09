import React from 'react';
import './Services.css';
import plantgif from '../../images/lott_animation_home.gif';

import {p11,p12,p21,p31,p41} from '../../images/image';

function Services(){
    return (
        <>
            <div className='service-section'>
                <div className='service-sec1'>
                    <div className='service-title'>
                        <h1>Services</h1>
                        <p>At our company, we are dedicated to providing innovative and sustainable solutions in the fields of waste water consultancy, membrane technology. Our goal is to help our clients meet their specific needs and requirements while making a positive impact on the environment and the communities we serve.</p>
                    </div>
                    <div className='add-gif'>
                        <img src={plantgif}></img>
                    </div>
                </div>

                <div className='service-sec2'>
                    <div className='service-prototype'>
                        <h1>Current Prototypes</h1>
                        <div className='proto1'>
                            <h3>Heavy Metal Ions Detection Sensors</h3>
                            <div>
                                <img src={p11}></img>
                                <img src={p12}></img>
                            </div>
                        </div>
                        <div className='proto2'>
                            <h3>Fluoride and Water Contaminant Removal Filters</h3>
                            <div>
                                <img src={p21}></img>
                            </div>
                        </div>
                        <div className='proto3'>
                            <h3>Hollow Fibers for Wastewater Filtration</h3>
                            <div>
                                <img src={p31}></img>
                            </div>
                        </div>
                        <div className='proto4'>
                            <h3>Flat Sheet Composite Membranes</h3>
                            <div>
                                <img src={p41}></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='service-sec3'>
                    <div className='service-services'>
                        <h1>Consultancy Services that we offer</h1>
                        <div className='consult1'>
                            <h3>Wastewater Treatment and Management</h3>
                            <div>
                                <ul>
                                    <li>Customized solutions to meet specific ground water and waste water management needs.</li>
                                    <li>Experienced team of experts in ground water and waste water treatment and management.</li>
                                    <li>Cost-effective and sustainable ground water and waste water treatment options.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='consult2'>
                            <h3>Filtration Technology</h3>
                            <div>
                                <ul>
                                    <li>Wide range of high-quality membranes and adsorbents for food quality and desalination.</li>
                                    <li>Efficient and effective solutions for clients in various industries.</li>
                                    <li>Latest technology and innovative solutions.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='consult3'>
                            <h3>Water Quality Assesement</h3>
                            <div>
                                <ul>
                                    <li>Accurate and comprehensive reporting on ground water and waste water quality.</li>
                                    <li>Testing and analysis of ground water and waste water to identify pollutants and contaminants.</li>
                                    <li>Recommendations for ground water and waste water treatment based on test results.</li>
                                </ul>
                            </div>
                        </div>



                        <div className='consult5'>
                            <h3>Food Preservation</h3>
                            <div>
                                <ul>
                                    <li>Fibroin based electrospun coating for food preservation</li>
                                    <li>Long shelf life of food</li>
                                    <li>Minimizing food loss</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
