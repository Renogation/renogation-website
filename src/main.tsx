import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, ClipboardList, Compass, ShieldCheck, Layers3, MapPin, Mail, Menu, X, Check } from 'lucide-react';
import './style.css';

const features = [
  { icon: ClipboardList, number: '01', title: 'Plan with confidence', copy: 'Turn your renovation goals, room details, and photos into a clearer sequence of work.' },
  { icon: Layers3, number: '02', title: 'Understand materials & costs', copy: 'Explore material needs, compare options, and build more realistic early-stage budgets.' },
  { icon: MapPin, number: '03', title: 'Navigate local requirements', copy: 'Find relevant permits, professional requirements, and financing possibilities for your location.' },
  { icon: ShieldCheck, number: '04', title: 'Know when to call a pro', copy: 'Understand which decisions and tasks need qualified tradespeople and independent checks.' },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const year = new Date().getFullYear();
  return <>
    <header className="site-header"><div className="shell nav">
      <a className="brand" href="#top" aria-label="Renogation home"><span className="brand-mark"><span></span><span></span></span><span>renogation<span className="brand-dot">.</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <a onClick={() => setMenuOpen(false)} href="#why">Why Renogation</a><a onClick={() => setMenuOpen(false)} href="#approach">Our approach</a><a onClick={() => setMenuOpen(false)} href="#about">About</a>
        <a className="nav-contact" href="mailto:founder@renogation.com">Get in touch <ArrowUpRight size={15}/></a>
      </nav>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
    </div></header>
    <main id="top">
      <section className="hero shell">
        <div className="hero-copy"><div className="eyebrow"><span className="live-dot"></span> BUILDING SOMETHING BETTER FOR HOMEOWNERS</div>
          <h1>A clearer path<br/>to a <em>better home.</em></h1>
          <p className="hero-sub">Renovation is complicated. Planning it shouldn't be. We're building an AI-powered guide to help homeowners turn overwhelming projects into informed, manageable decisions.</p>
          <div className="hero-actions"><a className="btn primary" href="mailto:founder@renogation.com?subject=Hello%20Renogation">Get in touch <ArrowUpRight size={18}/></a><a className="text-link" href="#why">Explore the vision <ArrowRight size={17}/></a></div>
          <div className="hero-foot"><span className="line"></span> EARLY STAGE · IN DEVELOPMENT</div>
        </div>
        <div className="hero-visual" aria-label="Architectural illustration of a home"><div className="arch-bg"><div className="sun"></div><div className="building"><div className="building-top"></div><div className="windows"><div className="window tall"></div><div className="window tall"></div><div className="window tall"></div></div><div className="door"></div></div><div className="foreground"></div></div><div className="visual-caption"><span>FROM POSSIBILITY</span><span>TO A PLAN <ArrowUpRight size={14}/></span></div></div>
      </section>
      <section className="statement" id="why"><div className="shell statement-inner"><span className="section-kicker">THE PROBLEM</span><h2>Every home has potential.<br/><span>Getting there is the hard part.</span></h2><p>Scattered advice. Uncertain budgets. Unfamiliar regulations. Too many decisions, and no clear place to start. We think homeowners deserve a more understandable way forward.</p></div></section>
      <section className="features shell" id="approach"><div className="section-head"><div><span className="section-kicker">WHAT WE'RE BUILDING</span><h2>From first idea<br/>to informed action.</h2></div><p>One place to bring together the moving parts of a renovation, without pretending every home—or every local rule—is the same.</p></div><div className="feature-grid">{features.map(({icon: Icon,number,title,copy}) => <article className="feature" key={number}><div className="feature-top"><span className="feature-icon"><Icon size={23} strokeWidth={1.6}/></span><span className="feature-number">{number}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="features-note"><Check size={15}/> Designed to support better decisions, not replace licensed professionals or official guidance.</p></section>
      <section className="about" id="about"><div className="shell about-inner"><div className="about-art"><div className="art-frame"><Compass size={78} strokeWidth={0.8}/><div className="art-orbit"></div></div><span>RENO + NAVIGATION</span></div><div className="about-copy"><span className="section-kicker">MEET RENOGATION</span><h2>A renovation guide that starts with <em>your</em> home.</h2><p>We're exploring how AI, practical planning tools, and location-aware information can help people renovate older homes with more confidence.</p><p>Renogation is currently at an early stage. We're shaping the product around real renovation challenges, with a focus on transparency, safety, and useful guidance.</p><a className="text-link" href="mailto:founder@renogation.com?subject=Let's%20talk%20about%20Renogation">Let's talk <ArrowUpRight size={17}/></a></div></div></section>
      <section className="cta shell"><div className="cta-inner"><div><span className="section-kicker">LET'S CONNECT</span><h2>Good homes begin<br/>with better plans.</h2><p>Interested in the idea, potential collaboration, or early feedback? We'd love to hear from you.</p></div><a className="btn light" href="mailto:founder@renogation.com?subject=Hello%20Renogation"><Mail size={18}/> founder@renogation.com <ArrowUpRight size={17}/></a></div></section>
    </main>
    <footer><div className="shell footer-inner"><a className="brand" href="#top"><span className="brand-mark"><span></span><span></span></span><span>renogation<span className="brand-dot">.</span></span></a><span>© {year} Renogation. In development.</span><a href="mailto:founder@renogation.com">Contact <ArrowUpRight size={14}/></a></div></footer>
  </>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);

