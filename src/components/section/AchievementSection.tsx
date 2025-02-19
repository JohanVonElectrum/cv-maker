import { Achievement } from "@/types/cv.ts";
import ReactMarkdown from "react-markdown";

type AchievementSectionProps = {
    title: string;
    link?: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    achievements: Achievement[];
};

function AchievementSection({ title, link, startDate, endDate, description, achievements }: AchievementSectionProps) {
    const startDateStr = startDate.toLocaleDateString(
        navigator.language,
        {month: "long", year: "numeric"}
    );
    const endDateStr = endDate?.toLocaleDateString(
        navigator.language,
        {month: "long", year: "numeric"}
    ) ?? "Present";
    const date = startDateStr === endDateStr ? startDateStr : `${startDateStr} - ${endDateStr}`;

    return (
        <li className={"achievement-section"}>
            <header>
                <h3>
                    {link && <a href={link} target="_blank" rel="noreferrer">{title}</a>}
                    {!link && title}
                </h3>
                <h4><ReactMarkdown>{description}</ReactMarkdown></h4>
                <p>{date}</p>
            </header>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index}><ReactMarkdown>{achievement}</ReactMarkdown></li>
                ))}
            </ul>
        </li>
    );
}

export default AchievementSection;
