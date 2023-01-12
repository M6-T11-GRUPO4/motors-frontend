import {FieldErrors} from "react-hook-form"

interface INumber {
  number: number;
  valueRegister: string;
  register: Function;
  errors: FieldErrors
  valueErrors:string
  defaultValue?:string
}

export const AddInput = ({
  number,
  register,
  valueRegister,
  errors,
  valueErrors,
  defaultValue,
}: INumber) => {
  return (
    <div className="flex flex-col mb-6">
      <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
        {number}º Imagem da galeria
      </label>
      <input
        type="url"
        placeholder="Inserir URL da imagem"
        defaultValue={defaultValue}
        className="inputDefaultModal"
        {...register(`${valueRegister}`)}
      />
      <span className="error">{errors[valueErrors]?.message as string}</span>
    </div>
  );
};
