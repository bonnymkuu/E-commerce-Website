import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info p-4 bg-white rounded shadow-sm">
              <h2 className="text-danger mb-4">Contact Bonny Shop Kenya</h2>
              
              <div className="info-item mb-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill fs-4 text-danger me-3"></i>
                  <div>
                    <h5 className="mb-1">Headquarters</h5>
                    <p className="mb-0">Moi Avenue, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              
              <div className="info-item mb-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-telephone-fill fs-4 text-danger me-3"></i>
                  <div>
                    <h5 className="mb-1">Call Us</h5>
                    <p className="mb-0">+254 700 123 456</p>
                    <p className="mb-0">+254 711 987 654</p>
                  </div>
                </div>
              </div>
              
              <div className="info-item mb-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope-fill fs-4 text-danger me-3"></i>
                  <div>
                    <h5 className="mb-1">Email Us</h5>
                    <p className="mb-0">info@bonnyshop.co.ke</p>
                    <p className="mb-0">support@bonnyshop.co.ke</p>
                  </div>
                </div>
              </div>
              
              <div className="info-item mb-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-clock-fill fs-4 text-danger me-3"></i>
                  <div>
                    <h5 className="mb-1">Working Hours</h5>
                    <p className="mb-0">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="mb-0">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links mt-4">
                <h5 className="mb-3">Follow Us</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="text-danger fs-4"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-danger fs-4"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="text-danger fs-4"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-danger fs-4"><i className="bi bi-whatsapp"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="contact-form p-4 bg-white rounded shadow-sm">
              <h2 className="text-danger mb-4">Send Us a Message</h2>
              {submitted ? (
                <div className="alert alert-success">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +254 700 123 456"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-danger w-100">
                    <i className="bi bi-send-fill me-2"></i> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-5 text-center">
          <Link to="/" className="btn btn-outline-danger">
            <i className="bi bi-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;