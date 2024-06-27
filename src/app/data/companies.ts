import type { Company } from "../types"

export const companies:Company[] = [
    {
       id: '1',
       name: 'Bito Inc',
       slug: 'bito-inc',
       cover: 'https://res.cloudinary.com/geniorama2021/image/upload/v1719518358/Copu/Geniorama/Mask_group_tfgqoc.jpg',
       logoLight: 'https://res.cloudinary.com/geniorama2021/image/upload/v1719518569/Copu/Geniorama/logo-light_bx28ws.png',
       logoDark: 'https://res.cloudinary.com/geniorama2021/image/upload/v1719518565/Copu/Geniorama/logo-dark_ofzxu4.png',
       plan: {name: 'Premium', id: 'premium'},
       sectors: [{id: 'creative', name: 'Creative Acelerator', slug: 'creative-acelerator'}, {id: 'software', name: 'Software Company', slug: 'software-company'}],
       tags: [{id: '1', title: 'UX/UI Design', slug: 'ux-ui-design'}, {id: '2', title: 'Developers', slug: 'developers'}]
    },
]