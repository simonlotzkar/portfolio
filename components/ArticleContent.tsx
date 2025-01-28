import React from "react";
import Image from "next/image";

interface ArticleContentProps {
    children?: React.ReactNode;
    title?: string;
    img?: string;
    alt?: string;
    className?: string;
}

/**
 * Displays a distinct part of content in an article.
 * Can have a title, image, and image caption.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the article.
 * @param {string} [props.title] - The title of the article.
 * @param {string} [props.img] - The URL of the image to be displayed in the article.
 * @param {string} [props.alt] - The caption of the image to be displayed below it.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 * @returns {JSX.Element} The rendered article content component.
 *
 * @author SimonLotzkar
 */
const ArticleContent: React.FC<ArticleContentProps> = ({ children, title, img, alt, className }) => {
    return (
        <div className={`article-content flex flex-col px-4 max-w-2xl mx-auto ${className}`}>

            {/* Optional Text: Content title. */}
            {title && <h1 className="text-xl font-bold py-1">{title}</h1>}

            {/* Optional Component: Content body. */}
            {children}

            {/* Optional image: Content image. */}
            {img && (
                <div className="flex flex-col items-center pt-4">
                    <Image width="700" height="300"
                        src={img}
                        alt={alt || title + " image" || "Article image"}
                        className="shadow-2xl w-xl h-auto max-h-96 object-cover"
                    />
                    {alt && (
                        <p className="pb-2 font-light text-sm">{alt}</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default ArticleContent