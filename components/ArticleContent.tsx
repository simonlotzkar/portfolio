import React from "react";

interface ArticleContentProps {
    children?: React.ReactNode;
    title?: string;
    img?: string;
}

/**
 * Displays a distinct part of content in an article. Optional title and image.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the article.
 * @param {string} [props.title] - The title of the article.
 * @param {string} [props.img] - The URL of the image to be displayed in the article.
 * @returns {JSX.Element} The rendered article content component.
 *
 * @author SimonLotzkar
 */
const ArticleContent: React.FC<ArticleContentProps> = ({ children, title, img }) => {
    return (
        <div className="flex flex-col p-4 max-w-2xl mx-auto">

            {/* Optional Text: Content title. */}
            {title &&
                <h1 className="text-2xl font-bold mb-4 text-center">
                    {title}
                </h1>
            }

            {/* Optional Component: Content body. */}
            {children}

            {/* Optional image: Content image. */}
            {img && (
                <div className="flex justify-center pt-4">
                    <img
                        src={img}
                        alt={title + "image" || "Article image"}
                        className="shadow-2xl rounded-lg w-xl h-auto max-h-96 object-cover"
                    />
                </div>
            )}
        </div>
    )
}

export default ArticleContent