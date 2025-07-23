import React, { useEffect, useRef, useState } from 'react';

const ScrollSections: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'llc' | 'em' | 'vessel' | 'img1' | 'img2' | 'img3' | 'img4'>('llc');

  const sectionRefs = {
    llc: useRef<HTMLDivElement>(null),
    em: useRef<HTMLDivElement>(null),
    vessel: useRef<HTMLDivElement>(null),
    img1: useRef<HTMLDivElement>(null),
    img2: useRef<HTMLDivElement>(null),
    img3: useRef<HTMLDivElement>(null),
    img4: useRef<HTMLDivElement>(null),
  };

  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({
    llc: false,
    em: false,
    vessel: false,
    img1: false,
    img2: false,
    img3: false,
    img4: false,
  });

  const handleScrollTo = (section: keyof typeof sectionRefs) => {
    const ref = sectionRefs[section];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updates: { [key: string]: boolean } = {};
        entries.forEach((entry) => {
          const section = entry.target.getAttribute('data-section');
          if (section) {
            updates[section] = entry.isIntersecting;
            if (entry.isIntersecting && ['llc', 'em', 'vessel', 'img1', 'img2', 'img3', 'img4'].includes(section)) {
              setActiveSection(section as any);
            }
          }
        });

        setVisibleSections((prev) => ({
          ...prev,
          ...updates,
        }));
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30% 0px',
      }
    );

    Object.entries(sectionRefs).forEach(([_, ref]) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const fadeStyle = (id: string): React.CSSProperties => ({
    opacity: visibleSections[id] ? 1 : 0,
    transform: visibleSections[id] ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.35s ease-in-out, transform 0.35s ease-in-out',
    willChange: 'opacity, transform',
  });

  return (
    <div style={{ display: 'flex', background: '#fff', color: '#000', minHeight: '100vh' }}>
      {/* 🔒 Sticky Left Headers */}
      <div
        style={{
          width: '30%',
          padding: '4rem 2rem',
          position: 'sticky',
          top: '100px',
          height: 'fit-content',
        }}
      >
        {[
          ['llc', 'ELECTRICAL'],
          ['em', 'MECHANICAL'],
          ['vessel', 'ELECTRICAL WORK IN VESSEL IN PORT'],
          ['img1', 'PANEL WORK PICTURES'],
          ['img2', 'SITE-WORK PICTURE'],
          ['img3', 'PANEL INSTALLATION'],
          ['img4', 'INSTRUMENT INSTALLATION'],

        ].map(([key, label]) => (
          <div
            key={key}
            onClick={() => handleScrollTo(key as keyof typeof sectionRefs)}
            style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontWeight: activeSection === key ? 'bold' : 'normal',
              borderBottom: activeSection === key ? '3px solid black' : 'none',
              transition: 'border-bottom 0.3s ease',
              cursor: 'pointer',
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* ✨ Right Scrollable Sections */}
      <div style={{ width: '70%', padding: '4rem 2rem' }}>
        {/* SECTION 1 */}
        <div
          ref={sectionRefs.llc}
          data-section="llc"
          style={{ marginBottom: '6rem', ...fadeStyle('llc') }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Delivering Engineering Excellence
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            The Electrical Power Distribution & Control (EPDC) has been in the business for more than One year providing solutions in the field of Low & Medium Voltage Switchgears, Low Current Systems, Industrial Process & Energy Automation, Instrumentation and Service.
            <br />
            <br />
            We have successfully delivered major projects in the Utility, Infrastructure, Industrial, Oil & Gas, Water & Wastewater, Construction sectors, catering to Electrical and Automation systems.
            <br />
            <br />
            Our core strengths are a highly skilled and dedicated engineering team, high quality consciousness, customer satisfaction-oriented approach together with high integrity and Corporate values. EPDC division is comprising of five major verticals as below:
          </p>
          <img
            src="/assets/company-4.jpg"
            alt="Danway LLC"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          />
        </div>

        {/* SECTION 2 */}
        <div
          ref={sectionRefs.em}
          data-section="em"
          style={{ marginBottom: '6rem', ...fadeStyle('em') }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Engineering the Future
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Mechanical division of TECHNO FLOW ELECTRO MECHANICAL SERVICES L.L.C is specialized in providing comprehensive solutions in the areas of pump sets, generators, diesel UPS systems, solar air conditioning, solar water heaters, energy optimization studies, after-sales services, and retrofitting of pumps, chillers, HVAC equipment, as well as water and wastewater treatment systems.
            <br />
            <br />
            Our expertise is backed by a strong network of reliable partners, enabling us to offer a wide range of high-quality products and customized designs that adhere to the most stringent industry standards.
            <br />
            <br />
            With TECHNO FLOW extensive experience and commitment to quality, our products and related solutions are trusted by clients across various industries.
          </p>
          <img
            src="/assets/office.jpg"
            alt="Company E&M"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          />
        </div>

        {/* SECTION 3: VESSEL */}
        <div
          ref={sectionRefs.vessel}
          data-section="vessel"
          style={{
            ...fadeStyle('vessel'),
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '6rem',
          }}
        >
          {['/assets/work1.png', '/assets/work2.png', '/assets/work3.png'].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Vessel ${idx + 1}`}
              style={{
                width: '30%',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>

        {/* SECTION 4: PANEL WORK */}
        <div
          ref={sectionRefs.img1}
          data-section="img1"
          style={{
            ...fadeStyle('img1'),
            minHeight: '50vh', // 👈 added
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '6rem',
          }}
        >
          {['/assets/work4.png', '/assets/work5.png', '/assets/work6.png'].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Panel ${idx + 1}`}
              style={{
                width: '30%',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>

        {/* SECTION 5: SITE WORK */}
        <div
          ref={sectionRefs.img2}
          data-section="img2"
          style={{
            ...fadeStyle('img2'),
            minHeight: '50vh', // 👈 added
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '6rem',
          }}
        >
          {['/assets/work7.png', '/assets/work8.png', '/assets/work9.png'].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Site Work ${idx + 1}`}
              style={{
                width: '30%',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>

        {/* SECTION 6: PANEL INSTALLATION */}
        <div
          ref={sectionRefs.img3}
          data-section="img3"
          style={{
            ...fadeStyle('img3'),
            minHeight: '50vh', // 👈 added
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '6rem',
          }}
        >
          {['/assets/work10.png'].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Panel Installation ${idx + 1}`}
              style={{
                width: '30%',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>

        {/* SECTION 7: INSTRUMENT INSTALLATION */}
        <div
          ref={sectionRefs.img4}
          data-section="img4"
          style={{
            ...fadeStyle('img4'),
            minHeight: '50vh', // 👈 added
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '6rem',
          }}
        >
          {['/assets/work11.png', '/assets/work12.png', '/assets/work13.png'].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Instrument Installation ${idx + 1}`}
              style={{
                width: '30%',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSections;
