import React, { useEffect, useState } from 'react';
import { BudgetGameProps } from './BudgetGame.types';
import * as Styles from './BudgetGame.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import BudgetSlider from '../../components/BudgetSlider/BudgetSlider';
import Heading from '../../components/Heading/Heading';
import HeadingWithIcon from '../../components/HeadingWithIcon/HeadingWithIcon';

/**
 * A budget game with sliders to set your own budget
 */
const BudgetGame: React.FunctionComponent<BudgetGameProps> = ({
  budgetServices = [],
  totalAllowed,
  onSubmitResults,
  onTryAgain,
}) => {
  const [viewResults, setViewResults] = useState<boolean>(false);
  const [budgetValues, setBudgetValues] = useState(
    budgetServices.map((budgetService) => budgetService.initialValue ?? 0)
  );
  const [totalBudget, setTotalBudget] = useState<number>(0);

  const calculateTotal = (): number => {
    return budgetValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };

  const handleValueChange = (value: number, index: number) => {
    const valuesToUpdate = budgetValues.map((budgetValue, valueIndex) => {
      if (valueIndex === index) {
        return value;
      } else {
        return budgetValue;
      }
    });
    setBudgetValues(valuesToUpdate);
  };

  // Set the total each time the budgetValues changes
  useEffect(() => {
    const updatedTotal = calculateTotal();
    setTotalBudget(updatedTotal);
  }, [budgetValues]);

  const handleSubmitResults = () => {
    setViewResults(true);

    if (onSubmitResults) {
      onSubmitResults();
    }
  };

  const handleTryAgain = () => {
    setViewResults(false);

    if (onTryAgain) {
      onTryAgain();
    }
  };

  return (
    <Styles.Container data-testid="BudgetGame">
      <Row>
        <Column small="full" medium="full" large="full">
          <Styles.TotalContainer>
            <Styles.TargetAmount>Target: {totalAllowed}%</Styles.TargetAmount>
            <Styles.TotalAmount
              $current={totalBudget}
              $target={totalAllowed}
              aria-live="polite"
              data-testid="BudgetTotal"
            >
              Total: {totalBudget}%
            </Styles.TotalAmount>
          </Styles.TotalContainer>
        </Column>
        <Column small="full" medium="full" large="full">
          <Styles.Totalizer $current={totalBudget} $target={totalAllowed}>
            <Styles.Target $current={totalBudget} $target={totalAllowed} />
            <Styles.OverBudget $current={totalBudget} $target={totalAllowed} />
          </Styles.Totalizer>
        </Column>
        {totalBudget <= totalAllowed && (
          <Column small="full" medium="full" large="full">
            {!viewResults ? (
              <Styles.ButtonContainer>
                <Styles.SubmitResults type="button" onClick={handleSubmitResults}>
                  See your results
                </Styles.SubmitResults>
              </Styles.ButtonContainer>
            ) : (
              <Row>
                {budgetServices.map((budgetService, index) => (
                  <Column key={index} small="full" medium="one-half" large="one-half">
                    <Styles.ServiceSummary>
                      {budgetService.icon ? (
                        <HeadingWithIcon text={budgetService.title} icon={budgetService.icon} level={3} />
                      ) : (
                        <Heading level={3} text={budgetService.title} />
                      )}
                      <Styles.ServiceResult>
                        <Styles.ServiceValue>{budgetValues[index]}%</Styles.ServiceValue>
                        <Styles.ServiceChange
                          $change={budgetValues[index] - budgetService.initialValue < 0 ? 'negative' : 'positive'}
                        >
                          {budgetValues[index] - budgetService.initialValue}% change
                        </Styles.ServiceChange>
                      </Styles.ServiceResult>
                    </Styles.ServiceSummary>
                  </Column>
                ))}
                <Column small="full" medium="full" large="full">
                  <Styles.ButtonContainer>
                    <Styles.Retry type="button" onClick={handleTryAgain}>
                      Try again
                    </Styles.Retry>
                  </Styles.ButtonContainer>
                </Column>
              </Row>
            )}
          </Column>
        )}
        {!viewResults && (
          <>
            {budgetServices.map((budgetService, index) => (
              <Column small="full" medium="one-half" large="one-half" key={index}>
                <BudgetSlider {...budgetService} onChange={handleValueChange} index={index} />
              </Column>
            ))}
          </>
        )}
      </Row>
    </Styles.Container>
  );
};

export default BudgetGame;
