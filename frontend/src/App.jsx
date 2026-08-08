import { useState, useEffect } from 'react';
import CanvasContainer from './components/CanvasContainer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Menu, X, Terminal } from 'lucide-react';

// Fallback seed data in case backend API is not running
const fallbackData = {
  personalInfo: {
    name: "Ikromov Shahriyor",
    title: ".NET Back-end Developer",
    bio: "Men — 15 yoshli yosh dasturchiman. Hozirda ITLIVE ACADEMY'da dasturlash bo'yicha tahsil olyapman. Asosiy yo'nalishim — .NET Back-end Development. C#, .NET 10, ASP.NET Core, Entity Framework Core, REST API, PostgreSQL va boshqa zamonaviy backend texnologiyalarini o'rganib, amaliy loyihalar yaratib kelmoqdaman. Maqsadim — professional .NET Back-end Developer bo'lish, murakkab va real muammolarni hal qiladigan zamonaviy dasturiy tizimlar yaratish.",
    profileImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    resumeUrl: "#",
    gitHubUrl: "https://github.com",
    linkedInUrl: "https://linkedin.com",
    telegramUrl: "https://t.me/Ikrommov",
    instagramUrl: "https://instagram.com/ikrommov.sh"
  },
  skills: [
    { id: 1, name: "C#", percentage: 95, category: "Backend", iconName: "Terminal" },
    { id: 2, name: ".NET 10", percentage: 93, category: "Backend", iconName: "Cpu" },
    { id: 3, name: "ASP.NET Core", percentage: 90, category: "Backend", iconName: "Globe" },
    { id: 4, name: "Entity Framework Core", percentage: 90, category: "Backend", iconName: "Cpu" },
    { id: 5, name: "REST API", percentage: 88, category: "Backend", iconName: "Terminal" },
    { id: 6, name: "PostgreSQL", percentage: 85, category: "Database", iconName: "Database" },
    { id: 7, name: "MySQL & SQLite", percentage: 80, category: "Database", iconName: "Database" },
    { id: 8, name: "Git & GitHub", percentage: 85, category: "DevOps", iconName: "GitBranch" },
    { id: 9, name: "JWT Authentication", percentage: 85, category: "Backend", iconName: "Key" },
    { id: 10, name: "Swagger / OpenAPI", percentage: 90, category: "Backend", iconName: "Settings" }
  ],
  projects: [
    {
      id: 1,
      title: "TestPlatform — Onlayn Test Tizimi",
      description: "Foydalanuvchilarga onlayn testlarni ishlash, natijalarni ko'rish va test jarayonini boshqarish imkonini beruvchi zamonaviy web-platforma. Imkoniyatlari: Ro'yxatdan o'tish va login, JWT autentifikatsiya, testlar, savollar va variantlarni boshqarish, test ishlash, natijalarni avtomatik hisoblash va saqlash, admin panel, testlarni tahrirlash va o'chirish, PostgreSQL bilan ishlash.",
      techStack: ["C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "REST API", "JWT Authentication"],
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ]
};

export default function App() {
  const [portfolioData, setPortfolioData] = useState(fallbackData);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Fetch data from the .NET backend API
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('http://localhost:5288/api/portfolio');
        if (response.ok) {
          const data = await response.json();
          setPortfolioData(data);
        }
      } catch (error) {
        console.warn("Backend API is currently offline. Using offline fallback data.", error);
      }
    };

    fetchPortfolioData();
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="app-container">
      {/* 3D Background Canvas */}
      <CanvasContainer />

      {/* UI Overlay Layer */}
      <div className="ui-layer">
        
        {/* Navigation Bar */}
        <nav className="navbar ui-interactive">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <Terminal size={22} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: '#9333ea' }} />
            <span>Shahriyor.Dev</span>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <span
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section === 'home' ? 'Bosh Sahifa' : 
                   section === 'about' ? 'Men Haqimda' : 
                   section === 'skills' ? 'Ko\'nikmalar' : 
                   section === 'projects' ? 'Loyihalar' : 'Aloqa'}
                </span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer glass-panel ui-interactive">
            <ul className="mobile-nav-links">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <span
                    className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
                    onClick={() => scrollToSection(section)}
                  >
                    {section === 'home' ? 'Bosh Sahifa' : 
                     section === 'about' ? 'Men Haqimda' : 
                     section === 'skills' ? 'Ko\'nikmalar' : 
                     section === 'projects' ? 'Loyihalar' : 'Aloqa'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Portfolio Content Sections */}
        <Hero personalInfo={portfolioData.personalInfo} scrollToSection={scrollToSection} />
        <About personalInfo={portfolioData.personalInfo} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Contact />

        {/* Footer */}
        <footer className="footer ui-interactive">
          <p>&copy; {new Date().getFullYear()} Ikromov Shahriyor. Barcha huquqlar himoyalangan.</p>
        </footer>
      </div>

      <style jsx="true">{`
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
        }

        .mobile-drawer {
          position: fixed;
          top: 75px;
          right: 2rem;
          width: 250px;
          padding: 2rem;
          z-index: 99;
          animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          list-style: none;
        }

        .mobile-nav-link {
          color: var(--text-muted);
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: #fff;
          padding-left: 8px;
        }

        .footer {
          padding: 3rem 2rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(5, 5, 8, 0.9);
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
