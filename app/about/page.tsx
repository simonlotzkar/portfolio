import ArticleContent from "@/components/ArticleContent";
import ArticleSignOff from "@/components/ArticleSignOff";
import ArticleTitle from "@/components/ArticleTitle";

// Returns age in years from given input date string (format YYYY-MM-DD).
// If not valid input, returns -1.
const AgeCalculator = (date: string) => {
    // My birthdate
    const target = new Date(date);
    if (isNaN(target.getTime())) {
        return (-1);
    }
    // Current date
    const current = new Date();

    // Numerical differences between current date and target date.
    let year = current.getFullYear() - target.getFullYear();
    let month = current.getMonth() - target.getMonth();
    let day = current.getDate() - target.getDate();

    // If birthday hasn't occurred yet, subtract one year.
    if (month < 0 || (month == 0 && day < 0)) {
        year--;
    }

    return year;
}

export default function Page() {
    return (
        <>
            {/* Text: Title and Subtitle. */}
            <ArticleTitle
                title="About Me"
                subtitle="aka: my non-technical portfolio"
                className="pt-14"
            />

            <section id="introduction">
                {/* Text: Introduction */}
                <ArticleContent>
                    <p>Hi there, I'm a {AgeCalculator("1999-07-02")} year old developer from Vancouver Canada! I'm a lifelong local of the city, though I have travelled my fair share both overseas and in the states. I love coding and have been doing it since I was 14. I'm looking for opportunities in software development and IT.</p>
                </ArticleContent>

                {/* Text: Education */}
                <ArticleContent title="Education">
                    <p>I am currently taking a Computer Science program at BCIT in Burnaby, with a graduation date of May 23rd 2025. The program is called Computer Systems Technology (CST) and focuses on the practical skills in Software Engineering. We cover low level practical knowledge such as assembly, machine code, networking, and C. We also cover theory such as discrete math, probability, data structures, algorithm analysis and design. Most of our education is on higher level concepts such as Object Oriented Design, SOLID principles, design patterns, UML, Enterprise development, and Agile methodologies (to name a few).</p>
                </ArticleContent>

                {/* Text: Education */}
                <ArticleContent title="Experience">
                    <p>Currently I work for BCIT as a System Analyst which generally invloves keeping the school's computer labs working and assisting instructors with any technical problems they face. This requires being able to troubleshoot and fix issues quickly and professionally as the classes are often full and the client is stressed to get back on schedule. We have used ServiceNow and Cherwell, so I'm familiar with ticketing and inventory software. I work this job full time in the summer and part time during the school year.</p>
                </ArticleContent>
            </section>

            <section id="adventures">
                {/* Text: Adventure log title */}
                <ArticleTitle subtitle="Adventures" />

                {/* Text: Adventure log intro */}
                <ArticleContent >
                    <p>I enjoy outdoor adventure sports such as mountaineering, skiing, backpacking, and biking. And more often than not, some combination of those together. It's my lifelong goal to complete the seven summits, which means climbing the tallest mountain on each continent. I also would like to accomplish more through-hikes, which are backpacking trips that take long periods of time such as weeks or months. I've accomplished some of these already, feel free to ask me which ones!</p>
                </ArticleContent>
            </section>

            <section id="favourites">
                {/* Text: Favourites subtitle */}
                <ArticleTitle subtitle="Favourites" />

                {/* Text: Favourites intro */}
                <ArticleContent>
                    <p>I'm a massive fan of fiction and storytelling, whether that's video games, books, movies, or even dungeons and dragons. I think you can tell a decent amount about a person by their favourites, so here's some of mine!</p>
                </ArticleContent>

                {/* Text: Books */}
                <ArticleContent title="Books">
                    <ol className="list-decimal pl-6">
                        <li>The Witcher Saga by Andrzej Sapkowski</li>
                        <li>A Song of Ice and Fire by George R.R. Martin</li>
                        <li>Red Rising Saga by Pierce Brown</li>
                        <li>Inheritance Cycle by Christopher Paolini</li>
                        <li>The Heir Chronicles by Cinda Williams Chima</li>
                    </ol>
                </ArticleContent>

                {/* Text: Video games */}
                <ArticleContent title="Video Games">
                    <ol className="list-decimal pl-6">
                        <li>The Legend of Zelda: Twillight Princess by Eiji Aonuma (Nintendo)</li>
                        <li>Dragon Age: Origins by Dan Tudge (Bioware)</li>
                        <li>Witcher 3: The Wild Hunt by Konrad Tomaszkiewicz (CD Projekt Red)</li>
                        <li>Bioshock by Ken Levine (2K)</li>
                        <li>Halo 3 by Joseph Staten (Bungie)</li>
                    </ol>
                </ArticleContent>
            </section>

            {/* Text: Sign off */}
            <ArticleSignOff date="2025-01-20" />
        </>
    );
}