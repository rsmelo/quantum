import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../Colors';

const Wrapper = styled.div`
  background-color: ${Colors.BLACK['200']};
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const Media = ({ className, ...props }) => (
  <Wrapper className={className}>
    <Image {...props} />
  </Wrapper>
);

Media.displayName = 'Card.Media';

Media.propTypes = {
  className: PropTypes.string,
};

Media.defaultProps = {
  className: undefined,
};

export default Media;
