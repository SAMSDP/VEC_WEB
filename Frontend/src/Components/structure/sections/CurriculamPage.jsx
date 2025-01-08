import React, { useState } from 'react';
import curriculumData from '../../Assets/curriculumData.json';
import './CurriculumPage.css';

const CurriculumPage = () => {
  const [activePO, setActivePO] = useState(null); // Track which PO is active (open)

  const togglePO = (id) => {
    setActivePO((prev) => (prev === id ? null : id)); // Toggle the active PO
  };

  return (
    <div className="containers mt-5">
      <div className="row">
        {/* Left Column: Curriculum and PSOs */}
        <div className="col-md-6">
          <div className="content-section">
            <h2 className="text-start">Curriculum & Syllabus</h2>

            {/* Regulation Rows */}
            {curriculumData.curriculums.map((item) => (
              <div className="row-item" key={item.regulation}>
                <p>Regulation {item.regulation}</p>
                <div className="options-container">
                  <button className="options-btn">
                    Options
                  </button>
                  <div className="options-dropdown">
                    <a
                      className="dropdown-item"
                      href={item.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                    <a
                      className="dropdown-item"
                      href={item.downloadUrl}
                      download={`Regulation_${item.regulation}.pdf`}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Calendar Section */}
            <div className="calendar-section text-center mt-4">
              <h4>Current Academic Calendar</h4>
              <div className="options-container">
                <button className="options-btn">Options</button>
                <div className="options-dropdown">
                  <a
                    className="dropdown-item"
                    href="#viewCalendar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                  <a
                    className="dropdown-item"
                    href="#downloadCalendar"
                    download="Academic_Calendar.pdf"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Program Specific Outcomes Section */}
          <div className="psos-section mt-5">
            <h2>Program Specific Outcomes</h2>
            <div className="accordion" id="psosAccordion">
              {curriculumData.psos.map((pso) => (
                <div className="accordion-item" key={pso.id}>
                  <h2 className="accordion-header" id={`psosHeading${pso.id}`}>
                    <button
                      className="accordion-buttons"
                      onClick={() => togglePO(pso.id)}
                    >
                      Outcome {pso.id}
                    </button>
                  </h2>
                  <div
                    className={`accordion-body ${activePO === pso.id ? 'show' : ''}`}
                  >
                    {pso.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Program Outcomes */}
        <div className="col-md-6">
          <div className="pos-section">
            <h2>Program Outcomes</h2>
            <div className="accordion">
              {curriculumData.pos.map((po) => (
                <div className="accordion-item" key={po.id}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-buttons"
                      onClick={() => togglePO(po.id)}
                    >
                      PO{po.id}: {po.name}
                    </button>
                  </h2>
                  <div
                    className={`accordion-body ${activePO === po.id ? 'show' : ''}`}
                  >
                    {po.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;
