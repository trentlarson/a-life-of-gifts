// These four are similar: contact.js, opportunities.js, pledge.js, related.js

import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import './color-space.css';

const ProjectContainer = ({ planProjectData }) => {
  //console.log('planProjectData',planProjectData)
  const data = planProjectData
  return (
    <section className="colored-spaced" id="projects">
      <h2>
        <FontAwesomeIcon icon={faHammer} />
        Plans & Projects
      </h2>

      <h3>Ones We're Watching</h3>

      <ul>
        <li><a href="https://theconsciousresistance.com/wp-content/uploads/2022/12/HowtoOpt-OutoftheTechnocraticState2ndEd-FINAL.pdf">Agorist Development Goals (page 105)</a>, with <a href="https://observablehq.com/d/83a90a6d6cd11999?loadTaskUrl=https://livesofgifts.org/project/agorist-development-goals.yaml">a project breakdown here</a></li>
        <li><a href="https://sdgs.un.org">Sustainable Development Goals</a>, with <a href="https://observablehq.com/d/83a90a6d6cd11999?loadTaskUrl=https://livesofgifts.org/project/sustainable-development-goals.yaml">a project breakdown here</a></li>
      </ul>

      <h3>Ones Recorded on the Endorser Search Platform</h3>

      Below are plans declared on <a href="https://EndorserSearch.org">EndorserSearch.org</a>, a place open for all to advertise their projects.

      <br />
      <br />
      <h4>
        { data.length == 50 ? '50+' : data.length || '?' } plans have been recorded.
      </h4>

      <ul>
      {
        data.map(entry =>
          <li key={entry.jwtId}>{entry.name}</li>
        )
      }
      </ul>
    </section>
  );
};

export default ProjectContainer;
