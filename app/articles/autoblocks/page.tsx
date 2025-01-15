import ArticleContent from "@/components/ArticleContent";
import ArticleTitle from "@/components/ArticleTitle";
import React from "react";

export default function AutoblocksArticle() {
    return (
        <>
            {/* Text: Title and Subtitle. */}
            <ArticleTitle
                title="Autoblocks"
                subtitle="for Dungeons and Dragons 5th Edition by Wizards of the Coast."
                className="pt-14"
            />

            {/* Section: Introduction. */}
            <section id="intro">
                <ArticleContent className="pt-2">
                    <p>
                        Using <span className="font-bold text-secondary">Autoblocks</span>, you can do the following:
                    </p>
                    <ul>
                        <li>
                            simulate rolling any number of dice, with any number of sides, and with any modifier
                        </li>
                        <li>
                            view a list of statblocks by their names (library):
                            <ul>
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
                            <ul>
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

                {/* Section: Screens and Features */}
                <section id="features">
                    <ArticleTitle subtitle="Screens and Features" className="pt-2"/>
                    <ArticleContent img="/images/autoblocks/autoblocks-home.png" alt="Home Screen">
                        <p>The home screen has access to the dice roller, library, encounter, and is where the user can saving and load their data.</p>
                    </ArticleContent>
                    <ArticleContent img="/images/autoblocks/autoblocks-diceroller.png" alt="Custom Dice Roller">
                        <p>The dice roller is a separate window that opens and has a temporary log of all rolls made with it. The rolls can be configured by the number of dice, the sides of the dice, and the modifier to add to each roll.</p>
                    </ArticleContent>
                </section>
            </section>
        </>
    );
}