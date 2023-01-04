import { css } from '@emotion/react';

/**
 * 유저가 상호작용하지 못하도록 하는 스타일을 적용합니다.
 */
export const disableVisually = () => css`
  opacity: 0.5;
  pointer-events: none;
  box-shadow: none;
`;
