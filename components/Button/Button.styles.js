// const Button = styled.btn`
// font-size: 1.5em;
// text-align: center;
// color: green;
// display: flex;
// `;

import React from 'react';
import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background: ${(props) =>
    // if primary
    props.primary
      ? 'linear-gradient(0deg,#e86902,#fd8320)'
      : // else if secondary
      props.secondary
        ? 'linear-gradient(0deg,#006db7,#008bea)'
        : // else if disabled
        props.disabled
          ? '#E0E0E0'
          : // else default
          'linear-gradient(0deg,#e86902,#fd8320)'};
  border-color: ${props =>
    // if primary
    props.primary
      ? '#b55202'
      : // else if secondary
      props.secondary
        ? '#006db7'
        : // else if disabled
        props.disabled
          ? 'none'
          : // else default
          '#b55202'};
  color: ${props =>
    // if primary
    props.primary
      ? 'white'
      : // else if secondary
      props.secondary
        ? 'white'
        : // else if disabled
        props.disabled
          ? '#8E8E8E'
          : // else default
          'black'};
  box-shadow: ${props =>
    // if primary
    props.primary
      ? 'inset 0 0 2px hsla(0,0%,100%,.3), inset 0 1px 0 hsla(0,0%,100%,.3)'
      : // else if secondary
      props.secondary
        ? '0 2px 0 0 #003a71'
        : // else if disabled
        props.disabled
          ? 'none'
          : // else default
          'inset 0 0 2px hsla(0,0%,100%,.3), inset 0 1px 0 hsla(0,0%,100%,.3)'};
  &:hover {
    background: ${props =>
    // if primary
    props.primary
      ? '#e86902'
      : // else if secondary
      props.secondary
        ? '#006db7'
        : // else if disabled
        props.disabled
          ? '#E0E0E0'
          : // else default
          '#e86902'};
  }
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  display: inline-block;
  border-width: 1px 1px 2px;
  border-style: solid;
  font-size: 0.625em;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-align: center;
  text-decoration: none;
  position: relative;
  line-height: 1em;
  padding: 0.8125rem 0.875rem;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0;
`;

const Button = props => {
  return <ButtonStyle type={'button'} {...props} />;
};

export default Button;
