import { create } from "zustand";

interface AuthModalState {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useAuthModal = create<AuthModalState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

export default useAuthModal;
