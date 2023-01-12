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
      <span className="font-semibold font-inter text-sm text-red-600">{errors[valueRegister]?.message as string}</span>
    </div>
  );
};