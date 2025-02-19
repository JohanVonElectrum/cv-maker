import {Section as Sect} from "@/types/cv.ts";
import "./Section.css";
import AchievementSection from "@components/section/AchievementSection.tsx";
import ReactMarkdown from "react-markdown";

function Section({section}: { section: Sect }) {
    return (
        <section className={"section"}>
            <h2><ReactMarkdown>{section.title}</ReactMarkdown></h2>
            <ul>
                {section.type === "experience" && <Experience section={section}/>}
                {section.type === "project" && <Project section={section}/>}
                {section.type === "skill" && section.skills.map((skill, index) => (
                    <li key={index}>
                        <b>{skill.skill}</b>: <span>{skill.level}</span>
                    </li>
                ))}
                {section.type === "education" && <Education section={section}/>}
            </ul>
        </section>
    );
}

function Experience({ section }: { section: Extract<Sect, { type: "experience" }> }) {
    return section.experiences.map((experience, index) => (
        <AchievementSection
            key={index}
            title={experience.company}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.position}
            achievements={experience.achievements}
        />
    ));
}

function Project({ section }: { section: Extract<Sect, { type: "project" }> }) {
    return section.projects.map((project, index) => (
        <AchievementSection
            key={index}
            title={project.project}
            link={project.link}
            startDate={project.startDate}
            endDate={project.endDate}
            description={project.description}
            achievements={project.achievements}
        />
    ));
}

function Education({ section }: { section: Extract<Sect, { type: "education" }> }) {
    return section.educations.map((education, index) => (
        <AchievementSection
            key={index}
            title={education.degree}
            startDate={education.startDate}
            endDate={education.endDate}
            description={education.institution}
            achievements={[education.description]}
        />
    ));
}

export default Section;
