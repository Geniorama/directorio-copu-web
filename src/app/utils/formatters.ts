import type { Company, Sector, Country } from "../types";

export function limitText(text?: string, limit?: number) {
  if (text && limit && text.length > limit) {
    return text.substring(0, limit) + "...";
  }

  return text;
}


export const transformDataCompanies = (data: any[]): Company[] => {
  const base_media_url = "http://localhost:1337"


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