import {FieldErrors} from "react-hook-form"

interface IInput {
  title: string;
  placeholder: string;
  valueRegister: string;
  register: Function;
  errors: FieldErrors
  valueErrors:string
  defaultValue:string
}

export const NormalInput = ({
  title,
  placeholder,
  register,
  valueRegister,
  errors,
  valueErrors,
  defaultValue
}: IInput) => {
  return (
    <div className="flex flex-col mb-6">
      <label className="font-semibold">{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-72 md:w-96 pl-2 h-10"
        {...register(`${valueRegister}`)}
      />
      <span className="error">{errors[valueErrors]?.message as string}</span>
    </div>
  );
};
