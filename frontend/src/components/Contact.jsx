import { useState } from 'react';
import { Send, MapPin, Mail, Clock, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    if (!formData.name || !formData.email || !formData.message) {
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
          email: formData.email,
          subject: 'Portfolio orqali xabar',
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', text: data.message });
        setFormData({ name: '', email: '', message: '' });
        
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
              <Mail className="detail-icon" size={20} />
              <div>
                <span className="detail-label">Email</span>
                <span className="detail-value">shahriyor@example.com</span>
              </div>
            </div>
            <div className="detail-item">
              <MapPin className="detail-icon" size={20} />
              <div>
                <span className="detail-label">Manzil</span>
                <span className="detail-value">Toshkent, O'zbekiston</span>
              </div>
            </div>
            <div className="detail-item">
              <Clock className="detail-icon" size={20} />
              <div>
                <span className="detail-label">Ish Vaqti</span>
                <span className="detail-value">Dush - Shan, 09:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card glass-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label htmlFor="name">Ismingiz</label>
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
              <label htmlFor="email">Email manzilingiz</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Emailingizni kiriting"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="message">Xabar</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Xabaringizni yozing..."
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
