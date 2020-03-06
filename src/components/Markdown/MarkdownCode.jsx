import { createElement } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Styles
import { useMarkdownStyles } from './Markdown.style';

const MarkdownCode = ({ children }) => {
  const classes = useMarkdownStyles();

  const isMulti = children.includes('\n');

  return createElement(
    isMulti ? 'div' : 'span',
    {
      className: clsx(
        {
          [classes.block]: isMulti,
          [classes.inline]: !isMulti
        },
        classes.code
      )
    },
    children
  );
};

MarkdownCode.propTypes = {
  children: PropTypes.node.isRequired
};

export default MarkdownCode;
