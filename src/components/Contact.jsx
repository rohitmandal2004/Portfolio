import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // ⚠️ Replace these placeholders with your actual EmailJS credentials
    const SERVICE_ID = 'service_s9ubpbk';
    const TEMPLATE_ID = 'template_ixtohrt';
    const PUBLIC_KEY = 'F2sucbJyvc_MOx_Ne';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setStatus('Message sent successfully! 🚀');
          e.target.reset();
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          setStatus('Failed to send message. Please try again. ❌');
          console.error(error.text);
          setTimeout(() => setStatus(''), 5000);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="section-header">
          <h2>Let's Talk</h2>
          <div className="section-header-line"></div>
          <div className="section-header-icon">&gt;</div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-left brutal-reveal-hidden">
            <h1 className="poster-title contact-title">
              SAY <span className="highlight">HELLO</span><span className="dot">.</span>
            </h1>
            <p className="contact-subtext">
              Have an idea or a project in mind? Let's build something awesome together.
            </p>
          </div>
          
          <div className="contact-right brutal-reveal-hidden delay-1">
            <form ref={form} onSubmit={sendEmail} className="neo-form">
               <div className="form-group">
                 <label>Your Name</label>
                 <input type="text" name="name" placeholder="John Doe" required />
               </div>
               <div className="form-group">
                 <label>Your Email</label>
                 <input type="email" name="email" placeholder="john@example.com" required />
               </div>
               <div className="form-group">
                 <label>Message</label>
                 <textarea name="message" rows="4" placeholder="How can I help you?" required></textarea>
               </div>
               <button type="submit" className="neo-submit-btn" disabled={status === 'Sending...'}>
                 {status === 'Sending...' ? 'SENDING...' : 'SEND MESSAGE \u2192'}
               </button>
               {status && (
                 <p style={{ marginTop: '1rem', fontWeight: 'bold', color: status.includes('Failed') ? '#ef4444' : '#10b981' }}>
                   {status}
                 </p>
               )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
