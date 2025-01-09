"use client";
import React, { useState, useRef, useEffect } from "react";

interface EmailLinkProps {
    email: string;
    children: React.ReactNode;
}

/**
 * Wraps children in a link that when clicked creates a popup with the provided email
 * already highlighted for copying. Dismisses based on clicking away or on the X.
 *
 * @component
 * @param {EmailLinkProps} props - The props for the EmailLink component.
 * @param {string} props.email - The email address to be displayed in the popup.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the clickable element.
 * @returns {JSX.Element} The rendered EmailLink component.
 *
 * @author SimonLotzkar
 */
const EmailLink: React.FC<EmailLinkProps> = ({ email, children }) => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Display the popup when the button is clicked.
    const handleClick = () => {
        setShowPopup(true);
    };

    // Select the email text when the popup is displayed.
    useEffect(() => {
        if (showPopup && inputRef.current) {
            inputRef.current.select();
        }
    }, [showPopup]);

    // Close the popup when clicking outside of it.
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowPopup(false);
            }
        };

        // Add mouseclick event listener when the popup is displayed.
        if (showPopup) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        // Remove mouseclick event listener when the EmailLink is unmounted.
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showPopup]);

    // Return the EmailLink component
    return (
        <div className="relative">
            {/* Button: When clicked, creates the popup. Wraps children. Rotates on hover. */}
            <div
                onClick={handleClick}
                className="cursor-pointer w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transform transition-transform duration-300 hover:scale-110 hover:rotate-6"
            >
                {children}
            </div>
            {/* Popup: Textbox containing email and close button. */}
            {showPopup && (
                <div
                    ref={popupRef}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 p-3 rounded shadow-lg bg-background flex items-center"
                    style={{ zIndex: 1000 }}
                >
                    {/* Textbox: Email. */}
                    <input
                        ref={inputRef}
                        type="text"
                        value={email}
                        readOnly
                        className="text-background text-sm px-2 py-1 border border-primary rounded w-auto"
                    />
                    {/* Button: Close popup. */}
                    <button
                        onClick={() => setShowPopup(false)}
                        className="ml-2 px-2 py-1 text-background text-sm bg-highlight rounded hover:bg-highlight-light transition-colors"
                    >
                        {/* Icon: X. */}
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
