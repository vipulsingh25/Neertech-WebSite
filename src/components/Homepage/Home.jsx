import React, { useEffect, useRef } from "react";
import './Home.css';
import settingbg from '../../images/homepageimg1.png';
import plantgif from '../../images/plantgif.gif';
import director from '../../images/director.jpg';
import { FiLinkedin, FiDroplet, FiFilter, FiBarChart2, FiPackage } from 'react-icons/fi';
import { m1, m2, m3, m4, m5, teammember2, NSS, Alphion } from '../../images/image';

const services = [
  { icon: <FiDroplet />, label: "Ground & Waste Water Management", id: "box1" },
  { icon: <FiFilter />,  label: "Filtration Technology",           id: "box2" },
  { icon: <FiBarChart2 />, label: "Water Quality Analysis",        id: "box3" },
  { icon: <FiPackage />, label: "Food Preservation",               id: "box5" },
];

const partners = [m1, m2, m3, m4, m5, NSS, Alphion];

const team = [
  { img: director,      name: "Dr. Somak Chatterjee", role: "CEO & Founding Director" },
  { img: teammember2,   name: "Ankit Pal",             role: "Core Member" },
];

/* ── tiny scroll-reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealBox({ className, children, delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-box ${className || ''}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  );
}

function Home() {
  return (
    <>
      {/* ══ HERO ══ */}
      <div className="main-section">
        <div className="container">
          <div className="home-caption">
            <div className="caption-tag">Water · Environment · Innovation</div>
            <div className="caption-text">
              <h3>"We have to handover the earth, the air, the land and the water to the children at least as it was handed over to us"</h3>
            </div>
            <div className="boxes">
              {services.map((s, i) => (
                <div className="service-box" id={s.id} key={s.id} style={{ '--i': i }}>
                  <span className="service-icon">{s.icon}</span>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="settingbg">
            <img id="setting" src={settingbg} alt="NeerTech hero visual" />
            <div className="hero-blob" />
          </div>
        </div>

        {/* ══ ABOUT ══ */}
        <div className="section-2">
          <div className="about-section">
            <RevealBox className="text-section" delay={0}>
              <span className="section-tag">Who We Are</span>
              <h1>Welcome to NeerTech</h1>
              <p>Our company is a leading provider of water-based consultancy services, specializing in treating and managing wastewater and groundwater through innovative technologies. Our team of experts is committed to providing customized solutions to meet the specific needs of our clients.</p>
            </RevealBox>
            <RevealBox className="about-img" delay={150}>
              <img src={plantgif} alt="Plant animation" />
            </RevealBox>
          </div>
        </div>

        {/* ══ PARTNERS ══ */}
        <div className="partners-sec">
          <RevealBox className="partners-head">
            <span className="section-tag">Trusted By</span>
            <h1>Our Partners</h1>
          </RevealBox>
          <div className="partners-track-wrap">
            <div className="partners-track">
              {[...partners, ...partners].map((src, i) => (
                <div className="partner" key={i}><img src={src} alt={`Partner ${i}`} /></div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ TEAM ══ */}
        <div className="section-3">
          <RevealBox className="head-sec3">
            <span className="section-tag">The People</span>
            <h1>Meet Our Team</h1>
          </RevealBox>
          <div className="team-frame">
            {team.map((member, i) => (
              <RevealBox className={`frame${i + 1} team-card`} delay={i * 120} key={member.name}>
                <div className="team-img1">
                  <img src={member.img} alt={member.name} />
                  <div className="team-img-ring" />
                </div>
                <div className="team-del">
                  <h1>{member.name}</h1>
                  <h2>{member.role}</h2>
                  <div className="social-team">
                    <a href="#" aria-label="LinkedIn"><FiLinkedin className="size" /></a>
                  </div>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
