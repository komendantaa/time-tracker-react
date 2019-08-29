import React from 'react';

const AuthRegForm: React.FC<IAuthRegFormProps> = ({
  greeting,
  isReg,
  onFieldChange,
  toggleModal,
	onSubmit,
	error,
	reg_message
}) => {
  const renderForm = () => {
    if (isReg) {
      return (
        <>
          <span className="auth-greeting black">{greeting}</span>
          <form className="auth-form">
            <>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                onChange={onFieldChange.bind(null, 'newEmail')}
              />
              <input
                type="password"
                name="password"
                placeholder="Your password"
                onChange={onFieldChange.bind(null, 'newPassword')}
              />
							{error ? <span className='auth-error'>{error.message}</span> : null }
							{reg_message ? <span className='auth-message'>{reg_message}</span> : null }
            </>
            <div className="auth-control-container">
              <button
                onClick={onSubmit}
                type="button"
                className="auth-control"
              >
                Register
              </button>
              <span className="auth-splitter">- or -</span>
              <button
                type="button"
                className="auth-control"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </form>
        </>
      );
    }
    return (
      <>
        <span className="auth-greeting">{greeting}</span>
        <form className="auth-form">
          <>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              onChange={onFieldChange.bind(null, 'email')}
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              onChange={onFieldChange.bind(null, 'password')}
            />
						{error ? <span className='auth-error'>{error.message}</span> : null }
          </>
          <div className="auth-control-container">
            <button onClick={onSubmit} type="button" className="auth-control">
              Login
            </button>
            <span className="auth-splitter">- or -</span>
            <button
              type="button"
              className="auth-control"
              onClick={toggleModal}
            >
              Register
            </button>
          </div>
        </form>
      </>
    );
  };
  return renderForm();
};

export default AuthRegForm;
