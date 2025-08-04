import { CheckCircleFilled, CircleOutline } from './Icons';
import { useControllableValue } from 'ahooks';
import { TinyColor } from '@ctrl/tinycolor';

import './index.less';

type OptionType = {
  label: string;
  value: string;
  color?: string;
};

type ValueType = string | number | boolean;
interface ColorfulRadioGroupProps {
  defaultValue?: ValueType;
  value?: ValueType;
  onChange?: (value: ValueType) => void;
  options: OptionType[];
}

export const ColorfulRadioGroup = ({
  options,
  ...props
}: ColorfulRadioGroupProps) => {
  const [state, setState] = useControllableValue(props);
  const currentOption = options.find((item) => item.value === state);
  const { color: currentColor = '#eee' } = currentOption || {};

  return (
    <div
      className="colorful-radio-group"
      style={{ border: `1px solid ${currentColor}` }}
    >
      {options.map(({ label, value: _value, color }, index) => {
        const isChecked = state === _value;
        const selectedBackground = isChecked
          ? `${new TinyColor(color).setAlpha(0.1).toRgbString()}`
          : 'unset';

        return (
          <div
            key={index}
            className="item"
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
