import { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

// export type InputElement = HTMLInputElement | HTMLTextAreaElement;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label }, ref) => <input />);

Input.displayName = 'Input';
