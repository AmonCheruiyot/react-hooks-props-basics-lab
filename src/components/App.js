import React from 'react';
import Home from './Home';
import About from './About';
import Links from './Links';
import user from '../data/user';

const App = () => {
  return (
    <div>
      <nav></nav>
      <Home data-testid="home" name={user.name} city={user.city} color={user.color} />
      <About data-testid="about" bio={user.bio} links={user.links} />
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
