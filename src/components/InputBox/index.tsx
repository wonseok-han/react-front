import "./styles.scss";

import classNames from "classnames";
import OverlayTrigger from "components/OverlayTrigger";
import RenderIndicator from "components/RenderIndicator";
import React from "react";
import { FormControl, InputGroup, InputGroupProps } from "react-bootstrap";
import { useThemeContext } from "utils/context";
import { renderTooltip } from "utils/tooltip/Tooltip";
import { ValidateProps } from "utils/types/pages";

export interface InputBoxProps extends InputGroupProps {
  /**
   * Input 타입
   */
  type?: string;
  /**
   * 컴포넌트명
   */
  name: string;
  /**
   * 패스워드 사용여부
   */
  isPassword?: boolean;
  /**
   * 값
   */
  value?: string | number;
  /**
   * ReadOnly 여부
   */
  readOnly?: boolean;
  /**
   * Disabled 여부
   */
  disabled?: boolean;
  /**
   * placeholder 문자
   */
  placeholder?: string | undefined;
  /**
   * Input 앞에 위치할 String
   */
  prefix?: string | undefined;
  /**
   * Input 뒤에 위치할 String
   */
  postfix?: string | undefined;
  /**
   * 숨김여부
   */
  hidden?: boolean;
  /**
   * 텍스트 정렬
   */
  textAlign?: "left" | "right" | "center";
  /**
   * 유효성 여부
   */
  isValid?: boolean | undefined;
  /**
   * 유효성 검사 결과값
   */
  validate?: ValidateProps;
  /**
   * 필드 Change Event
   */
  handleChangeField?: (event: any) => void;
  /**
   * Key Down Event
   */
  handleKeyDown?: (event?: any) => void;
  /**
   * Key Up Event
   */
  handleKeyUp?: (event?: any) => void;
}

const STYLE = {
  textOverflow: "ellipsis",
};

const InputBox: React.FC<InputBoxProps> = ({
  type = "string",
  name,
  isPassword = false,
  value,
  readOnly = false,
  disabled = false,
  placeholder,
  prefix,
  postfix,
  hidden = false,
  textAlign,
  isValid,
  validate,
  style,
  handleChangeField,
  handleKeyDown,
  handleKeyUp,
}: InputBoxProps) => {
  const { store: themeStore } = useThemeContext();

  // NOTE: 값 변경 이벤트
  const handleChange = (event: any) => {
    const {
      target: { name, value },
    } = event;

    const fieldValue = {
      target: {
        name,
        value,
      },
    };
    handleChangeField?.(fieldValue);
  };

  // NOTE: Key Down Event
  const onKeyDown = (event: any) => {
    handleKeyDown?.(event);
  };

  // NOTE: Key Up Event
  const onKeyUp = (event: any) => {
    handleKeyUp?.(event);
  };

  return (
    <>
      <RenderIndicator />
      {!hidden && (
        <OverlayTrigger
          render={renderTooltip}
          renderChildren={validate?.message || value}
          invalid={validate?.invalid}
        >
          <InputGroup style={style} hasValidation={true}>
            {prefix && <InputGroup.Text>{prefix}</InputGroup.Text>}
            <FormControl
              className={classNames("custom-input", {
                darkMode: themeStore?.darkMode,
              })}
              name={name}
              type={isPassword ? "password" : type}
              readOnly={readOnly}
              disabled={disabled}
              placeholder={placeholder}
              value={value}
              isValid={isValid}
              isInvalid={isValid !== undefined ? !isValid : false}
              onChange={handleChange}
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              style={{ ...STYLE, textAlign: textAlign }}
            />
            {postfix && <InputGroup.Text>{postfix}</InputGroup.Text>}
          </InputGroup>
        </OverlayTrigger>
      )}
    </>
  );
};

export default React.memo(InputBox);
