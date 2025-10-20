import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <h2>Contact Me</h2>
            <p className="contact-intro">
                I’d love to hear from you! Whether you have a project idea, want to
                collaborate, or just say hello — feel free to reach out.
            </p>

            <div className="contact-container">
                {/* Contact Form */}
                <form
                    className="contact-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Your message has been submitted!");
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="contact-btn">Send Message</button>
                </form>

                {/* Contact Info */}
                <div className="contact-info">
                    <h3>Let’s Connect</h3>
                    <p>
                        You can also reach me via email or follow me on social media for
                        updates and professional networking.
                    </p>

                    <div className="contact-details">
                        <p><FaEnvelope /> sampathchulaka@gmail.com</p>
                        <p><FaPhoneAlt /> +94 71 234 5678</p>
                    </div>

                    <div className="social-links">
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:sampathchulaka@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
