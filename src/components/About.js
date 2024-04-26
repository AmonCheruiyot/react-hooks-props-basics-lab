import React from 'react';

const About = ({ bio, links }) => {
  return (
    <div data-testid="about"> {/* Add data-testid attribute */}
      {bio && <p>{bio}</p>}
      {links && (
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              <a href={links.github}>GitHub</a>
            </li>
            <li>
              <a href={links.linkedin}>LinkedIn</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default About;