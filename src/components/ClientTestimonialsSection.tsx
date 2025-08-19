import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const ClientTestimonialsSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className={`section client-testimonials-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container-90">
        <div className="testimonials-content">
          {/* Title */}
          <h2 className="section-title">Client Testimonials</h2>

          {/* Testimonials Grid - 4 in a row */}
          <div className="testimonials-grid">
            {/* Testimonial 1: Nick Evans */}
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="5" fill="currentColor" />
                  <path
                    d="M20 21c0-2.76-2.24-5-5-5H9c-2.76 0-5 2.24-5 5"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="client-name">Nick Evans</h3>
              <p className="client-title">Product Manager, Fluid Truck</p>
              <blockquote className="testimonial-quote">
                As a Product Manager at Fluid Truck, I had the pleasure of
                collaborating with Inzori for many years. They are highly
                talented engineers with a constant drive to learn new skills and
                embrace new challenges.
              </blockquote>
            </div>

            {/* Testimonial 2: Eric Engberson */}
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="5" fill="currentColor" />
                  <path
                    d="M20 21c0-2.76-2.24-5-5-5H9c-2.76 0-5 2.24-5 5"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="client-name">Eric Engberson</h3>
              <p className="client-title">VP of Product, Verinext</p>
              <blockquote className="testimonial-quote">
                People like Inzori are hard to find: fast learners, loyal,
                always delivering on their word, reliable across any timezone,
                and diplomatic in difficult situations.
              </blockquote>
            </div>

            {/* Testimonial 3: Gabriel Gramajo */}
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="5" fill="currentColor" />
                  <path
                    d="M20 21c0-2.76-2.24-5-5-5H9c-2.76 0-5 2.24-5 5"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="client-name">Gabriel Gramajo</h3>
              <p className="client-title">Project Manager, 1-800 Radiator</p>
              <blockquote className="testimonial-quote">
                I am pleased to recommend Inzori for their exceptional expertise
                in both backend and frontend development, with a strong command
                of complex server-side technologies, databases, and APIs.
              </blockquote>
            </div>

            {/* Testimonial 4: Carl Scholz */}
            <div className="testimonial-item">
              <div className="testimonial-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="5" fill="currentColor" />
                  <path
                    d="M20 21c0-2.76-2.24-5-5-5H9c-2.76 0-5 2.24-5 5"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="client-name">Carl Scholz</h3>
              <p className="client-title">Project Manager, Verinext</p>
              <blockquote className="testimonial-quote">
                Inzori's work ethic was great and they were true team players.
                They are one of those engineers that can jump in and solve
                almost any challenge presented to them.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
