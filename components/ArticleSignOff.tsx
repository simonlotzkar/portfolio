import React from 'react'
import ArticleContent from './ArticleContent'
import { myName, myTitle } from "@/data";

interface ArticleSignOffProps {
    date: string;
}

/**
 * Displays a sign off with the myName/Title data and the given
 * date the article was written.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} [props.date] - Date to show when article was written.
 * @returns {JSX.Element} The rendered article sign off component.
 *
 * @author SimonLotzkar
 */
const ArticleSignOff: React.FC<ArticleSignOffProps> = ({ date }) => {
    return (
        <div className="py-8">
            <ArticleContent title="Thanks for reading!">
                <div className="">
                    <p>Written by <span className="font-bold text-secondary">{myName}</span> on <span className="font-light text-secondary-light">{date}</span></p>
                    <p className="font-thin italic text-primary-light">{myTitle}</p>
                </div>
            </ArticleContent>
        </div>
    );
}

export default ArticleSignOff;