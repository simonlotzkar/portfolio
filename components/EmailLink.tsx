"use client";
import React, { useState, useRef, useEffect } from "react";

interface EmailLinkProps {
    email: string;
    children: React.ReactNode;
}

const EmailLink: React.FC<EmailLinkProps> = ({ email, children }) => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        setShowPopup(true);
    };

    // Highlight the email text when the popup is displayed
    useEffect(() => {
        if (showPopup && inputRef.current) {
            inputRef.current.select();
        }
    }, [showPopup]);

    // Close the popup when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowPopup(false);
            }
        };

        if (showPopup) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showPopup]);

    return (
        <div className="relative">
            <div
                onClick={handleClick}
                className="cursor-pointer w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transform transition-transform duration-300 hover:scale-110 hover:rotate-6"
            >
                {children}
            </div>
            {showPopup && (
                <div
                    ref={popupRef}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 p-3 rounded shadow-lg bg-background flex items-center"
                    style={{ zIndex: 1000 }}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        value={email}
                        readOnly
                        className="text-background text-sm px-2 py-1 border border-primary rounded w-auto focus:outline-none"
                    />
                    <button
                        onClick={() => setShowPopup(false)}
                        className="ml-2 px-2 py-1 text-background text-sm bg-highlight rounded hover:bg-highlight-light transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export { EmailLink };
