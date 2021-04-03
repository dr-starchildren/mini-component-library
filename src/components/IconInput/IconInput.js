import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const iconSize = size === 'small' ? 16 : 24;
  const TextInput = size === 'small' ? SmallTextInput : LargeTextInput;
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': iconSize + 'px' }}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <TextInput {...delegated} style={{ '--width': width + 'px' }} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  height: var(--size);
  width: var(--size);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const BaseInput = styled.input`
  border: none;
  width: var(--width);
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const SmallTextInput = styled(BaseInput)`
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 24px;
  height: ${24 / 16}rem;
  font-size: ${14 / 16}rem;
`;

const LargeTextInput = styled(BaseInput)`
  border-bottom: 2px solid ${COLORS.black};
  padding-left: 36px;
  height: ${36 / 16}rem;
  font-size: ${24 / 16}rem;
`;

export default IconInput;
