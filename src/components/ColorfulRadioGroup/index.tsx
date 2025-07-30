import { CheckCircleFilled, CircleOutline } from "./Icons";
import styles from "./index.module.less";
import classNames from "classnames";
import { useControllableValue } from "ahooks";
import { TinyColor } from "@ctrl/tinycolor";

type OptionType = {
  label: string;
  value: string;
  color?: string;
};

interface ColorfulRadioGroupProps {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: OptionType[];
}

export const ColorfulRadioGroup = ({
  options,
  ...props
}: ColorfulRadioGroupProps) => {
  const [state, setState] = useControllableValue(props);
  const currentOption = options.find((item) => item.value === state);
  const { color: currentColor = "#eee" } = currentOption || {};

  return (
    <div
      className={classNames(styles["colorful-radio-group"])}
      style={{ border: `1px solid ${currentColor}` }}
    >
      {options.map(({ label, value: _value, color }, index) => {
        const isChecked = state === _value;
        const selectedBackground = isChecked
          ? `${new TinyColor(color).setAlpha(0.1).toRgbString()}`
          : "unset";

        return (
          <div
            key={index}
            className={styles["item"]}
            onClick={() => setState(_value)}
            style={{ backgroundColor: selectedBackground }}
          >
            {isChecked ? (
              <CheckCircleFilled color={color} />
            ) : (
              <CircleOutline />
            )}
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
};
