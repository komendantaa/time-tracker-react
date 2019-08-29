import React, { useState, useEffect } from 'react';
import { AuthForm } from 'animation/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_GREETING, REG_GREETING } from 'constants/titles';
import Modal from 'components/modals/Modal';
import AuthRegForm from 'components/auth/AuthRegForm';
import { loginRequest, registrationRequest } from 'thunks/auth';

const AuthContainer = (props: any) => {
  const [formVisible, toggleVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isRegOpen, toggleRegOpen] = useState(false);
  const login = useDispatch();
  const registration = useDispatch();
  const { auth_error, reg_error, reg_message } = useSelector(
    (state: any) => ({
      reg_error: state.authReducer.reg_error,
      auth_error: state.authReducer.auth_error,
      reg_message: state.authReducer.reg_message,
    })
  );
  useEffect(() => {
		const token = localStorage.getItem('token');
		if(token) props.history.push('/main');
    setTimeout(() => {
      toggleVisible(true);
    }, 1000);
  }, []);
  const onFieldChange = (
    field: string,
    { target }: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = target;
    switch (field) {
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      case 'newPassword': {
        setNewPassword(value);
        break;
      }
      case 'newEmail': {
        setNewEmail(value);
        break;
      }
      default:
        return;
    }
  };
  const onLogin = () => {
		const { history } = props;
    login(loginRequest({ email, password, redirect: history }));
  };
  const onRegistration = () => {
    registration(
      registrationRequest({ email: newEmail, password: newPassword })
    );
  };
  const toggleModal = () => {
    toggleRegOpen(!isRegOpen);
  };
  return (
    <div className="auth-container">
      <AuthForm
        className="auth-form-title"
        pose={formVisible ? 'visible' : 'hidden'}
      >
        <AuthRegForm
          greeting={AUTH_GREETING}
          onFieldChange={onFieldChange}
          onSubmit={onLogin}
          toggleModal={toggleModal}
          error={auth_error}
        />
      </AuthForm>
      <Modal isOpen={isRegOpen} handleClose={toggleModal}>
        <AuthRegForm
          isReg
          greeting={REG_GREETING}
          onFieldChange={onFieldChange}
          onSubmit={onRegistration}
          toggleModal={toggleModal}
          error={reg_error}
          reg_message={reg_message}
        />
      </Modal>
    </div>
  );
};

export default AuthContainer;
