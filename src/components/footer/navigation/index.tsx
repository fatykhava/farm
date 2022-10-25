import React, { FC } from "react";

import { NAVIGATION } from "./../../../const";

const Navigation: FC = () => {
  return (
    <nav>
      <ul>
        {NAVIGATION.map((link) => (
          <li key={link.id}>
            <a href={link.url} target={link.target} rel="noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
