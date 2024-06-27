export type Country = {
    id: string | number,
    code: string,
    name: string,
}

export type Tag = {
    id: string,
    title: string,
    slug: string,
}

export type Plan = {
    id: string,
    name: string,
    price?: number,
    sufixPrice?: string,
    description?: string,
    features?: []
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
    primaryColor?: string,
    secondaryColor?: string,
    reel?: string,
}