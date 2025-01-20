import ArticleContent from "@/components/ArticleContent";
import ArticleTitle from "@/components/ArticleTitle";
import React from "react";

export default function Page() {
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
                    <ul className="space-y-2">
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
            <section id="features" className="space-y-4">

                {/* Text: Subtitle. */}
                <ArticleTitle subtitle="Screens and Features" className="pt-2" />

                {/* Content: Main Menu. */}
                <ArticleContent title="Main Menu" img="/images/autoblocks/autoblocks-home.png" alt="Main Menu">
                    <p>The main menu, or home screen, has access to the dice roller, library, encounter, and is where the user can saving and load their data.</p>
                </ArticleContent>

                {/* Content: Diceroller. */}
                <ArticleContent title="Dice Roller" img="/images/autoblocks/autoblocks-diceroller.png" alt="Custom Dice Roller">
                    <p>The dice roller is a separate window that opens and has a temporary log of all rolls made with it. The rolls can be configured by the number of dice, the sides of the dice, and the modifier to add to each roll.</p>
                </ArticleContent>

                {/* Content: Encounter (list). */}
                <ArticleContent title="Encounter" img="/images/autoblocks/autoblocks-encounter2.png" alt="Encounter">
                    <p>The encounter screen has a list of NPCs, a roll log, and an actions list. There's also a few functions while selecting one or more NPCs such as "Roll Initiative" that will output the result to the roll log. HP tracking works the same way. The actions are populated from each NPC and multiple can be selected and rolled at once.</p>
                </ArticleContent>

                {/* Content: Encounter (npc). */}
                <ArticleContent img="/images/autoblocks/autoblocks-encounter1.png" alt="Encounter - NPC Selected">
                    <p>After selecting an NPC, their checks can be rolled without having to select them again and the actions window narrows to just what belongs to this NPC.</p>
                </ArticleContent>

                {/* Content: Library. */}
                <ArticleContent title="Library" img="/images/autoblocks/autoblocks-library.png" alt="Library - Adding NPCs">
                    <p>From the library screen you can manage your statblocks. Each statblock represents an NPC and can be added into the current encounter.</p>
                </ArticleContent>

                {/* Content: Creator. */}
                <ArticleContent title="Statblock Creator" img="/images/autoblocks/autoblocks-creator.png" alt="Statblock Creator">
                    <p>The statblock creator has fields and settings that allow you to create any statblock within the rules of 5e. Any manditory fields are highlighted in red. Warnings are displayed when trying to create a stablock with invalid data such as a negative number of dice.</p>
                </ArticleContent>

                {/* Content: Loading. */}
                <ArticleContent title="File Browser" img="/images/autoblocks/autoblocks-loading.png" alt="Main Menu - Loading File">
                    <p>Both the library and encounter can be saved and loaded to/from file. The file type is .json and allows users to easily edit their data with a text editor.</p>
                </ArticleContent>
            </section>

            {/* Section: History. */}
            <section id="history" className="space-y-4">

                {/* Text: History subtitle. */}
                <ArticleTitle subtitle="Project History" className="pt-2" />

                {/* Content: History introduction. */}
                <ArticleContent title="First Version">
                    <p>The first thing I did for this project was create a list of mechanics I wanted the software to do. The main idea was to automate NPC combat for D&D and to retrieve knowledge quickly. I then built a basic console version of my app that could do the following:</p>
                    <ol className="A pl-6">
                        <li>
                            A) store/read/edit/create statblocks, and
                        </li>
                        <li>
                            B) turn those statblocks into NPCs that could roll attacks, checks, and track their hp.
                        </li>
                    </ol>
                    <p> After tweaking with this program, I narrowed down the scope until I knew exactly what I wanted it to do.</p>
                </ArticleContent>

                {/* Content: Draft: Main menu. */}
                <ArticleContent title="Frontend Design" img="/images/autoblocks/autoblocks-design-home.png" alt="Main Menu Draft">
                    <p>Before I began planning the backend, I worked on the frontend of my app because my usual approach is to start with what the user will directly interact with. I decided I wanted to split the two broad functions I had identified above into different screens that could be reached via a main menu. I also knew I wanted a custom roller because there is always something you need to roll in D&D that is unexpected.</p>
                </ArticleContent>

                {/* Content: Draft: Library. */}
                <ArticleContent img="/images/autoblocks/autoblocks-design-library.png" alt="Library Draft">
                    <p>For each drafted screen, I included the names of the different panels I imagined I'd need to create and where they would go using Java Swing. I also wanted to keep certain things shared between the screens such as the button panel. I did this to reduce coupling, code reuse, and ensure the ui stays the same on all screens. So my idea was to have a 'slot' for the button panel and just insert whichever I needed depending on the context. I came up with 5: library, encounter, group, and character.</p>
                </ArticleContent>

                {/* Content: Draft: Encounter. */}
                <ArticleContent img="/images/autoblocks/autoblocks-design-encounter.png" alt="Encounter Draft">
                    <p>Here on the encounter screen I had the panels that would provide the remaining 4 contexts for the button panels. In the final version I ended up merging the group and encounter panels. Initially, grouping NPCs was a major feature of my app, but I realised I could accomplish grouping much easier with multi-select in the UI. Everything else stayed pretty much the same in the final version.</p>
                </ArticleContent>

                {/* Content: UML Diagram. */}
                <ArticleContent title="Backend Design" img="/images/autoblocks/autoblocks-uml.png" alt="UML Diagram">
                    <p>This was my initial UML diagram that layed out the different entities in the project and their relationships. I kept things as decoupled as possible using the principles of Object Oriented Programming. I chose to use JSON for persistence so the user can store files and therefore did not need a database.</p>
                </ArticleContent>
            </section>

            {/* Section: Future. */}
            <section id="future" className="space-y-4 pb-10">

                {/* Text: Future subtitle. */}
                <ArticleTitle subtitle="Future Plans" className="pt-2" />

                {/* Content: Future content. */}
                <ArticleContent>
                    <p>I really love what this app can do, however the UI is very crude and there's limitations such as having just one encounter loaded at once. The biggest thing though is that there are quite a few mechanics that aren't automated such as critical hits and saving throws. I'd love to rebuild this as a web app and resolve these issues. Here's my list of features I'd add in the next version:</p>
                    <ul>
                        <li>automate skills</li>
                        <li>automate saving throws</li>
                        <li>automate conditions (quickly try to add immunities, taking immunities into account)</li>
                        <li>add advantage and disadvantage option to all rolls</li>
                        <li>display when rolls are criticals (1 or 20 before modifiers) and double damage automatically</li>
                        <li>add turn tracking that update with initiative rolls</li>
                        <li>redesign hp tracking into 'heal' and 'damage' buttons that take into account resistances and vulnerabilties</li>
                        <li>add temporary hp</li>
                    </ul>
                </ArticleContent>

                <ArticleContent title="Thanks for reading!">
                    <div className="text-center">
                        <p>Written by <span className="font-bold text-secondary">Simon Lotzkar</span> on <span className="font-light text-secondary-light">2025-01-20</span></p>
                    </div>
                </ArticleContent>
            </section>
        </>
    );
}