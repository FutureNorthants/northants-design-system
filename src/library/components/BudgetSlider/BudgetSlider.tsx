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
  min,
  max,
  initialValue,
  impacts,
  onChange,
  index = 0,
}) => {
  const [value, setValue] = useState<number>(initialValue);
  const handleDecrement = () => {
    if (value > min) {
      const updatedValue = value - 1;
      setValue(updatedValue);
      onChange(updatedValue, index);
    }
  };
  const handleIncrement = () => {
    if (value < max) {
      const updatedValue = value + 1;
      setValue(updatedValue);
      onChange(updatedValue, index);
    }
  };

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
            <Styles.MinMax>{min}%</Styles.MinMax>
            <Styles.MinMax>{max}%</Styles.MinMax>
          </Styles.MinMaxContainer>
          <Styles.RangeLabel htmlFor={createId(title)}>{`Range slider for ${title}`}</Styles.RangeLabel>
          <Styles.RangeInput
            type="range"
            min={min}
            max={max}
            value={value}
            id={createId(title)}
            readOnly
            tabIndex="-1"
          />
        </Column>
        <Column small="one-third" medium="one-third" large="one-third">
          <Styles.RangeButton
            onClick={handleDecrement}
            type="button"
            aria-label={`Lower the ${title} value`}
            disabled={value === min}
          >
            -
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
              disabled={value === max}
            >
              +
            </Styles.RangeButton>
          </Styles.ButtonContainer>
        </Column>
        {impacts && (
          <Column small="full" medium="full" large="full">
            <>
              {impacts.map((impact, index) => (
                <React.Fragment key={index}>
                  {value >= impact.min && value <= impact.max && (
                    <Styles.ImpactContainer key={index} $title={impact.title}>
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
