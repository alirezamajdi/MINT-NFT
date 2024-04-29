import { createContext, useContext, useState, ReactNode } from 'react';

interface IContext {
  modalName: string;
  toggleModal: (arg: string) => void;
  close: () => void;
}
const Context = createContext<IContext | null>(null);

export function useModalContext() {
  return useContext(Context);
}
const Provider = ({ children }: { children: ReactNode }) => {
  const [modalName, setModal] = useState<string>('close');

  const toggleModal = (arg: string) => {
    setModal((prevState) => (prevState === arg ? 'close' : arg));
  };

  const close = () => {
    setModal('close');
  };

  return (
    <Context.Provider value={{ modalName, toggleModal, close }}>
      {children}
    </Context.Provider>
  );
};
export default Provider;
