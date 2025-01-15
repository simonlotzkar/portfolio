import React from "react";

interface ArticleTitleProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

/**
 * Displays the title and subtitle styled for an article.
 *
 * @param {ArticleTitleProps} props - The props for the component.
 * @param {string} [props.title] - The title of the article.
 * @param {string} [props.subtitle] - The subtitle of the article.
 * @param {string} [props.className] - Additional class names for styling.
 * @returns {JSX.Element} The rendered component.
 *
 * @component
 *
 * @author Simon Lotzkar
 */
const ArticleTitle: React.FC<ArticleTitleProps> = ({ title, subtitle, className}) => {
    return (
        <section id="title" className={className}>
            {/* Text: Title. */}
            {title && <h1 className="text-4xl font-bold pt-5 text-center text-secondary">{title}</h1>}
            {/* Text: Subtitle. */}
            {subtitle && <h2 className="text-2xl font-bold py-2 text-center text-accent">{subtitle}</h2>}
        </section>
    )
}

export default ArticleTitle