export type Location = {
    address?: string
    postalCode?: string
    city: string
    countryCode: string
    region: string
}

export type Profile = {
    network: string
    username: string
    url: string
}

export type Basics = {
    name: string
    label: string
    email: string
    phone: string
    summary: string
    location: Location
    profiles: Profile[]
}

export type Education = {
    id: string
    institution: string
    studyType: string
    endDate: string
    location: Location
}

export type Work = {
    id: string
    company: string
    position: string
    website?: string
    startDate: string
    highlights: string[]
    keywords: string[]
    endDate?: string
}

export type Skill = {
    level: string
    keywords: string[]
}

export type Language = {
    language: string
    fluency: string
}

export type Resume = {
    basics: Basics
    education: Education[]
    work: Work[]
    skills: Skill[]
    languages: Language[]
}
