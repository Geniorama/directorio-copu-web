export type Country = {
    id: string | number,
    slug: string,
    name: string,
    cities?: City[]
}

export type City = {
    slug: string,
    name: string,
    country: Country
}

export type Tag = {
    id: string,
    name: string,
    slug: string,
}

export type Plan = {
    id: string | number,
    slug: string,
    name: string,
    price?: number,
    link?: string,
    sufixPrice?: string,
    description?: string,
    features?: string
}

export type Sector = {
    id: string,
    name: string,
    slug: string,
}

export type Member = {
    name: string,
    image?: {
        url: string,
        alternativeText?: string
    },
    position?: string
}

export type Award = {
    name: string,
    image: {
        url: string,
        alternativeText?: string
    },
}

export type Accreditation = {
    name: string,
    url?: string,
    documentUrl?: string,
    image:{
        url: string,
        alternativeText?: string
    }
}

export type Company = {
    id: string | number,
    name: string,
    slug: string,
    slogan?: string,
    description?: string,
    logoLight?: string,
    logoDark?: string,
    cover?: string,
    countries?: Country[],
    cities?: City[],
    tags?: Tag[],
    plan?: Plan,
    nit?: string,
    sectors?: Sector[],
    background?: string,
    reel?: string,
    clients?: [{name?: string, url: string}],
    work?: [{name?: string, url: string}],
    socialMedia?: [{name?: string, icon?: string, url?: string}],
    webSite?: string,
    emails?: [{email?: string}],
    phones?: [{phoneNumber?: string, link?: string}],
    type?: Type,
    specialities?: string,
    map?: string,
    team?: Member[],
    awards?: Award[],
    accreditations?: Accreditation[]
}

export type Type = {
    title?: string,
    slug?: string
}