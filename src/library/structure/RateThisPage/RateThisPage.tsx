import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { RateThisPageProps } from './RateThisPage.types';
import * as Styles from './RateThisPage.styles';
import Input from '../../components/Input/Input';
import FormButton from '../../components/FormButton/FormButton';
import Textarea from '../../components/Textarea/Textarea';
import RadioCheckboxInput from '../../components/RadioCheckboxInput/RadioCheckboxInput';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

enum RatingEnum {
  easy = 'Easy',
  fine = 'Fine',
  hard = 'Hard',
  cantFind = "I couldn't find what I was looking for",
}

enum UnderstandingEnum {
  easy = 'Easy',
  fine = 'Fine',
  hard = 'Hard',
  cantFind = "I couldn't understand the information",
}

enum HelpfulEnum {
  yes = 'Yes',
  no = 'No',
}

interface RateFormInputs {
  HowCanWeImprove: string;
  Email: string;
  HowEasyToFind: RatingEnum;
  HowEasyToUnderstand: UnderstandingEnum;
  IsHelpful: HelpfulEnum;
  TellUsWhy: string;
}

const RateThisPage: React.FunctionComponent<RateThisPageProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm<RateFormInputs>({
    defaultValues: {
      HowCanWeImprove: '',
    },
  });
  const watchIsHelpful = watch('IsHelpful');
  const [showFullForm, setShowFullForm] = useState<boolean>(false);

  useEffect(() => {
    if (watchIsHelpful && String(watchIsHelpful) === 'no') {
      setShowFullForm(true);
    } else {
      setShowFullForm(false);
    }
  }, [watchIsHelpful]);

  return (
    <Styles.Container data-testid="RateThisPage">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column small="full" medium="full" large="full">
            <fieldset aria-describedby={errors.IsHelpful ? 'IsHelpfulError' : 'IsHelpfulLegend'}>
              <Styles.Legend id="IsHelpfulLegend">Is this information helpful?</Styles.Legend>
              <Controller
                name="IsHelpful"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <>
                    {errors.IsHelpful && (
                      <Styles.FormErrorText id="IsHelpfulError">
                        <Styles.Hidden>Error:</Styles.Hidden> The field is this information helpful is required.
                      </Styles.FormErrorText>
                    )}
                    {(Object.keys(HelpfulEnum) as Array<keyof typeof HelpfulEnum>).map((key) => (
                      <RadioCheckboxInput
                        key={key}
                        value={key}
                        label={HelpfulEnum[key]}
                        checked={String(value) == key}
                        name="IsHelpful"
                        singleSelection={true}
                        onChange={onChange}
                        isErrored={errors.IsHelpful ? true : false}
                      />
                    ))}
                  </>
                )}
              />
            </fieldset>
          </Column>

          {showFullForm && (
            <>
              <Column small="full" medium="full" large="full">
                <Styles.Label htmlFor="TellUsWhy">Please tell us why?</Styles.Label>
                <Controller
                  name="TellUsWhy"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Textarea
                      id="TellUsWhy"
                      name="TellUsWhy"
                      value={value}
                      placeholder=""
                      onChange={onChange}
                      isErrored={errors.TellUsWhy ? true : false}
                    />
                  )}
                />
              </Column>

              <Column small="full" medium="full" large="full">
                <fieldset aria-describedby="HowEasyToFindLegend">
                  <Styles.Legend id="HowEasyToFindLegend">
                    How easy was it to find what you were looking for?
                  </Styles.Legend>
                  <Controller
                    name="HowEasyToFind"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <>
                        {(Object.keys(RatingEnum) as Array<keyof typeof RatingEnum>).map((key) => (
                          <RadioCheckboxInput
                            key={key}
                            value={key}
                            label={RatingEnum[key]}
                            checked={String(value) == key}
                            name="HowEasyToFind"
                            singleSelection={true}
                            onChange={onChange}
                          />
                        ))}
                      </>
                    )}
                  />
                </fieldset>
              </Column>

              <Column small="full" medium="full" large="full">
                <fieldset aria-describedby="HowEasyToUnderstandLegend">
                  <Styles.Legend id="HowEasyToUnderstandLegend">How easy was this content to understand?</Styles.Legend>
                  <Controller
                    name="HowEasyToUnderstand"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <>
                        {(Object.keys(UnderstandingEnum) as Array<keyof typeof UnderstandingEnum>).map((key) => (
                          <RadioCheckboxInput
                            key={key}
                            value={key}
                            label={UnderstandingEnum[key]}
                            checked={String(value) == key}
                            name="HowEasyToUnderstand"
                            singleSelection={true}
                            onChange={onChange}
                          />
                        ))}
                      </>
                    )}
                  />
                </fieldset>
              </Column>

              <Column small="full" medium="full" large="full">
                <Styles.Label htmlFor="HowCanWeImprove">How can we improve?</Styles.Label>
                <Controller
                  name="HowCanWeImprove"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Textarea
                      id="HowCanWeImprove"
                      name="HowCanWeImprove"
                      value={value}
                      placeholder=""
                      onChange={onChange}
                      isErrored={errors.HowCanWeImprove ? true : false}
                    />
                  )}
                />
              </Column>

              <Column small="full" medium="full" large="full">
                <Styles.Label htmlFor="Email">
                  Please leave your email below if you are happy for us to contact you further (optional)
                </Styles.Label>
                <Controller
                  name="Email"
                  control={control}
                  rules={{
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      id="Email"
                      name="Email"
                      value={value}
                      placeholder=""
                      onChange={onChange}
                      isErrored={errors.Email ? true : false}
                      errorText={errors.Email && errors.Email.type === 'pattern' ? 'Invalid email address' : null}
                      isFullWidth
                    />
                  )}
                />
              </Column>
            </>
          )}
          <Column small="full" medium="full" large="full">
            <FormButton text="Submit" type="submit" size="large" />
          </Column>
        </Row>
      </form>
    </Styles.Container>
  );
};

export default RateThisPage;
