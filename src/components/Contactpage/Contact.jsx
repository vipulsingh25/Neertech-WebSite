import React, { useRef } from 'react';
import './Contact.css';
import { FiPhone,FiMail,FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_h1hoe1k', 'template_orml5fs', form.current, 'meiBp0gNCfOolFi5V')
        .then((result) => {
            
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
            {/* <div className='contact-sec1'>
                <div className='contact-title'><h1>Contact Us</h1></div>
            </div> */}
            <div className='contact-sec2'>
                <div className='contact-area'>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" id="first-name" name="first-name" placeholder="First Name:" required></input>
                            <input type="text" id="last-name" name="last-name" placeholder="Last Name:" required></input>
                            <br/>
                            <input type="tel" id="phone" name="phone" placeholder="Contact No." required></input>
                            <input type="email" id="email" name="email" placeholder="Email Id" required></input>
                            <br/>
                            <textarea id="message" name="message" placeholder="Message" required></textarea>
                            <br/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className='contact-map'>
                        <div className='cont1'>
                            <ul>
                                <li><i><FiPhone/></i>9641350464 / 7455824624</li>
                                <li><i><FiMail/></i>neertech2023@gmail.com</li>
                                <li><i><FiMapPin/></i>3RD-FLOOR, FLAT-3A, 14, ISWAR GANGULY STREET, KALIGHAT KOLKATA WB 700026 IN</li>
                            </ul>
                        </div>
                        <div className='cont2'>
                            <h3>Registered Office</h3>
                            <iframe title='map1' className='map-sec' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7371.204273001442!2d88.345823!3d22.519106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027734554eb3f5%3A0x331ff6094af42bf8!2s14%2C%20Iswar%20Ganguly%20St%2C%20Anami%20Sangha%2C%20Kalighat%2C%20Kolkata%2C%20West%20Bengal%20700026%2C%20India!5e0!3m2!1sen!2sus!4v1685099679183!5m2!1sen!2sus"></iframe>
                        </div>
                        <div className='cont2'>
                            <h3>Laboratory <span>(Pilani Innovation and Entrepreneurship Development Society (PIEDS), BITS Pilani, Pilani, Rajasthan-333031)</span></h3>
                            <iframe title='map2' className='map-sec' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6527.918886795493!2d75.589797!3d28.364487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391319624c81efff%3A0x459fc7256d991a6f!2sDepartment%20Of%20Chemical%20Engineering!5e1!3m2!1sen!2sus!4v1685178881285!5m2!1sen!2sus"></iframe>                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;