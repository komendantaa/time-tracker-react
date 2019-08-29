import posed from 'react-pose';

export const AuthForm = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1000 } },
});
