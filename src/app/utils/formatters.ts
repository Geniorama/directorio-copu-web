import type { Company, Sector, Country } from "../types";

const base_media_url = process.env.NEXT_PUBLIC_MEDIA_URL

export function limitText(text?: string, limit?: number) {
  if (text && limit && text.length > limit) {
    return text.substring(0, limit) + "...";
  }

  return text;
}


export const transformDataCompanies = (data: any[]): Company[] => {
 


  const dataFormat = data.map((item) => ({
    id: item.id,
    name: item.attributes.name,
    slug: item.attributes.slug,
    plan: item.attributes.plan.data.attributes,
    background: item.attributes.background,
    reel: item.attributes.youtubeReelId,
    logoLight: base_media_url + item.attributes.logoLight?.data.attributes.url,
    cover: base_media_url + item.attributes.cover?.data.attributes.url,
    sectors: item.attributes.categories.data.map((cat: any) => ({
      name: cat.attributes.name,
      slug: cat.attributes.slug,
    })),
    tags: item.attributes.tags.data.map((tag: any) => ({
      name: tag.attributes.name,
      slug: tag.attributes.slug,
    })),
    countries: item.attributes.countries.data.map((country: any) => ({
      name: country.attributes.name,
      slug: country.attributes.slug,
    })),
  }));

  return dataFormat;
};

export const transformDataCompany = (item: any): Company => {

  const dataFormat = {
    id: item?.attributes?.slug || '',
    name: item?.attributes?.name || '',
    slug: item?.attributes?.slug || '',
    slogan: item?.attributes.slogan,
    description: item?.attributes.description,
    plan: item?.attributes?.plan?.data?.attributes || null,
    background: item?.attributes?.background || '',
    reel: item?.attributes?.youtubeReelId || '',
    socialMedia: item.attributes.socialMedia,
    webSite: item.attributes.webSite,
    emails: item.attributes.emails,
    phones: item.attributes.phones,
    nit: item.attributes.nit,
    clients: item?.attributes?.clients?.data?.map((client: any) => ({
      name: client.attributes.alternativeText,
      url: base_media_url + client.attributes.url
    })),
    work: item?.attributes?.work?.data?.map((item: any) => ({
      name: item.attributes.alternativeText,
      url: base_media_url + item.attributes.url
    })),
    logoLight: item?.attributes?.logoLight?.data?.attributes?.url ? base_media_url + item.attributes.logoLight.data.attributes.url : '',
    logoDark: item?.attributes?.logoDark?.data?.attributes?.url ? base_media_url + item.attributes.logoDark.data.attributes.url : '',
    cover: item?.attributes?.cover ? base_media_url + item.attributes.cover?.data?.attributes?.url : '',
    sectors: item?.attributes?.categories?.data?.map((cat: any) => ({
      name: cat?.attributes?.name || '',
      slug: cat?.attributes?.slug || '',
    })) || [],
    tags: item?.attributes?.tags?.data?.map((tag: any) => ({
      name: tag?.attributes?.name || '',
      slug: tag?.attributes?.slug || '',
    })) || [],
    countries: item?.attributes?.countries?.data?.map((country: any) => ({
      name: country?.attributes?.name || '',
      slug: country?.attributes?.slug || '',
    })) || [],
  }

  return dataFormat;
};


export const transformDataSectors = (data: any[]): Sector[] => {
  const dataFormat = data.map((sector) => ({
    id: sector.attributes.slug,
    name: sector.attributes.name,
    slug: sector.attributes.slug,
  }));

  return dataFormat;
};

export const transformDataCountries = (data: any[]): Country[] => {
  return data.map((country) => ({
    id: country.attributes.slug,
    name: country.attributes.name,
    slug: country.attributes.slug,
  }));
};