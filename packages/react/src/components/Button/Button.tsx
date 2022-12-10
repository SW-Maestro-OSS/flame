import { forwardRef, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /**
   * Button의 크기를 정합니다.
   * @type 'small' | 'medium' | 'large' | undefined
   */
  size?: ButtonSize;

  children: ReactNode;
}

const baseStyles = () => css``;
const StyledButton = styled('button')(baseStyles);

export const Button = forwardRef(() => <StyledButton>hi</StyledButton>);
