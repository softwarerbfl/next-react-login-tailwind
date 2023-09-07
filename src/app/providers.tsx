import ModalProvider from "./modal/componenets/modal";
interface Props{
    children: React.ReactNode;
};
export default function Providers({children}:Props){
    return <ModalProvider>{children}</ModalProvider>
}