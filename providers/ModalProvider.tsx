"use client";

import AuthModal from "@/components/AuthModel";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";
const ModalProvider: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <AuthModal />
            <UploadModal />
        </>
    );
};

export default ModalProvider;
