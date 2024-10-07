import React, { useRef, useState } from 'react';
import { WebChatFormInputs, WebChatProps } from './WebChat.types';
import * as Styles from './WebChat.styles';
import FormButton from '../../components/FormButton/FormButton';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import DropDownSelect from '../../components/DropDownSelect/DropDownSelect';
import ErrorSummary from '../../components/ErrorSummary/ErrorSummary';
import { DropDownSelectOptionsProps } from '../../components/DropDownSelect/DropDownSelect.types';

const WebChat: React.FunctionComponent<WebChatProps> = ({
  action,
  buttonText,
  queues = [],
  forceUnavailable = false,
  unavailableMessage = 'Webchat is currently unavailable.',
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [enquiryTypes, setEnquiryTypes] = useState<DropDownSelectOptionsProps[]>(queues);
  const webChatFormRef = useRef(null);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<WebChatFormInputs>({
    defaultValues: {
      name: '',
      subject: '',
      enquiryType: '',
    },
  });

  const displayForm = () => {
    setShowForm(true);
    scrollToTop();
  };

  const onSubmit: SubmitHandler<WebChatFormInputs> = (data) => {
    const params = [];

    if (data.enquiryType) {
      params.push({
        key: 'queue',
        value: data.enquiryType,
      });
    }

    if (data.email) {
      params.push({
        key: 'email',
        value: data.email,
      });
    }

    if (data.telephone) {
      params.push({
        key: 'telephone',
        value: data.telephone,
      });
    }

    if (data.reference) {
      params.push({
        key: 'reference',
        value: data.reference,
      });
    }

    params.push({
      key: 'im_name',
      value: data.name,
    });

    params.push({
      key: 'im_subject',
      value: data.subject,
    });

    const query = params
      .map((param) => {
        return `${param.key}=${encodeURIComponent(param.value)}`;
      })
      .join('&');

    window.open(`${action}?${query}`, '_blank');

    setShowForm(false);
  };

  const errorCallback = () => {
    scrollToTop();
  };

  //Scroll to top of form
  const scrollToTop = () => {
    const rect = webChatFormRef.current.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop;
    const goTo = rect.top + scrollTop;
    window.scrollTo({
      top: goTo,
      behavior: 'smooth',
    });
  };

  return (
    <Styles.Container data-testid="WebChat" ref={webChatFormRef}>
      {forceUnavailable ? (
        <p>{unavailableMessage}</p>
      ) : (
        <>
          {showForm ? (
            <div>
              {errors && Object.keys(errors).length > 0 && <ErrorSummary errors={errors} />}
              <form onSubmit={handleSubmit(onSubmit, errorCallback)}>
                <Styles.Label htmlFor="name">Name</Styles.Label>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: { value: true, message: 'The name field is required.' },
                    maxLength: { value: 50, message: 'The name field must not be greater than 50 characters' },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name="name"
                      id="name"
                      value={value}
                      placeholder=""
                      onChange={onChange}
                      isErrored={errors.name ? true : false}
                      errorText={errors.name ? errors.name.message : null}
                      isFullWidth
                      autocomplete="name"
                    />
                  )}
                />

                <Controller
                  name="enquiryType"
                  control={control}
                  rules={{ required: { value: true, message: 'The enquiry type field is required.' } }}
                  render={({ field: { onChange, value } }) => (
                    <DropDownSelect
                      label="Enquiry Type"
                      id="enquiryType"
                      options={enquiryTypes}
                      value={value}
                      onChange={onChange}
                      isErrored={errors.enquiryType ? true : false}
                      errorText={errors.enquiryType ? errors.enquiryType.message : null}
                      hasBottomMargin
                      hasBoldLabel
                    />
                  )}
                />

                <Styles.Label htmlFor="email">Email (optional)</Styles.Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    maxLength: {
                      value: 100,
                      message: 'The email address must not be greater than 100 characters.',
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Invalid email address.',
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name="email"
                      id="email"
                      value={value}
                      placeholder=""
                      onChange={onChange}
                      isErrored={errors.email ? true : false}
                      errorText={errors.email ? errors.email.message : null}
                      isFullWidth
                      autocomplete="email"
                    />
                  )}
                />

                <Styles.Label htmlFor="telephone">Telephone (optional)</Styles.Label>
                <Controller
                  name="telephone"
                  control={control}
                  rules={{
                    maxLength: { value: 20, message: 'The telephone must not be greater than 20 characters.' },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name="telephone"
                      id="telephone"
                      value={value}
                      placeholder=""
                      onChange={onChange}
                      isErrored={errors.telephone ? true : false}
                      errorText={errors.telephone ? errors.telephone.message : null}
                      isFullWidth
                      autocomplete="tel"
                    />
                  )}
                />

                <Styles.Label htmlFor="reference">Reference (optional)</Styles.Label>
                <Controller
                  name="reference"
                  control={control}
                  rules={{ maxLength: { value: 50, message: 'The reference must be less than 50 characters.' } }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      name="reference"
                      id="reference"
                      value={value}
                      placeholder=""
                      onChange={onChange}
                      isErrored={errors.reference ? true : false}
                      errorText={errors.reference ? errors.reference.message : null}
                      isFullWidth
                    />
                  )}
                />

                <Styles.Label htmlFor="subject">Subject</Styles.Label>
                <Controller
                  name="subject"
                  control={control}
                  rules={{
                    required: { value: true, message: 'The subject field is required.' },
                    maxLength: { value: 100, message: 'The name field must not be greater than 100 characters' },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Textarea
                      name="subject"
                      id="subject"
                      value={value}
                      placeholder=""
                      onChange={onChange}
                      isErrored={errors.subject ? true : false}
                      errorText={errors.subject ? errors.subject.message : null}
                      isFullWidth
                    />
                  )}
                />

                <FormButton text="Connect to webchat (opens in new window)" size="large" />
              </form>
            </div>
          ) : (
            <FormButton text={buttonText} onClick={() => displayForm()} size="large" />
          )}
        </>
      )}
    </Styles.Container>
  );
};

export default WebChat;
