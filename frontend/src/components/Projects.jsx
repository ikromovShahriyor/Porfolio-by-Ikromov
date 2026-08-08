import { ExternalLink, CheckCircle } from 'lucide-react';

const Github = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return null;

  // Features list for TestPlatform (as described by the user)
  const testPlatformFeatures = [
    "Ro'yxatdan o'tish va login (Auth)",
    "JWT (JSON Web Token) orqali autentifikatsiya",
    "Testlar va fanlar yaratish",
    "Savollar va variantlarni to'liq boshqarish",
    "Test topshirish interfeysi",
    "Avtomatik ball va natija hisoblash",
    "Natijalar tarixini saqlash",
    "Admin boshqaruv paneli",
    "PostgreSQL ma'lumotlar bazasi",
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title ui-interactive">Loyihalar</h2>
      
      <div className="projects-grid ui-interactive">
        {projects.map((project) => (
          <div key={project.id} className="project-card glass-panel">
            <div className="project-image-container">
              <img 
                src={project.imageUrl || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'} 
                alt={project.title} 
                className="project-image"
              />
              <div className="image-overlay"></div>
            </div>
            
            <div className="project-info">
              <h3 className="project-title-text">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              {project.title.includes("TestPlatform") && (
                <div className="features-box">
                  <h4>Asosiy Imkoniyatlar:</h4>
                  <div className="features-grid">
                    {testPlatformFeatures.map((feat, index) => (
                      <div key={index} className="feature-item">
                        <CheckCircle size={14} className="feature-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="tech-stack-container">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubUrl || 'https://github.com'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                >
                  <Github size={18} /> GitHub Link
                </a>
                <a 
                  href={project.liveUrl || '#'} 
                  className="project-link-btn active"
                >
                  <ExternalLink size={18} /> Demo Ko'rish
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .projects-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-top: 1rem;
        }

        .project-card {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr;
          overflow: hidden;
          border-radius: 16px;
        }

        .project-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 300px;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(5, 5, 8, 0.7));
        }

        .project-info {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          justify-content: center;
        }

        .project-title-text {
          font-size: 1.8rem;
          color: #fff;
          background: linear-gradient(to right, #fff, var(--text-muted));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .project-desc {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        .features-box {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.2rem 0;
        }

        .features-box h4 {
          font-size: 0.95rem;
          color: var(--accent);
          margin-bottom: 0.8rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-main);
        }

        .feature-icon {
          color: var(--accent);
          flex-shrink: 0;
        }

        .tech-stack-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tech-badge {
          background: rgba(147, 51, 234, 0.1);
          color: var(--primary);
          border: 1px solid rgba(147, 51, 234, 0.25);
          padding: 0.3rem 0.8rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-muted);
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        .project-link-btn:hover {
          border-color: #fff;
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .project-link-btn.active {
          background: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);
          border: none;
          color: white;
        }

        .project-link-btn.active:hover {
          box-shadow: 0 0 15px rgba(37, 99, 235, 0.5);
          transform: translateY(-1px);
        }

        @media (max-width: 992px) {
          .project-card {
            grid-template-columns: 1fr;
          }
          .image-overlay {
            background: linear-gradient(to bottom, transparent, rgba(5, 5, 8, 0.8));
          }
        }

        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
