export type Country = {
    id: string | number,
    slug: string,
    name: string,
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
    phones?: [{phoneNumber?: string, link?: string}]
    type?: Type
}

export type Type = {
    title?: string,
    slug?: string
}