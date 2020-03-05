import React from 'react';

// Assets
import LogoImage from '../../public/images/logo_transparent.png';

// Styles
import { useLogoStyles } from './Logo.style';

const Logo = () => {
  const classes = useLogoStyles();

  return (
    <img
      src={LogoImage}
      alt="Thieves Guild logo"
      className={classes.root}
    />
  );
};

export default Logo;
