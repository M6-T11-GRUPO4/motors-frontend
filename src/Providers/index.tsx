import { ModalProvider } from "./modal";
import { IProviderProps, ProductProvider } from "./product";

const Providers = ({ children }: IProviderProps) => {
  return <ProductProvider><ModalProvider>{children}</ModalProvider></ProductProvider>;
};

export default Providers;
