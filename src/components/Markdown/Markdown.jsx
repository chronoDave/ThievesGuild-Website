import React, {
  useState,
  useEffect
} from 'react';
import { useTranslation } from 'react-i18next';
import MarkdownJsx from 'markdown-to-jsx';
import PropTypes from 'prop-types';

// Core
import { Container } from '@material-ui/core';

import { options } from './options';

// Files
import MainHomeEn from '../../public/markdown/en/Main_Home.md';
import MainHomeNl from '../../public/markdown/nl/Main_Home.md';
import ResearchAboutEn from '../../public/markdown/en/Research_About.md';
import ResearchAboutNl from '../../public/markdown/nl/Research_About.md';

const pages = {
  en: {
    Main_Home: MainHomeEn,
    Research_About: ResearchAboutEn
  },
  nl: {
    Main_Home: MainHomeNl,
    Research_About: ResearchAboutNl
  }
};

const Markdown = ({ id, maxWidth, ...rest }) => {
  const [file, setFile] = useState('');

  const { i18n: { language } } = useTranslation();

  useEffect(() => {
    setFile(pages[language][id]);
  }, [language, id]);

  return (
    <Container maxWidth={maxWidth} {...rest}>
      <MarkdownJsx options={options}>
        {file}
      </MarkdownJsx>
    </Container>
  );
};

Markdown.propTypes = {
  id: PropTypes.string.isRequired,
  maxWidth: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl'
  ])
};

Markdown.defaultProps = {
  maxWidth: 'md'
};

export default Markdown;
