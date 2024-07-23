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
    logoLight?: string,
    logoDark?: string,
    cover?: string,
    countries?: Country[],
    tags?: Tag[],
    plan?: Plan,
    sectors?: Sector[],
    background?: string,
    reel?: string,
}