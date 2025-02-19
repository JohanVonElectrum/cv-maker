type CV = {
    fullName: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: Address;
    sections: Section[];
};

export type Address = {
    country: string;
    city: string;
    postalCode: string;
    street: string;
    number: string;
    floor: string;
    door: string;
};

export type Section = {
    title: string;
} & ({
    type: "experience";
    experiences: Experience[];
} | {
    type: "education";
    educations: Education[];
} | {
    type: "skill";
    skills: Skill[];
} | {
    type: "project";
    projects: Project[];
});

type Timed = {
    startDate: Date;
    endDate?: Date;
};

export type Experience = {
    type: "work" | "volunteer" | "internship";
    company: string;
    position: string;
    description?: string;
    achievements: Achievement[];
} & Timed;

export type Education = {
    institution: string;
    degree: string;
    description: string;
} & Timed;

export type Skill = {
    skill: string;
    level: string;
};

export type Project = {
    project: string;
    description: string;
    link?: string;
    achievements: Achievement[];
} & Timed;

export type Achievement = string;

export default CV;
