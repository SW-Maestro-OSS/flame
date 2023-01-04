import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { disableVisually } from '~/styles/style-mixins';

export interface FieldWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

const disabledStyles = ({ disabled }: FieldWrapperProps) => disabled && disableVisually();

export const FieldWrapper = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'disabled',
})<FieldWrapperProps>(disabledStyles);
