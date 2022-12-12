import { AnchorHTMLAttributes, ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ClickEvent } from '~/types/events';

type ButtonSize = 'small' | 'medium' | 'large';

export interface BaseProps {
  children?: ReactNode;
  /**
   * Button의 크기를 정합니다.
   * @type 'small' | 'medium' | 'large' | undefined
   */
  size?: ButtonSize;

  onClick: (event: ClickEvent) => void;

  /**
   * Button의 비활성화 여부를 정합니다.
   */
  disabled?: boolean;

  /**
   * Button 요소의 원래 html type 속성
   */
  htmlType?: 'button' | 'reset' | 'submit';
}
type LinkElProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'>;
type ButtonElProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

export type ButtonProps = BaseProps & LinkElProps & ButtonElProps;
type StyledButtonProps = Pick<ButtonProps, 'size'>;

const baseStyles = () => css`
  display: inline-flex;
  justify-content: center;
  width: auto;
  height: auto;
  margin: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border-style: solid;
`;

const loadingStyles = () => css``;

const StyledButton = styled('button')<StyledButtonProps>(baseStyles);

export const Button = forwardRef(
  ({ children, size = 'medium', ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <StyledButton {...props} size={size} ref={ref}>
      {children}
    </StyledButton>
  ),
);
