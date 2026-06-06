import './Contact.css';

const Contact = () => {
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
            <form className="neo-form" action="mailto:rohitmandal0804@gmail.com" method="POST" encType="text/plain">
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
               <button type="submit" className="neo-submit-btn">SEND MESSAGE &rarr;</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
