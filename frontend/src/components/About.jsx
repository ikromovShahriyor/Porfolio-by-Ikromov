import { User, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function About({ personalInfo }) {
  if (!personalInfo) return null;

  return (
    <section id="about" className="about-section">
      <h2 className="section-title ui-interactive">Men Haqimda</h2>
      
      <div className="about-grid ui-interactive">
        <div className="about-card glass-panel">
          <div className="card-header">
            <User className="icon-purple" size={24} />
            <h3>Tafsilotlar</h3>
          </div>
          <div className="info-list">
            <div className="info-item">
              <User size={18} className="info-icon" />
              <div>
                <span className="info-label">Ism & Familiya</span>
                <span className="info-value">{personalInfo.name}</span>
              </div>
            </div>
            <div className="info-item">
              <Calendar size={18} className="info-icon" />
              <div>
                <span className="info-label">Yosh</span>
                <span className="info-value">15 yosh</span>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={18} className="info-icon" />
              <div>
                <span className="info-label">Joylashuv</span>
                <span className="info-value">Sirdaryo, O'zbekiston</span>
              </div>
            </div>
            <div className="info-item">
              <BookOpen size={18} className="info-icon" />
              <div>
                <span className="info-label">O'quv markaz</span>
                <span className="info-value">ITLIVE ACADEMY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bio-card glass-panel">
          <div className="card-header">
            <BookOpen className="icon-cyan" size={24} />
            <h3>Mening Hikoyam</h3>
          </div>
          <p className="bio-text">
            {personalInfo.bio}
          </p>
          <div className="education-box">
            <h4>Ta'lim & O'rganish</h4>
            <div className="education-timeline">
              <div className="timeline-item">
                <span className="timeline-date">2025 - Hozirgacha</span>
                <h5 className="timeline-title">ITLIVE ACADEMY</h5>
                <p className="timeline-desc">1+ yildan ortiq davom etgan chuqurlashtirilgan dasturlash ta'limi. C#, .NET 10, va ilg'or ma'lumotlar bazasi texnologiyalarini o'rganish va amaliy loyihalarda qo'llash.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .about-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 2rem;
          margin-top: 1rem;
        }

        .about-card, .bio-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 1rem;
        }

        .card-header h3 {
          font-size: 1.3rem;
          color: #fff;
        }

        .icon-purple {
          color: var(--primary);
        }

        .icon-cyan {
          color: var(--accent);
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .info-icon {
          color: var(--text-muted);
        }

        .info-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 1rem;
          color: #fff;
          font-weight: 500;
        }

        .bio-text {
          font-size: 1.05rem;
          color: var(--text-main);
          line-height: 1.7;
        }

        .education-box {
          margin-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.5rem;
        }

        .education-box h4 {
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 1rem;
        }

        .education-timeline {
          position: relative;
          padding-left: 1.5rem;
          border-left: 2px solid rgba(147, 51, 234, 0.2);
        }

        .timeline-item {
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: calc(-1.5rem - 6px);
          top: 4px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--primary);
          box-shadow: 0 0 8px var(--primary);
        }

        .timeline-date {
          display: inline-block;
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .timeline-title {
          font-size: 1rem;
          color: #fff;
          margin-bottom: 0.3rem;
        }

        .timeline-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
