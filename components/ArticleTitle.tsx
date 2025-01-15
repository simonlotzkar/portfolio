import React from "react";

interface ArticleTitleProps {
    title: string;
    subtitle: string;
}

/**
 * Displays the title and subtitle of an article.
 *
 * @param {ArticleTitleProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 *
 * @author SimonLotzkar
 */
const ArticleTitle: React.FC<ArticleTitleProps> = ({ title, subtitle }) => {
    return (
        <section id="title" className="pt-14">
            {/* Text: Title. */}
            <h1 className="text-4xl font-bold pt-5 text-center text-secondary">{title}</h1>
            {/* Text: Subtitle. */}
            <h2 className="text-xl font-bold pt-2 text-center text-accent">{subtitle}</h2>
        </section>
    )
}

export default ArticleTitle