import ArticleContent from "@/components/ArticleContent";
import ArticleTitle from "@/components/ArticleTitle";
import React from "react";

export default function AutoblocksArticle() {
    return (
        <>
            {/* Title */}
            <ArticleTitle
                title="Autoblocks"
                subtitle="for Dungeons and Dragons 5th Edition by Wizards of the Coast."
            />

            {/* Introduction */}
            <section id="intro">
                <ArticleContent img="/images/autoblocks/autoblocks-thumbnail.png">
                    <p>
                        Using <span className="font-bold text-secondary">Autoblocks</span>, you can do the following:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            simulate rolling any number of dice, with any number of sides, and with any modifier
                        </li>
                        <li>
                            view a list of statblocks by their names (library):
                            <ul className="list-disc pl-6">
                                <li>
                                    view statblock details
                                </li>
                                <li>
                                    add custom statblocks
                                </li>
                                <li>
                                    delete statblocks
                                </li>
                            </ul>
                        </li>
                        <li>
                            view a list of NPCs by their names and hit points (encounter):
                            <ul className="list-disc pl-6">
                                <li>
                                    auto roll actions, initiatives, or ability checks
                                </li>
                                <li>
                                    track and edit hit points
                                </li>
                            </ul>
                        </li>
                        <li>
                            save and load your libraries and encounters to a file of your choosing
                        </li>
                    </ul>
                </ArticleContent>
            </section>
        </>
    );
}