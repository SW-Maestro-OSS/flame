import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, InputHTMLAttributes } from 'react';
import { FieldWrapper } from '../FieldAtoms/FieldWrapper';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label for the input.
   */
  label: string;
  /**
   *
   */
  id?: string;
}

// export type InputElement = HTMLInputElement | HTMLTextAreaElement;

const wrapperStyles = () => css`
  position: relative;
`;
const InputWrapper = styled('div')(wrapperStyles);
const StyledInput = styled('input')();

export const Input = forwardRef<HTMLInputElement, InputProps>(({ value, label, id }, ref) => (
  <FieldWrapper>
    <InputWrapper>
      <StyledInput />
    </InputWrapper>
  </FieldWrapper>
));

Input.displayName = 'Input';
