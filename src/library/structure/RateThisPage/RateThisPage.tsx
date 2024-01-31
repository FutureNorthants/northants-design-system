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
import { useRecaptcha } from 'react-hook-recaptcha';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Button from '../../components/Button/Button';
import Panel from '../../components/Panel/Panel';

const ratingValues = ['1', '2', '3', '4', '5'];

enum HelpfulEnum {
  yes = 'Yes',
  no = 'No',
}

export interface RateFormInputs {
  HowCanWeImprove: string;
  Email: string;
  HowEasyToFind: string;
  HowEasyToUnderstand: string;
  IsHelpful: HelpfulEnum;
  BarriersOrIssues: string;
  ReCaptcha: string;
}

/**
 * A form that allows visitors to rate the website page.
 * If the user answers No to 'Is this information helpful?' then they are presented with more questions.
 * The form is protected by Google recaptcha and needs a recaptcha sitekey to work.
 */
const RateThisPage: React.FunctionComponent<RateThisPageProps> = ({
  onSubmit,
  complaintsFormLink,
  isLoading = false,
  setIsLoading,
  isSuccessful = false,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    register,
    setValue,
  } = useForm<RateFormInputs>({
    defaultValues: {
      HowCanWeImprove: '',
    },
  });
  const watchIsHelpful = watch('IsHelpful');
  const [showQuestion, setShowQuestion] = useState<boolean>(false);
  const [showFullForm, setShowFullForm] = useState<boolean>(false);
  const [showSubmit, setShowSubmit] = useState<boolean>(false);
  const recaptchaKey: string = process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? '';
  const recaptchaContainerId = 'recaptchaContainer';

  /**
   * called when captcha succeeds
   */
  const successCallback = (response) => {
    setValue('ReCaptcha', response);
    handleSubmit((data) => onSubmit(data))();
  };

  const errorCallback = () => {};

  const { recaptchaLoaded, execute, reset } = useRecaptcha({
    containerId: recaptchaContainerId,
    successCallback,
    errorCallback,
    sitekey: recaptchaKey,
    size: 'invisible',
  });

  useEffect(() => {
    if (watchIsHelpful && String(watchIsHelpful) === 'No') {
      setShowQuestion(true);
      setShowSubmit(false);
    } else if (watchIsHelpful && String(watchIsHelpful) === 'Yes') {
      setShowQuestion(false);
      setShowSubmit(true);
      setShowFullForm(false);
    } else {
      setShowQuestion(false);
      setShowFullForm(false);
      setShowSubmit(false);
    }
  }, [watchIsHelpful]);

  const executeCaptcha = (e) => {
    e.preventDefault();
    reset();
    execute();
    setIsLoading(true);
  };

  const handleQuestionButton = (e) => {
    e.preventDefault();
    setShowQuestion(false);
    setShowFullForm(true);
    setShowSubmit(true);
  };

  return (
    <Styles.FormContainer as="section" data-testid="RateThisPage" aria-label="Rate This Page">
      {isSuccessful ? (
        <Panel heading="Thank you for your feedback." />
      ) : (
        <form onSubmit={executeCaptcha}>
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
                      {Object.entries(HelpfulEnum).map(([key, enumValue]) => (
                        <RadioCheckboxInput
                          key={key}
                          value={enumValue}
                          label={HelpfulEnum[key]}
                          checked={String(value) == enumValue}
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

            {showQuestion && (
              <>
                <Column small="full" medium="full" large="one-half">
                  <Styles.QuestionContainer>
                    <Styles.QuestionTitle>Service</Styles.QuestionTitle>
                    <p>You may have comments about the quality of the service that's been provided, for example:</p>
                    <ul>
                      <li>I have waited too long for something to happen</li>
                      <li>I'm struggling to contact the service</li>
                      <li>I don't think I have been treated fairly</li>
                    </ul>
                    <Styles.QuestionButton>
                      <Button url={complaintsFormLink}>I have a comment or complaint about this service</Button>
                    </Styles.QuestionButton>
                  </Styles.QuestionContainer>
                </Column>
                <Column small="full" medium="full" large="one-half">
                  <Styles.QuestionContainer>
                    <Styles.QuestionTitle>Content</Styles.QuestionTitle>
                    <p>Was this information helpful? Your feedback will help us improve our website, for example:</p>
                    <ul>
                      <li>I'm struggling to understand this information</li>
                      <li>This page isn't giving me the information I need</li>
                      <li>There is information that is out of date</li>
                      <li>I feel as if this webpage could be written or presented better</li>
                    </ul>
                    <Styles.QuestionButton>
                      <FormButton
                        text="I have feedback about the information on this page"
                        type="button"
                        size="medium"
                        onClick={handleQuestionButton}
                      />
                    </Styles.QuestionButton>
                  </Styles.QuestionContainer>
                </Column>
              </>
            )}

            {showFullForm && (
              <>
                <Column small="full" medium="full" large="full">
                  <fieldset aria-describedby="HowEasyToFindLegend">
                    <Styles.Legend id="HowEasyToFindLegend">
                      How easy was it to find what you were looking for?
                    </Styles.Legend>
                    <Styles.Hint>1 being very easy and 5 being extremely difficult.</Styles.Hint>
                    <Controller
                      name="HowEasyToFind"
                      control={control}
                      rules={{ pattern: /^[1-5]+$/i }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          {ratingValues.map((ratingValue, index) => (
                            <RadioCheckboxInput
                              key={index}
                              value={ratingValue}
                              label={ratingValue}
                              checked={String(value) == ratingValue}
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
                    <Styles.Legend id="HowEasyToUnderstandLegend">
                      How easy was this content to understand?
                    </Styles.Legend>
                    <Styles.Hint>1 being very easy and 5 being extremely difficult.</Styles.Hint>
                    <Controller
                      name="HowEasyToUnderstand"
                      control={control}
                      rules={{ pattern: /^[1-5]+$/i }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          {ratingValues.map((ratingValue, index) => (
                            <RadioCheckboxInput
                              key={index}
                              value={ratingValue}
                              label={ratingValue}
                              checked={String(value) == ratingValue}
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
                  <Styles.Label htmlFor="BarriersOrIssues">
                    Did you come across any barriers or issues with this webpage?
                  </Styles.Label>
                  <Controller
                    name="BarriersOrIssues"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Textarea
                        id="BarriersOrIssues"
                        name="BarriersOrIssues"
                        value={value}
                        placeholder=""
                        onChange={onChange}
                        isErrored={errors.BarriersOrIssues ? true : false}
                        isFullWidth
                      />
                    )}
                  />
                </Column>

                <Column small="full" medium="full" large="full">
                  <Styles.Label htmlFor="HowCanWeImprove">How could this page be improved?</Styles.Label>
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
                        isFullWidth
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
              <div id={recaptchaContainerId} className="g-recaptcha" />
              <input type="hidden" {...register('ReCaptcha')} />
              {/* Terms are required when recaptcha badge is hidden */}
              <Styles.Terms>
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
                <a href="https://policies.google.com/terms">Terms of Service</a> apply.
              </Styles.Terms>
            </Column>
            {showSubmit && (
              <Column small="full" medium="full" large="full">
                <>
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <FormButton text="Submit" type="submit" size="large" isDisabled={!recaptchaLoaded} />
                  )}
                </>
              </Column>
            )}
          </Row>
        </form>
      )}
    </Styles.FormContainer>
  );
};

export default RateThisPage;
