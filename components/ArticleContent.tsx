import React from "react";

interface ArticleContentProps {
    children?: React.ReactNode;
    title?: string;
    img?: string;
    imgCaption?: string;
}

/**
 * Displays a distinct part of content in an article. Optional title, image, and image caption.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the article.
 * @param {string} [props.title] - The title of the article.
 * @param {string} [props.img] - The URL of the image to be displayed in the article.
 * @param {string} [props.imgCaption] - The caption of the image to be displayed below it.
 * @returns {JSX.Element} The rendered article content component.
 *
 * @author SimonLotzkar
 */
const ArticleContent: React.FC<ArticleContentProps> = ({ children, title, img, imgCaption}) => {
    return (
        <div className="flex flex-col p-4 max-w-2xl mx-auto">

            {/* Optional Text: Content title. */}
            {title && <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>}

            {/* Optional Component: Content body. */}
            {children}

            {/* Optional image: Content image. */}
            {img && (
                <div className="flex flex-col items-center pt-4">
                    <img
                        src={img}
                        alt={imgCaption || title + " image" || "Article image"}
                        className="shadow-2xl rounded-lg w-xl h-auto max-h-96 object-cover"
                    />
                    {imgCaption && (
                        <p className="mt-1 font-light text-sm">{imgCaption}</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default ArticleContent