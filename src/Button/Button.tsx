/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import { PropsWithChildren } from "react";

type Props = {
  /** 버튼의 클릭시 발생하는 함수 */
  onClick?: (e?: any) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "big";
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
};

/**
 * `Button` 컴포넌트는 어떤 작업을 트리거할 때 사용합니다.
 */
const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  theme = "primary",
  size = "medium",
  disabled = false,
  width,
}) => {
  return (
    <button
      css={[style, themes[theme], sizes[size], { width }]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

const themes = {
  primary: css`
    background: #20c997;
    color: white;
    svg {
      fill: white;
    }
    &:hover {
      background: #38d9a9;
    }
    &:active {
      background: #12b886;
    }
    &:disabled {
      background: #aed9cc;
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    svg {
      fill: #343a40;
    }
    &:hover {
      background: #f1f3f5;
    }
    &:active {
      background: #dee2e6;
    }
    &:disabled {
      color: #c6d3e1;
      svg {
        fill: #c6d3e1;
      }
    }
  `,
  tertiary: css`
    background: none;
    color: #20c997;
    svg {
      fill: #20c997;
    }
    &:hover {
      background: #e6fcf5;
    }
    &:active {
      background: #c3fae8;
    }
    &:disabled {
      color: #bcd9d0;
      svg {
        fill: #bcd9d0;
      }
    }
  `,
};

const style = css`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #20c997;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
  &:disabled {
    cursor: not-allowed;
  }

  svg {
    width: 1em;
    margin-right: 1em;
  }
`;

export default Button;
