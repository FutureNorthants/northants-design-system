import React, { useState } from 'react';
import { ToggleButtonsProps } from './ToggleButtons.types';
import * as Styles from './ToggleButtons.styles';

const ToggleButtons: React.FunctionComponent<ToggleButtonsProps> = ({
  buttons,
  defaultButton = 0,
  hasTopMargin = false,
}) => {
  const [activeButton, setActiveButton] = useState(defaultButton);

  const handleClick = (index, onClick) => {
    setActiveButton(index);
    onClick();
  };

  return (
    <Styles.Container data-testid="ToggleButtons" $hasTopMargin={hasTopMargin}>
      <>
        {buttons.map((button, index) => (
          <Styles.ToggleButton
            type="button"
            title={button.title}
            aria-label={button.ariaLabel}
            key={index}
            onClick={() => handleClick(index, button.onClick)}
            $isActive={activeButton == index}
          >
            {button.label}
          </Styles.ToggleButton>
        ))}
      </>
    </Styles.Container>
  );
};

export default ToggleButtons;
