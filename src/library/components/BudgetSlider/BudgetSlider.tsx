import React, { useState } from 'react';
import { BudgetSliderProps } from './BudgetSlider.types';
import * as Styles from './BudgetSlider.styles';
import HeadingWithIcon from '../HeadingWithIcon/HeadingWithIcon';
import Heading from '../Heading/Heading';
import Row from '../Row/Row';
import Column from '../Column/Column';

const BudgetSlider: React.FunctionComponent<BudgetSliderProps> = ({
  title,
  summary = '',
  icon,
  minimum,
  maximum,
  initialValue,
  impacts,
  onChange,
  index = 0,
}) => {
  const [value, setValue] = useState<number>(initialValue);
  const handleDecrement = () => {
    if (value > minimum) {
      const updatedValue = value - 1;
      setValue(updatedValue);
      if (onChange) {
        onChange(updatedValue, index);
      }
    }
  };
  const handleIncrement = () => {
    if (value < maximum) {
      const updatedValue = value + 1;
      setValue(updatedValue);
      if (onChange) {
        onChange(updatedValue, index);
      }
    }
  };

  /**
   * Transform a title into a string suitable for a html id
   */
  const createId = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-');
  };

  return (
    <Styles.Container data-testid="BudgetSlider">
      {icon ? (
        <HeadingWithIcon text={title} icon={icon} level={3} subHeading={summary} />
      ) : (
        <>
          <Heading text={title} level={3} />
          <p>{summary}</p>
        </>
      )}

      <Row>
        <Column small="full" medium="full" large="full">
          <Styles.MinMaxContainer>
            <Styles.MinMax>{minimum}%</Styles.MinMax>
            <Styles.MinMax>{maximum}%</Styles.MinMax>
          </Styles.MinMaxContainer>
          <Styles.RangeLabel htmlFor={createId(title)}>{`Range slider for ${title}`}</Styles.RangeLabel>
          <Styles.RangeInput
            type="range"
            min={minimum}
            max={maximum}
            value={value}
            id={createId(title)}
            readOnly
            tabIndex="-1"
            aria-valuetext={`${title} value is ${value} percent`}
            aria-live="polite"
            aria-valuemin={minimum}
            aria-valuemax={maximum}
          />
        </Column>
        <Column small="one-third" medium="one-third" large="one-third">
          <Styles.RangeButton
            onClick={handleDecrement}
            type="button"
            aria-label={`Lower the ${title} value`}
            disabled={value === minimum}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </Styles.RangeButton>
        </Column>
        <Column small="one-third" medium="one-third" large="one-third">
          <Styles.CurrentValue>{value}%</Styles.CurrentValue>
        </Column>
        <Column small="one-third" medium="one-third" large="one-third">
          <Styles.ButtonContainer>
            <Styles.RangeButton
              onClick={handleIncrement}
              type="button"
              aria-label={`Increase the ${title} value`}
              disabled={value === maximum}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </Styles.RangeButton>
          </Styles.ButtonContainer>
        </Column>
        {impacts && (
          <Column small="full" medium="full" large="full">
            <>
              {impacts.map((impact, index) => (
                <React.Fragment key={index}>
                  {value >= impact.minimum && value <= impact.maximum && (
                    <Styles.ImpactContainer $title={impact.title}>
                      <Styles.ImpactTitle>{impact.title}</Styles.ImpactTitle>
                      <Styles.ImpactSummary>{impact.summary}</Styles.ImpactSummary>
                    </Styles.ImpactContainer>
                  )}
                </React.Fragment>
              ))}
            </>
          </Column>
        )}
      </Row>
    </Styles.Container>
  );
};

export default BudgetSlider;
