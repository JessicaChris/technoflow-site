import React, { useEffect, useRef, useState } from 'react';

const projects = [
  { title: 'ADDITTIONAL LOAD FOR WAREHOUSE', img: '/assets/company-1.jpg' },
  { title: 'IRIGATIONAL PUMP UPDATION', img: '/assets/company-2.jpg' },
  { title: 'Ain Dubai', img: '/assets/company-3.jpg' },
  { title: 'Hilton Al Saadiyat', img: '/assets/company-4.jpg' },
  { title: 'Gevora Hotel', img: '/assets/office.jpg' },
  { title: 'UAE Pavilion', img: '/assets/company-5.jpg' },
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // toggle visibility every time
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        padding: '4rem 2rem',
        background: '#000',
        color: '#fff',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        willChange: 'opacity, transform',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        Completed Projects
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(255,255,255,0.1)',
              cursor: 'pointer',
              backgroundColor: '#111',
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '100%',
                background: 'rgba(0, 0, 0, 0.6)',
                color: '#fff',
                textAlign: 'center',
                padding: '0.75rem',
                fontSize: '1rem',
              }}
            >
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
