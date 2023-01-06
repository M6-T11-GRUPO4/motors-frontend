interface INumber {
  number: number;
}

export const Input = ({ number }: INumber) => {
  return (
    <div className="flex flex-col mb-6">
      <label className="font-inter text-base text-[14px] font-medium leading-[17px] -text-grey-1">
        {number}º Imagem da galeria
      </label>
      <input
        type="url"
        placeholder="Inserir URL da imagem"
        className="inputDefaultModal"
      />
    </div>
  );
};
