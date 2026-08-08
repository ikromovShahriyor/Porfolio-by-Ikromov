import { useState } from 'react';
import { Send, MapPin, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const Instagram = ({ size = 20 }) => (
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
    className="lucide lucide-instagram"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const MessageCircle = ({ size = 20 }) => (
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
    className="lucide lucide-send-plane"
  >
    <line x1="22" x2="11" y1="2" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setStatus({ type: 'error', text: 'Iltimos, barcha maydonlarni to\'ldiring.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5288/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', text: data.message });
        setFormData({ name: '', phone: '', message: '' });
        
        // Premium celebration confetti!
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#9333ea', '#2563eb', '#06b6d4']
        });
      } else {
        setStatus({ type: 'error', text: data.message || 'Xabarni yuborishda xatolik yuz berdi.' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Server bilan bog\'lanishda xatolik. Iltimos keyinroq qayta urinib ko\'ring.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title ui-interactive">Aloqa</h2>
      
      <div className="contact-grid ui-interactive">
        <div className="contact-info-card glass-panel">
          <h3 className="card-title">Keling, bog'lanamiz!</h3>
          <p className="card-desc">Loyihalar bo'yicha savollaringiz yoki takliflaringiz bo'lsa, xabar qoldiring. Men albatta siz bilan bog'lanaman.</p>
          
          <div className="contact-details">
            <div className="detail-item">
              <MessageCircle className="detail-icon" size={20} />
              <div>
                <span className="detail-label">Telegram</span>
                <span className="detail-value">
                  <a href="https://t.me/Ikrommov" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
                    @Ikrommov
                  </a>
                </span>
              </div>
            </div>
            <div className="detail-item">
              <Instagram className="detail-icon" size={20} />
              <div>
                <span className="detail-label">Instagram</span>
                <span className="detail-value">
                  <a href="https://instagram.com/ikrommov.sh" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
                    @ikrommov.sh
                  </a>
                </span>
              </div>
            </div>
            <div className="detail-item">
              <MapPin className="detail-icon" size={20} />
              <div>
                <span className="detail-label">Manzil</span>
                <span className="detail-value">Toshkent, O'zbekiston</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card glass-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label htmlFor="name">Ism va Familiyangiz</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ismingizni kiriting"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="phone">Telefon raqamingiz</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+998 (XX) XXX-XX-XX"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="message">Xabar / Tavsif</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Loyiha haqida qisqacha tavsif yoki xabaringizni yozing..."
                rows="5"
                required
              ></textarea>
            </div>

            {status.text && (
              <div className={`status-message ${status.type}`}>
                {status.text}
              </div>
            )}

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> Yuborilmoqda...
                </>
              ) : (
                <>
                  Yuborish <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx="true">{`
        .contact-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 2rem;
          margin-top: 1rem;
        }

        .contact-info-card, .contact-form-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .card-title {
          font-size: 1.5rem;
          color: #fff;
        }

        .card-desc {
          color: var(--text-muted);
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .detail-icon {
          color: var(--accent);
        }

        .detail-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .detail-value {
          color: #fff;
          font-weight: 500;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .input-group label {
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .input-group input, .input-group textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.8rem 1rem;
          border-radius: 8px;
          color: #fff;
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }

        .input-group input:focus, .input-group textarea:focus {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.05);
          outline: none;
          box-shadow: 0 0 10px rgba(147, 51, 234, 0.25);
        }

        .status-message {
          padding: 0.8rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .status-message.success {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .status-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
