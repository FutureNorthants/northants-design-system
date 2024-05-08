import React, { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { RateThisPageProps, RatingValues } from './RateThisPage.types';
import * as Styles from './RateThisPage.styles';
import AlertBannerService from '../AlertBannerService/AlertBannerService';
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
  isError = false,
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
      Email: '',
      BarriersOrIssues: '',
    },
    mode: 'onSubmit',
  });
  const watchIsHelpful = watch('IsHelpful');
  const [showQuestion, setShowQuestion] = useState<boolean>(false);
  const [showFullForm, setShowFullForm] = useState<boolean>(false);
  const [showSubmit, setShowSubmit] = useState<boolean>(true);
  const recaptchaKey: string = process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? '';
  const recaptchaContainerId = 'recaptchaContainer';
  const fullFormRef = useRef(null);

  /**
   * called when captcha succeeds
   */
  const successCallback = (response) => {
    setValue('ReCaptcha', response);
    setIsLoading(false);
    handleSubmit((data) => onSubmit(data))();
  };

  const errorCallback = () => {
    setIsLoading(false);
  };

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
      setShowSubmit(true);
    }
  }, [watchIsHelpful]);

  useEffect(() => {
    if (showFullForm) {
      //Scroll to top of form
      const rect = fullFormRef.current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;
      const goTo = rect.top + scrollTop;
      window.scrollTo({
        top: goTo,
        behavior: 'smooth',
      });
    }
  }, [showFullForm]);

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
                    <p>You may have comments about the quality of the service that's been provided. For example:</p>
                    <ul>
                      <li>I have waited too long for something to happen</li>
                      <li>I'm struggling to contact the service</li>
                      <li>I don't think I have been treated fairly</li>
                      <li>I feel as if I have been misled</li>
                    </ul>
                    <Styles.QuestionButton>
                      <Button url={complaintsFormLink}>I have a comment or complaint about this service</Button>
                    </Styles.QuestionButton>
                  </Styles.QuestionContainer>
                </Column>
                <Column small="full" medium="full" large="one-half">
                  <Styles.QuestionContainer>
                    <Styles.QuestionTitle>Content</Styles.QuestionTitle>
                    <p>You may have comments about the content on the webpage. For example:</p>
                    <ul>
                      <li>The information on this page is difficult to understand</li>
                      <li>This page isn't giving me the information I need</li>
                      <li>This page contains information that is wrong or out of date</li>
                      <li>This page could have been written or presented better</li>
                    </ul>
                    <p>Your feedback will help us improve our website and the content we include.</p>
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
                  <fieldset aria-describedby="HowEasyToFindLegend" ref={fullFormRef}>
                    <Styles.Legend id="HowEasyToFindLegend">
                      How easy was it to find what you were looking for?
                    </Styles.Legend>
                    <Styles.Hint>1 being very easy and 5 being extremely difficult.</Styles.Hint>
                    <Controller
                      name="HowEasyToFind"
                      control={control}
                      rules={{ pattern: /^[1-5]+$/i, required: true }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          {errors.HowEasyToFind && (
                            <Styles.FormErrorText id="HowEasyToFindError">
                              <Styles.Hidden>Error:</Styles.Hidden> The field how easy is it to find what you are
                              looking for is required.
                            </Styles.FormErrorText>
                          )}
                          {RatingValues.map((ratingValue, index) => (
                            <RadioCheckboxInput
                              key={index}
                              value={ratingValue.value}
                              label={ratingValue.label}
                              checked={String(value) == ratingValue.value}
                              name="HowEasyToFind"
                              singleSelection={true}
                              onChange={onChange}
                              isErrored={errors.HowEasyToFind ? true : false}
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
                      rules={{ pattern: /^[1-5]+$/i, required: true }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          {errors.HowEasyToUnderstand && (
                            <Styles.FormErrorText id="HowEasyToUnderstandError">
                              <Styles.Hidden>Error:</Styles.Hidden> The field how easy was this content to understand is
                              required.
                            </Styles.FormErrorText>
                          )}
                          {RatingValues.map((ratingValue, index) => (
                            <RadioCheckboxInput
                              key={index}
                              value={ratingValue.value}
                              label={ratingValue.label}
                              checked={String(value) == ratingValue.value}
                              name="HowEasyToUnderstand"
                              singleSelection={true}
                              onChange={onChange}
                              isErrored={errors.HowEasyToUnderstand ? true : false}
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
                    rules={{ maxLength: 500, required: true }}
                    render={({ field: { onChange, value } }) => (
                      <>
                        {errors.BarriersOrIssues && (
                          <Styles.FormErrorText id="BarriersOrIssuesError">
                            <Styles.Hidden>Error:</Styles.Hidden> The field did you come across any barriers or issues
                            with this webpage is required.
                          </Styles.FormErrorText>
                        )}
                        <Textarea
                          id="BarriersOrIssues"
                          name="BarriersOrIssues"
                          value={value}
                          placeholder=""
                          onChange={onChange}
                          isErrored={errors.BarriersOrIssues ? true : false}
                          isFullWidth
                        />
                      </>
                    )}
                  />
                </Column>

                <Column small="full" medium="full" large="full">
                  <Styles.Label htmlFor="HowCanWeImprove">How could this page be improved? (optional)</Styles.Label>
                  <Controller
                    name="HowCanWeImprove"
                    control={control}
                    rules={{ maxLength: 500 }}
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
                      maxLength: 150,
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
            {isError && (
              <Column small="full" medium="full" large="full">
                <AlertBannerService>
                  <p>An error has occurred.</p>
                </AlertBannerService>
              </Column>
            )}
          </Row>
        </form>
      )}
      <div id={recaptchaContainerId} className="g-recaptcha" />
    </Styles.FormContainer>
  );
};

export default RateThisPage;
