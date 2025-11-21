import React, { useEffect, useState } from 'react';
import { BudgetGameProps } from './BudgetGame.types';
import * as Styles from './BudgetGame.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import BudgetSlider from '../../components/BudgetSlider/BudgetSlider';

const BudgetGame: React.FunctionComponent<BudgetGameProps> = ({ budgetServices = [], totalAllowed }) => {
  const [budgetValues, setBudgetValues] = useState(budgetServices.map((budgetService) => budgetService.initialValue));

  const calculateTotal = (): number => {
    return budgetValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };
  const [totalBudget, setTotalBudget] = useState<number>(calculateTotal);

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

  return (
    <Styles.Container data-testid="BudgetGame">
      <Row>
        <Column small="full" medium="full" large="full">
          <Styles.TotalContainer>
            <Styles.TargetAmount>Target: {totalAllowed}%</Styles.TargetAmount>
            <Styles.TotalAmount $current={totalBudget} $target={totalAllowed} aria-live="polite">
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
        {budgetServices.map((budgetService, index) => (
          <Column small="full" medium="one-half" large="one-half" key={index}>
            <BudgetSlider {...budgetService} onChange={handleValueChange} index={index} />
          </Column>
        ))}
      </Row>
    </Styles.Container>
  );
};

export default BudgetGame;
