import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero({ personalInfo, scrollToSection }) {
  if (!personalInfo) return null;

  return (
    <section id="home" className="hero-section">
      <div className="hero-content ui-interactive">
        <div className="badge glass-panel">
          <Terminal size={16} className="primary-color" />
          <span>Xush kelibsiz mening olamimga</span>
        </div>
        
        <h1 className="hero-title">
          Salom, Men <br />
          <span className="neon-text-primary">{personalInfo.name}</span>
        </h1>
        
        <h2 className="hero-subtitle">
          {personalInfo.title}
        </h2>
        
        <p className="hero-description">
          ITLIVE ACADEMY o'quvchisi. 15 yoshli g'ayratli dasturchi sifatida .NET ekotizimida yuqori sifatli backend xizmatlarini ishlab chiqaman.
        </p>
        
        <div className="hero-buttons">
          <button 
            className="btn-primary" 
            onClick={() => scrollToSection('projects')}
          >
            Loyihalarimni ko'rish <ArrowRight size={18} />
          </button>
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Bog'lanish
          </button>
        </div>
      </div>

      <style jsx="true">{`
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-height: 100vh;
          position: relative;
        }
        
        .hero-content {
          max-width: 700px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1rem;
          width: fit-content;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent);
          border-radius: 30px;
        }

        .primary-color {
          color: var(--primary);
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.1;
          color: #fff;
        }

        .hero-subtitle {
          font-size: clamp(1.25rem, 3vw, 2rem);
          font-weight: 500;
          color: var(--accent);
          background: linear-gradient(90deg, var(--accent), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 550px;
          margin-bottom: 1rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 10rem;
          }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary, .btn-secondary {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
