import React from 'react';
import Home from './Home';
import About from './About';
import Links from './Links';
import user from '../data/user';

const App = () => {
  return (
    <div>
      <nav></nav>
      {/* Adding data-testid attributes to parent divs */}
      <div data-testid="home-container">
        <Home name={user.name} city={user.city} color={user.color} />
      </div>
      <div data-testid="about-container">
        <About bio={user.bio} links={user.links} />
      </div>
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;