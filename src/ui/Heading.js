import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import { variant, space } from 'styled-system';
const variants = {
  1: {
    fontSize: '32px',
    fontWeight: 700
  },
  2: {
    fontSize: '24px'

  },
  3: {
    fontSize: '16px'

  },
};
const HeadingBase = ({ level, as: Component = `h${level}`, ...props }) => (
  <Component {...props} />
);

HeadingBase.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  as: PropTypes.func,
}

const Heading = styled(HeadingBase)(
  {
    margin: 0,
  },
  variant({
    variants,
    prop: 'level',
  }),
  space
);

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node,
};

export default Heading;