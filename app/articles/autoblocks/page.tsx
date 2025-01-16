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
            </section>

            {/* Section: Screens and Features */}
            <section id="features">

                {/* Text: Subtitle. */}
                <ArticleTitle subtitle="Screens and Features" className="pt-2" />

                {/* Content: Main Menu. */}
                <ArticleContent img="/images/autoblocks/autoblocks-home.png" alt="Main Menu">
                    <p>The home screen has access to the dice roller, library, encounter, and is where the user can saving and load their data.</p>
                </ArticleContent>

                {/* Content: Diceroller. */}
                <ArticleContent img="/images/autoblocks/autoblocks-diceroller.png" alt="Custom Dice Roller">
                    <p>The dice roller is a separate window that opens and has a temporary log of all rolls made with it. The rolls can be configured by the number of dice, the sides of the dice, and the modifier to add to each roll.</p>
                </ArticleContent>

                {/* Content: Encounter (list). */}
                <ArticleContent img="/images/autoblocks/autoblocks-encounter2.png" alt="Encounter">
                    <p>The encounter screen has a list of NPCs, a roll log, and an actions list. There's also a few functions while selecting one or more NPCs such as "Roll Initiative" that will output the result to the roll log. HP tracking works the same way. The actions are populated from each NPC and multiple can be selected and rolled at once.</p>
                </ArticleContent>

                {/* Content: Encounter (npc). */}
                <ArticleContent img="/images/autoblocks/autoblocks-encounter1.png" alt="Encounter - NPC Selected">
                    <p>After selecting an NPC, their checks can be rolled without having to select them again and the actions window narrows to just what belongs to this NPC.</p>
                </ArticleContent>

                {/* Content: Library. */}
                <ArticleContent img="/images/autoblocks/autoblocks-library.png" alt="Library - Adding NPCs">
                    <p>From the library screen you can manage your statblocks. Each statblock represents an NPC and can be added into the current encounter.</p>
                </ArticleContent>

                {/* Content: Creator. */}
                <ArticleContent img="/images/autoblocks/autoblocks-creator.png" alt="Statblock Creator">
                    <p>The statblock creator has fields and settings that allow you to create any statblock within the rules of 5e. Any manditory fields are highlighted in red. Warnings are displayed when trying to create a stablock with invalid data such as a negative number of dice.</p>
                </ArticleContent>

                {/* Content: Loading. */}
                <ArticleContent img="/images/autoblocks/autoblocks-loading.png" alt="Main Menu - Loading File">
                    <p>Both the library and encounter can be saved and loaded to/from file. The file type is .json and allows users to easily edit their data with a text editor.</p>
                </ArticleContent>
            </section>

            {/* Section: History of project. */}
            <section id="history">

                {/* Text: Subtitle. */}
                <ArticleTitle subtitle="Development Process" className="pt-2" />

                {/* Content: Main Menu. */}
                <ArticleContent img="/images/autoblocks/" alt="">
                    <p>...</p>
                </ArticleContent>
            </section>

            {/* Section: Future plans. */}
            <section id="future">

                {/* Text: Subtitle. */}
                <ArticleTitle subtitle="Future Plans" className="pt-2" />

                {/* Content: Main Menu. */}
                <ArticleContent img="/images/autoblocks/" alt="">
                    <p>I really love what this app can do, however the UI is very crude and there's limitations such as having just one encounter loaded at once. The biggest thing though is that there are quite a few mechanics that aren't automated such as critical hits and saving throws. I'd love to rebuild this in Next.js or another web framework and resolve these issues.</p>
                </ArticleContent>
            </section>
        </>
    );
}