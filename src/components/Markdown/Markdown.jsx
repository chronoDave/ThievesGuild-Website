import React, {
  useState,
  useEffect
} from 'react';
import { get } from 'https';
import path from 'path';
import { useTranslation } from 'react-i18next';
import MarkdownJsx from 'markdown-to-jsx';
import PropTypes from 'prop-types';

// Core
import { Container } from '@material-ui/core';

import { options } from './options';

const Markdown = ({ id, maxWidth, ...rest }) => {
  const [file, setFile] = useState('');

  const { i18n: { language } } = useTranslation();

  useEffect(() => {
    const root = process.env.NODE_ENV === 'development' ?
      'src/public/markdown' :
      'markdown';
    const filePath = path.resolve(root, language, `${id}.md`);

    get(filePath, res => {
      const { statusCode } = res;

      if (statusCode === 200) {
        const chunks = [];

        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => setFile(chunks.join('')));
      } else {
        console.error(`Failed to fetch from ${filePath}`);
      }
    });
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
