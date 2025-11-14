import React from 'react';
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
  value,
  setValue,
  impacts,
}) => {
  const handleDecrement = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };
  const handleIncrement = () => {
    if (value < max) {
      setValue(value + 1);
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
          <Styles.RangeInput type="range" min={min} max={max} value={value} id={createId(title)} />
        </Column>
        <Column small="one-third" medium="one-third" large="one-third">
          <Styles.RangeButton
            onClick={handleDecrement}
            type="button"
            aria-role={`Lower the ${title} value`}
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
              aria-role={`Increase the ${title} value`}
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
                <>
                  {value >= impact.min && value <= impact.max && (
                    <Styles.ImpactContainer key={index} $title={impact.title}>
                      <Styles.ImpactTitle>{impact.title}</Styles.ImpactTitle>
                      <Styles.ImpactSummary>{impact.summary}</Styles.ImpactSummary>
                    </Styles.ImpactContainer>
                  )}
                </>
              ))}
            </>
          </Column>
        )}
      </Row>
    </Styles.Container>
  );
};

export default BudgetSlider;
