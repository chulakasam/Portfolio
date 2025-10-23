import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo / Name */}
                <h2 className="footer-logo">Chulaka<span>Sampath</span></h2>

                {/* Social Icons */}
                <div className="footer-socials">
                    <a href="https://github.com/chulakasam" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/chulaka sampath" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:sampathchulaka33872@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Copyright */}
                <p className="footer-text">
                    © {new Date().getFullYear()} Chulaka Sampath. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
