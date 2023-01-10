import { ModalProvider } from "./modal";
import { IProviderProps, ProductProvider } from "./product";
import { UserProvider } from "./user";

const Providers = ({ children }: IProviderProps) => {
  return <UserProvider><ProductProvider><ModalProvider>{children}</ModalProvider></ProductProvider></UserProvider>;
};

export default Providers;
