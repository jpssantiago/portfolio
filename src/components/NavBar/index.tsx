import React, { useState } from 'react';

import { Container, Logo, Nav, Link } from './styles';

interface ILink {
  id: string;
  text: string;
}

const links: ILink[] = [
  {
    id: 'home',
    text: 'início'
  }, {
    id: 'about',
    text: 'sobre',
  }, {
    id: 'experience',
    text: 'experiência',
  }, {
    id: 'work',
    text: 'trabalhos',
  }, {
    id: 'contact',
    text: 'contato',
  }
];

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<ILink>(links[0]);

  const isActive = (link: ILink): boolean => {
    return activeLink.id === link.id;
  }

  return (
    <Container>
      {/* eslint-disable-next-line */}
      <Logo>João<mark>//</mark>Santiago</Logo>

      <Nav>
        {links.map(link => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActiveLink(link)}
            className={isActive(link) ? 'active-link' : ''}
          >{link.text}</Link>
        ))}
      </Nav>
    </Container>
  );
}

export default NavBar;