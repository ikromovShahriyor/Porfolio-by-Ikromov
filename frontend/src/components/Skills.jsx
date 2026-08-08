import { Terminal, Cpu, Globe, Database, Key, Settings, GitBranch } from 'lucide-react';

const iconMap = {
  Terminal: Terminal,
  Cpu: Cpu,
  Globe: Globe,
  Database: Database,
  Key: Key,
  Settings: Settings,
  GitBranch: GitBranch,
};

export default function Skills({ skills }) {
  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Terminal;
    return <IconComponent size={20} />;
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title ui-interactive">Ko'nikmalar</h2>
      
      <div className="skills-container ui-interactive">
        {Object.entries(categories).map(([categoryName, categorySkills]) => (
          <div key={categoryName} className="category-card glass-panel">
            <h3 className="category-title">
              {categoryName === 'Backend' ? 'Back-end' : categoryName === 'Database' ? 'Ma\'lumotlar Bazasi' : categoryName}
            </h3>
            
            <div className="skills-list">
              {categorySkills.map((skill) => (
                <div key={skill.id} className="skill-item">
                  <div className="skill-meta">
                    <div className="skill-name-icon">
                      <span className="skill-icon">{renderIcon(skill.iconName)}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar-fill" 
                      style={{ 
                        width: `${skill.percentage}%`,
                        background: categoryName === 'Backend' 
                          ? 'linear-gradient(90deg, var(--primary), var(--secondary))' 
                          : 'linear-gradient(90deg, var(--secondary), var(--accent))'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .skills-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 1rem;
        }

        .category-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .category-title {
          font-size: 1.3rem;
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.8rem;
          position: relative;
        }

        .category-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 40px;
          height: 2px;
          background: var(--accent);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name-icon {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .skill-icon {
          color: var(--accent);
          display: flex;
          align-items: center;
        }

        .skill-name {
          font-size: 0.95rem;
          color: #fff;
          font-weight: 500;
        }

        .skill-percentage {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .progress-bar-container {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
          width: 100%;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(147, 51, 234, 0.3);
          transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
}
