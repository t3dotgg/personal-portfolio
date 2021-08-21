import { css } from "styled-components";

export const focusStyles = css`
  &:focus-visible {
    outline: 2px ridge #ffb123;
    outline-offset: 3px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
