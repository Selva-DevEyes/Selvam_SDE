'use client';
import { useState } from 'react';
import Image from 'next/image';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { ArrowUpRight, Mail, MapPin, Menu, X, Code2, Braces, Database, Globe, Check, Copy, FileText } from 'lucide-react';
import { PORTFOLIO_DATA as data } from '@/data/portfolioData';
const filters = ['All work', 'Python & APIs', 'WordPress'] as const;
const titles: Record<string, string> = {
    'proj-javamaster': 'Java Master. From build to launch.',
    'proj-godaddy-corporate-wordpress': 'Websites built for the real world.',
    'proj-wowcodes-lms': 'A better way to learn to code.',
    'proj-woocommerce-custom': 'Commerce, with less friction.',
    'proj-fastapi-ai': 'From raw data to useful APIs.',
    'proj-python-sql-analytics': 'Making messy data make sense.',
};
export default function Home() {
    const [filter, setFilter] = useState<string>('All work');
    const [menuOpen, setMenuOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [copyError, setCopyError] = useState(false);
    const projects = data.projects.filter(p => filter === 'All work' || (filter === 'WordPress' ? p.category === 'wordpress' : p.category === 'python-ai'));
    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(data.personal.email);
            setCopied(true);
            setCopyError(false);
            window.setTimeout(() => setCopied(false), 2500);
        }
        catch {
            setCopyError(true);
        }
    }
    return (<div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header"><div className="shell nav-inner">
        <a className="wordmark" href="#home" aria-label="Selvam home"><span className="brand-mark">s<span>.</span></span> selvam<span className="muted">/ dev</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {['Work', 'About', 'Experience', 'Skills'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div></header>
      <main id="main">
        <section id="home" className="shell hero-section">
          <div className="hero-copy"><span className="availability"><i /> Open to opportunities</span>
            <p className="eyebrow hero-intro">HEY, I’M SELVAM S <span>↗</span></p>
            <h1>Thoughtful code.<br />Real-world <span className="lime">impact.</span></h1>
            <p className="hero-description">A web developer who connects great interfaces with the engineering behind them. From production WordPress websites to Python APIs and full-stack applications.</p>
            <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowUpRight size={19}/></a><a className="text-link" href="/resumes/wordpress-developer">View résumé <FileText size={17}/></a></div>
            <div className="hero-footnote"><MapPin size={14}/> Tirunelveli, India <span className="tiny-divider"/> Building for the web, everywhere.</div>
          </div>
          <div className="portrait-composition"><div className="portrait-frame"><div className="portrait-grid"/><span className="portrait-index">DEVELOPER / CREATIVE THINKER</span><Image src="/profile.jpg" alt="Selvam S, web developer" width={600} height={720} priority className="hero-portrait"/><div className="portrait-caption"><span>SELVAM S</span><span>CODE. CREATE. ITERATE.</span></div></div><div className="floating-label"><span className="code-icon"><Code2 size={23}/></span><div>Built with purpose.<small>From the first pixel to production.</small></div><span className="lime">↗</span></div><span className="portrait-orbit" aria-hidden="true">✳</span></div>
        </section>
        <section className="shell stats-strip" aria-label="Career highlights">{[data.stats[0], data.stats[1], data.stats[3]].map(stat => <div key={stat.label}><strong>{stat.value}<span>↗</span></strong><div>{stat.label}<small>{stat.description}</small></div></div>)}<div className="stats-note"><span className="lime">Built. Shipped.<br />Always improving.</span></div></section>
        <section id="work" className="shell section-block"><div className="section-heading"><div><p className="eyebrow"><span>01 /</span> SELECTED WORK</p><h2>Less talk. More <span className="serif">building.</span></h2></div><a className="text-link" href={data.personal.githubUrl} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={17}/></a></div>
          <div className="project-filters" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} aria-pressed={filter === f} className={filter === f ? 'selected' : ''} onClick={() => setFilter(f)}>{f}{f === 'All work' && <span>{data.projects.length.toString().padStart(2, '0')}</span>}</button>)}</div>
          <div className="project-grid" aria-live="polite">{projects.map(project => <article className="project-card" key={project.id}>
            <div className={`project-art ${project.category === 'wordpress' ? 'art-web' : 'art-code'}`} aria-label="Illustrative project preview"><div className="art-topline"><span>{project.category === 'wordpress' ? 'WEB DESIGN & DEVELOPMENT' : 'APPLICATION DEVELOPMENT'}</span><ArrowUpRight size={21}/></div>{project.category === 'wordpress' ? <div className="browser-mock"><div className="browser-toolbar"><i /><i /><i /><span>{project.id === 'proj-javamaster' ? 'javamaster.com / client website' : project.id.includes('commerce') ? 'commerce / experience' : 'woodward / consulting'}</span></div><div className="web-mock-content"><span>{project.id === 'proj-javamaster' ? 'JAVA MASTER.' : project.id.includes('commerce') ? 'THE EVERYDAY COLLECTION' : 'WOODWARD.'}</span><div>{project.id === 'proj-javamaster' ? 'Crafted for coffee.\nBuilt for business.' : project.id.includes('commerce') ? 'Good things.\nSimply found.' : 'A clear vision.\nA stronger business.'}</div><small>Thoughtfully designed. Built to perform. ↗</small><div className="mock-pill">EXPLORE MORE ↗</div></div></div> : <div className="code-mock"><div className="code-tabs"><span /><span /><span /><small>{project.id.includes('wowcodes') ? 'wowcodes / learning platform' : 'pipeline.py'}</small></div>{project.id.includes('wowcodes') ? <div className="lms-mock"><span>WoW<span className="lime">Codes.</span></span><h3>Your next chapter<br />starts with code.</h3><div className="lms-bars"><i /><i /><i /><i /><i /></div><small>LEARN → PRACTICE → BUILD</small></div> : <pre><span className="code-purple">from</span> fastapi <span className="code-purple">import</span> FastAPI{'\n\n'}app = <span className="lime">FastAPI</span>(){'\n\n'}<span className="code-purple">@app.get</span>(<span className="code-gold">"/insights"</span>){'\n'}<span className="code-purple">async def</span> insights():{'\n'}    <span className="code-purple">return</span> {'{'}<span className="code-gold">"status"</span>: <span className="code-gold">"ready"</span>{'}'}</pre>}</div>}<span className="preview-caption">CONCEPT PREVIEW</span></div>
            <div className="project-details"><p className="project-category">{project.category === 'wordpress' ? 'WORDPRESS / PRODUCTION' : 'PYTHON / FULL-STACK'}</p><h3>{titles[project.id] || project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.slice(0, 5).map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Visit project <ArrowUpRight size={16}/></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source code <GithubIcon className="w-4 h-4"/></a>}{!project.liveUrl && !project.githubUrl && <span className="muted">Project overview</span>}</div>{project.clientUrls && <details className="client-list"><summary>Explore {project.clientUrls.length} client websites</summary><div>{project.clientUrls.map(client => <a key={client.url} href={client.url} target="_blank" rel="noreferrer">{client.name}<ArrowUpRight size={13}/></a>)}</div></details>}</div>
          </article>)}</div>
        </section>
        <section id="about" className="about-section"><div className="shell about-grid"><div><p className="eyebrow"><span>02 /</span> A LITTLE ABOUT ME</p><h2>A builder’s mindset.<br />A designer’s <span className="serif">eye.</span></h2><div className="about-signature">Selvam S<span>↗</span></div></div><div className="about-copy"><p>I turn ideas into websites people can actually use — clear, responsive, and ready for the real world.</p><p>My foundation is in web development: custom WordPress themes, e-commerce, and front-end interfaces for international clients. At vSplash Techlab, I contributed 410+ websites to GoDaddy’s client portfolio.</p><p>Today, I’m extending that experience into Python, FastAPI, SQL, and data analysis through the Masai School & IIT Patna SDE program. The goal stays the same: understand the problem, build carefully, and make the experience better.</p><a className="text-link" href={data.personal.linkedinUrl} target="_blank" rel="noreferrer">Let’s connect on LinkedIn <ArrowUpRight size={17}/></a></div></div></section>
        <section id="experience" className="shell section-block"><div className="section-heading"><div><p className="eyebrow"><span>03 /</span> THE JOURNEY</p><h2>Experience that <span className="serif">adds up.</span></h2></div><span className="section-note">A foundation in delivery.<br />An appetite for what’s next.</span></div><div className="experience-list">{[data.experiences[3], ...data.experiences.slice(0, 3), data.experiences[4]].map((exp, i) => <article className="experience-row" key={exp.id}><div className="experience-date"><span className={i === 0 ? 'timeline-dot current' : 'timeline-dot'}/>{exp.period}</div><div><span className="experience-company">{exp.company}</span><h3>{exp.role}</h3><ul>{exp.highlights.slice(0, 2).map(h => <li key={h}>{h}</li>)}</ul></div><span className="experience-number">0{i + 1}</span></article>)}</div></section>
        <section id="skills" className="shell section-block skills-section"><div className="section-heading"><div><p className="eyebrow"><span>04 /</span> MY TOOLKIT</p><h2>The right tools.<br />The right <span className="serif">outcome.</span></h2></div><p className="section-note">From interface to database,<br />here’s what I build with.</p></div><div className="skill-grid">{[{ title: 'Front-end development', icon: Braces, description: 'Interfaces that feel as good as they function.', skills: data.skills.frontend }, { title: 'Backend & data', icon: Database, description: 'The logic and structure behind the experience.', skills: data.skills.backend }, { title: 'WordPress & commerce', icon: Globe, description: 'Production websites, built around business needs.', skills: data.skills.cms }, { title: 'Workflow & quality', icon: Code2, description: 'Thoughtful delivery, from design to deployment.', skills: data.skills.tools }].map(group => <article className="skill-card" key={group.title}><group.icon size={25}/><h3>{group.title}</h3><p>{group.description}</p><div className="tag-list">{group.skills.map(skill => <span key={skill.name}>{skill.name}</span>)}</div></article>)}</div><div className="education-row"><span className="eyebrow">ALWAYS LEARNING</span>{data.certifications.map(cert => <div key={cert.title}><strong>{cert.title}</strong><span>{cert.issuer} · {cert.period}</span></div>)}</div></section>
        <section id="contact" className="shell contact-section"><span className="availability"><i /> Let’s build something worthwhile</span><h2>Your next project.<br />Our next <span className="serif lime">conversation.</span></h2><div className="contact-bottom"><div><a className="contact-email" href={`mailto:${data.personal.email}`}>{data.personal.email}<ArrowUpRight /></a><div className="contact-actions"><button onClick={copyEmail}>{copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? 'Email copied' : 'Copy email'}</button><a href={`tel:${data.personal.phonePrimary.replace(/\s/g, '')}`}>{data.personal.phonePrimary}</a></div><span className="copy-status" role="status">{copyError ? 'Please select and copy the email address above.' : copied ? 'Ready to paste into your email app.' : ''}</span></div><div className="social-links"><a href={data.personal.githubUrl} aria-label="GitHub" target="_blank" rel="noreferrer"><GithubIcon /></a><a href={data.personal.linkedinUrl} aria-label="LinkedIn" target="_blank" rel="noreferrer"><LinkedinIcon /></a><a href={`mailto:${data.personal.email}`} aria-label="Email Selvam"><Mail /></a></div></div></section>
      </main><footer className="shell site-footer"><a className="wordmark" href="#home">selvam<span className="lime">.</span></a><span>© {new Date().getFullYear()} Selvam S · Crafted with care & code.</span><a href="#home">Back to top ↑</a></footer>
    </div>);
}
