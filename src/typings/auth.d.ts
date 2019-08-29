interface IAuthRegFormProps {
  greeting: string;
  isReg?: boolean;
  error: {code: number, message: string};
  reg_message?: string;
  onFieldChange: (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  toggleModal: () => void;
  onSubmit: () => void;
}
