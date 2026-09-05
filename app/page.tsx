import { ArrowDown, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import profile from '../data/profile.json';

type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  links: { label: string; url: string }[];
  shortVenue?: string;
  summary?: string;
  thumbnail?: { src: string; alt: string; source: string; portrait?: boolean };
};
function Authors({ names }: { names: string }) {
  const parts = names.split('Soyeon Kim');
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <strong>Soyeon Kim</strong>}
          {part}
        </span>
      ))}
    </>
  );
}
function Publication({ paper }: { paper: Paper }) {
  const paperLink = paper.links.find((link) => link.label === 'Paper')?.url;
  const preview = paper.thumbnail ? (
    <img
      src={paper.thumbnail.src}
      className={paper.thumbnail.portrait ? 'paper-image-portrait' : undefined}
      alt={paper.thumbnail.alt}
      width={360}
      height={260}
      loading="lazy"
      decoding="async"
    />
  ) : null;
  return (
    <article className="publication">
      {!paper.thumbnail ? (
        <div
          className="paper-thumbnail paper-thumbnail-empty"
          aria-hidden="true"
        />
      ) : paperLink ? (
        <a
          className="paper-thumbnail"
          href={paperLink}
          aria-label={`Read ${paper.title}`}
        >
          {preview}
        </a>
      ) : (
        <div className="paper-thumbnail">{preview}</div>
      )}
      <div className="paper-body">
        <h3>
          {paperLink ? <a href={paperLink}>{paper.title}</a> : paper.title}
        </h3>
        <p className="authors">
          <Authors names={paper.authors} />
        </p>
        <p className="publication-venue">{paper.venue}</p>
        {paper.links.length > 0 && (
          <div className="paper-links">
            {paper.links.map((link) => (
              <a href={link.url} key={link.label}>
                {link.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        )}
        {paper.summary && <p className="paper-summary">{paper.summary}</p>}
      </div>
    </article>
  );
}
const researchAreas = [
  {
    number: '01',
    title: 'Explainable & trustworthy AI',
    copy: 'Feature attribution, concept discovery, and faithful explanations of deep learning models.',
    href: '#publications',
  },
  {
    number: '02',
    title: 'Weather intelligence',
    copy: 'Interpretable forecasting, weather AI agents, and multimodal meteorological reasoning.',
    href: 'https://kmetbench.github.io/',
  },
  {
    number: '03',
    title: 'Environmental systems',
    copy: 'Geospatial analysis and ecosystem services for evidence-based planning and policy.',
    href: '#experience',
  },
];
const selectedAwards = [
  [
    '2026',
    'ACM SIGKDD Artifact Badge',
    'Spectral Integrated Gradients · KDD Artifact Badging',
  ],
  [
    '2026',
    'Compute Transparency Champion Award',
    'CVPR Compute Reporting Initiative',
  ],
  ['2023', 'Best Paper Award', 'Korea Computer Congress'],
  ['2019', 'Outstanding Master’s Thesis Award', 'Seoul National University'],
  ['2018', 'Young Scholar Award', 'Esri User Conference'],
];
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="wordmark"
          href="#about"
          aria-label="Soyeon Kim, back to top"
        >
          SK<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
          <a className="nav-cv" href="/Soyeon_Kim_CV.pdf">
            CV <ArrowUpRight size={13} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="intro section" id="about">
          <div className="intro-main">
            <p className="eyebrow">EXPLAINABLE AI · WEATHER INTELLIGENCE</p>
            <h1>
              Soyeon Kim<span className="name-dot">.</span>
            </h1>
            <div className="bio">
              <p>
                I am a Ph.D. candidate in the Kim Jaechul Graduate School of
                Artificial Intelligence at{' '}
                <a href="https://gsai.kaist.ac.kr/">KAIST</a>, advised by{' '}
                <a href="https://sailab.kaist.ac.kr/">Prof. Jaesik Choi</a>, and
                a Principal Researcher at INEEJI.
              </p>
              <p>
                My research connects{' '}
                <strong>explainable and trustworthy AI</strong> with weather and
                environmental systems. I work on feature attribution,
                interpretable forecasting, and reliable AI tools for scientific
                decision-making.
              </p>
              <p>
                With a background in landscape architecture and ecosystem
                services, I bring an environmental perspective to AI research.
              </p>
            </div>
            <div className="social-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={15} /> Email
              </a>
              {profile.profileLinks.map((link) => (
                <a href={link.url} key={link.label}>
                  {link.label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
          <aside
            className="profile-photo"
            aria-label="Soyeon Kim’s profile photo"
          >
            <img
              className="portrait"
              src="/images/soyeon-kim.jpg"
              alt="Soyeon Kim"
              width={2200}
              height={3048}
              fetchPriority="high"
            />
            <p className="location">
              <MapPin size={14} /> Seongnam, South Korea
            </p>
            <a className="cv-download" href="/Soyeon_Kim_CV.pdf" download>
              Download CV <ArrowDown size={14} />
            </a>
          </aside>
        </section>
        <section
          className="research-interests"
          id="research"
          aria-label="Research interests"
        >
          {researchAreas.map((area) => (
            <a className="research-area" href={area.href} key={area.number}>
              <span className="area-number">{area.number}</span>
              <h2>
                {area.title}
                <ArrowUpRight size={15} />
              </h2>
              <p>{area.copy}</p>
            </a>
          ))}
        </section>
        <section className="section research-section" id="publications">
          <div className="section-heading">
            <div>
              <p className="eyebrow">RESEARCH</p>
              <h2>Publications</h2>
            </div>
            <span className="section-aside">2016–2026</span>
          </div>
          <div className="publication-list">
            {profile.publications.map((paper) => (
              <Publication paper={paper} key={paper.title} />
            ))}
          </div>
          <div className="manuscripts">
            <h3 className="subsection-title">Manuscripts under review</h3>
            {profile.underReview.map((paper) => (
              <Publication paper={paper} key={paper.title} />
            ))}
          </div>
        </section>
        <section className="section background-section" id="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BACKGROUND</p>
              <h2>Research across disciplines</h2>
            </div>
          </div>
          <div className="background-grid">
            <div>
              <h3 className="subsection-title">Experience</h3>
              {profile.experience.map((item, i) => (
                <article className="timeline-item" key={item.organization}>
                  <p className="dates">{item.dates.replaceAll(' - ', ' – ')}</p>
                  <h4>{item.role}</h4>
                  <p className="institution">{item.organization}</p>
                  <p className="timeline-detail">
                    {i === 0
                      ? 'Meteorological AI, weather agents, multimodal evaluation, and forecasting support systems.'
                      : i === 1
                        ? 'Ecosystem service evaluation and mapping; citizen and expert surveys for environmental policy.'
                        : 'Smart-city and regulatory-sandbox research for national land policy.'}
                  </p>
                </article>
              ))}
            </div>
            <div>
              <h3 className="subsection-title">Education</h3>
              {profile.education.map((item) => (
                <article className="timeline-item" key={item.institution}>
                  <p className="dates">{item.dates.replaceAll(' - ', ' – ')}</p>
                  <h4>{item.degree}</h4>
                  <p className="institution">{item.institution}</p>
                  <p className="timeline-detail">
                    Advisor: {item.advisor}
                    {item.honors && (
                      <>
                        <br />
                        <span className="honor">
                          Summa Cum Laude
                          {item.thesis &&
                            ' · Outstanding Master’s Thesis Award'}
                        </span>
                      </>
                    )}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section community-section" id="service">
          <div className="community-grid">
            <div>
              <p className="eyebrow">RECOGNITION</p>
              <h2>Selected honors</h2>
              <ul className="award-list">
                {selectedAwards.map(([year, title, detail]) => (
                  <li key={title}>
                    <span className="dates">{year}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-block">
              <p className="eyebrow">ACADEMIC COMMUNITY</p>
              <h2>Professional service</h2>
              <h3>Conference / ARR reviewer or subreviewer</h3>
              <p>
                NeurIPS (2023, 2025), ICLR (2023), UAI (2024), ACML (2024), ACL
                ARR (2025), SIGKDD (2026)
              </p>
              <h3>Journal reviewer</h3>
              <p>
                IEEE Transactions on Neural Networks and Learning Systems (2020)
              </p>
              <a className="text-link" href="/Soyeon_Kim_CV.pdf">
                Full CV, including presentations <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 Soyeon Kim</span>
        <span>Last updated September 2026</span>
        <a href="#about">Back to top ↑</a>
      </footer>
    </>
  );
}
