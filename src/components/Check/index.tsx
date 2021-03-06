import classNames from "classnames";
import OverlayTrigger from "components/OverlayTrigger";
import RenderIndicator from "components/RenderIndicator";
import React, { useEffect, useState } from "react";
import { FormCheck, FormCheckProps } from "react-bootstrap";
import { useThemeContext } from "utils/context";
import { makeGuid } from "utils/functions/common";
import { renderTooltip } from "utils/tooltip/Tooltip";
import { ChoiceProps, ValidateProps } from "utils/types/pages";

export interface CheckProps extends FormCheckProps {
  /**
   * 컴포넌트명
   */
  name: string;
  /**
   *  값 리스트
   */
  choices: Array<ChoiceProps>;
  /**
   *  체크될 때의 값
   */
  trueValue?: string | boolean;
  /**
   *  체크되지 않을 때의 값
   */
  falseValue?: string | boolean;
  /**
   * 유효성 검사 결과값
   */
  validate?: ValidateProps;
  /**
   *  Form Data 값 변경
   */
  handleChangeField?: (value: any) => void;
}
const Check: React.FC<CheckProps> = ({
  name,
  choices = [],
  value,
  trueValue = choices?.length > 0 ? choices[0].code : true,
  falseValue = choices?.length > 1 ? choices[1].code : false,
  disabled = false,
  isValid,
  validate,
  style,
  handleChangeField,
}: CheckProps) => {
  const [isChecked, setIsChecked] = useState(
    value === trueValue ? true : false
  );
  const { store: themeStore } = useThemeContext();

  // NOTE: 초기값 셋팅
  useEffect(() => {
    handleChange({ target: { checked: isChecked } });
  }, []);

  useEffect(() => {
    setIsChecked(value === trueValue ? true : false);
  }, [value]);

  // NOTE: 체크 값 변경 이벤트
  const handleChange = (event: any) => {
    const {
      target: { checked },
    } = event;

    setIsChecked(checked);

    const fieldValue = {
      target: {
        name,
        value: checked ? trueValue : falseValue,
      },
    };
    handleChangeField?.(fieldValue);
  };

  return (
    <>
      <RenderIndicator />

      <OverlayTrigger
        render={renderTooltip}
        renderChildren={
          validate?.message || choices.find((item) => item.code === value)?.name
        }
        invalid={validate?.invalid}
      >
        <div
          style={{
            ...style,
            display: "inline-block",
            height: "100%",
            verticalAlign: "sub",
          }}
        >
          <FormCheck name={name} id={makeGuid()}>
            <FormCheck.Input
              checked={isChecked}
              value={value}
              disabled={disabled}
              isValid={isValid}
              isInvalid={isValid !== undefined ? !isValid : false}
              onChange={handleChange}
            />
            <FormCheck.Label
              className={classNames("check-label", {
                darkMode: themeStore?.darkMode,
              })}
            >
              {isChecked ? choices[0].name : choices[1].name}
              {/* {choices.find((item) => item.code === value)?.name} */}
            </FormCheck.Label>
          </FormCheck>
        </div>
      </OverlayTrigger>
    </>
  );
};

export default React.memo(Check);
