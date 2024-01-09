import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react";

type ModalContextType = {
	isModalOpen: boolean;
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
	toggleModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
	isModalOpen: false,
	setIsModalOpen: () => {},
	toggleModal: () => {},
});

export const useModal = () => useContext(ModalContext);

type ModalProviderProps = {
	children: ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => setIsModalOpen(!isModalOpen);

	return (
		<ModalContext.Provider value={{ isModalOpen, setIsModalOpen, toggleModal }}>
			{children}
		</ModalContext.Provider>
	);
};
