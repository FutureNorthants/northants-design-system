import React, { useState } from 'react';
import { WebChatFormProps } from './WebChatForm.types';
import * as Styles from './WebChatForm.styles';
import Input from '../../components/Input/Input';
import FormButton from '../../components/FormButton/FormButton';
import Textarea from '../../components/Textarea/Textarea';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface WebChatFormInputs {
  im_name: string;
  im_subject: string;
}

const WebChatForm: React.FunctionComponent<WebChatFormProps> = ({ action, show = false }) => {
  const [showForm, setShowForm] = useState(show);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<WebChatFormInputs>({
    defaultValues: {
      im_name: '',
      im_subject: '',
    },
  });
  const onSubmit: SubmitHandler<WebChatFormInputs> = (data) => {
    window.location.href = action + '?im_name=' + data.im_name + '&im_subject=' + data.im_subject;
  };
  const handleFormClose = () => {
    setShowForm(false);
    reset();
  };

  return (
    <Styles.Container data-testid="WebChatForm">
      <Styles.StartChat $showForm={showForm}>
        <Styles.Button onClick={() => setShowForm(true)}>
          <span>Chat</span>
        </Styles.Button>
      </Styles.StartChat>
      <Styles.Modal $showForm={showForm}>
        <Styles.ChatBackground $showForm={showForm} />
        <Styles.FormContainer $showForm={showForm}>
          <Styles.FormHeader>
            <Styles.FormHeading>Start a chat</Styles.FormHeading>
            <Styles.Button onClick={() => handleFormClose()}>X</Styles.Button>
          </Styles.FormHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Styles.Label htmlFor="im_name">Name</Styles.Label>
            <Controller
              name="im_name"
              control={control}
              rules={{ required: { value: true, message: 'The name field is required.' } }}
              render={({ field: { onChange, value } }) => (
                <Input
                  name="im_name"
                  id="im_name"
                  value={value}
                  placeholder=""
                  onChange={onChange}
                  isErrored={errors.im_name ? true : false}
                  errorText={errors.im_name ? errors.im_name.message : null}
                />
              )}
            />

            <Styles.Label htmlFor="im_subject">Subject</Styles.Label>
            <Controller
              name="im_subject"
              control={control}
              rules={{ required: { value: true, message: 'The subject field is required.' } }}
              render={({ field: { onChange, value } }) => (
                <Textarea
                  name="im_subject"
                  id="im_subject"
                  value={value}
                  placeholder=""
                  onChange={onChange}
                  isErrored={errors.im_subject ? true : false}
                  errorText={errors.im_subject ? errors.im_subject.message : null}
                />
              )}
            />
            <FormButton text="Submit" />
          </form>
        </Styles.FormContainer>
      </Styles.Modal>
    </Styles.Container>
  );
};

export default WebChatForm;
