import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top top-footer">
        <div className="top-footer__body container">
          <div className="top-footer__item">
            <h3 className="top-footer__title">Biography &amp; True Stories</h3>
            <ul className="top-footer__list">
              <li>General</li>
              <li>Diaries, Letters &amp; Journals</li>
              <li>Memoirs</li>
              <li>True Stories</li>
              <li>Generic Exams</li>
              <li>GK Titles</li>
              <li>Medical Entrance</li>
              <li>Other Entrance Exams</li>
              <li>PG Entrance Examinations</li>
              <li>Self-help Titles</li>
              <li>Sociology</li>
            </ul>
          </div>
          <div className="top-footer__item">
            <h3 className="top-footer__title">Professional &amp; Reference</h3>
            <ul className="top-footer__list">
              <li>Academic and Reference</li>
              <li>Business Trade</li>
              <li>Engineering and Computer Science</li>
              <li>Humanities, Social Sciences and Languages</li>
              <li>Introduction to Computers</li>
              <li>Science and Maths</li>
              <li>Trade Business</li>
              <li>English Language &amp; Literature</li>
              <li>English Language Teaching</li>
              <li>Environment Awareness</li>
              <li>Environment Protection</li>
            </ul>
          </div>
          <div className="top-footer__item">
            <h3 className="top-footer__title">Earth Sciences</h3>
            <ul className="top-footer__list">
              <li>Earth Sciences</li>
              <li>Geography</li>
              <li>The Environment</li>
              <li>Regional &amp; Area Planning</li>
              <li>Fantasy</li>
              <li>Gay</li>
              <li>Humorous</li>
              <li>Interactive</li>
              <li>Legal</li>
              <li>Lesbian</li>
              <li>Men'S Adventure</li>
            </ul>
          </div>
          <div className="top-footer__item">
            <h3 className="top-footer__title">Mathematics</h3>
            <ul className="top-footer__list">
              <li>Algebra</li>
              <li>Differential Equations</li>
              <li>Discrete Mathematics</li>
              <li>Fourier Analysis</li>
              <li>Numerical Analysis</li>
              <li>Probability</li>
              <li>Statistical Methods/data Analysis</li>
              <li>Stochastic And Random Processes</li>
              <li>Topology</li>
              <li>Statistics</li>
              <li>Mathematics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom bottom-footer">
        <div className="bottom-footer__body container">
          <p className="bottom-footer__text">
            We accept all major Credit Card/Debit Card/Internet Banking
          </p>
          <div className="bottom-footer__links">
            <ul className="bottom-footer__links-list">
              <li>
                <img src="./src/mc.png" alt="" />
              </li>
              <li>
                <img src="./src/ae.png" alt="" />
              </li>
              <li>
                <img src="./src/visa.png" alt="" />
              </li>
            </ul>
          </div>
          <p className="bottom-footer__license">
            Conditions of Use Privacy Notice © 2012-2013, Booksonline, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
