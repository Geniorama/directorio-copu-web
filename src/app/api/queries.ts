import { gql } from "@apollo/client";

export const GetCompaniesBasic = gql`
  query GetCompaniesBasic($limit: Int, $offset: Int) {
    companies(
      filters: { plan: { slug: { eq: "basico" } } }
      pagination: { limit: $limit, start: $offset }
    ) {
      data {
        id
        attributes {
          name
          slug
          background
          plan {
            data {
              attributes {
                title
                slug
              }
            }
          }
          logoLight {
            data {
              attributes {
                url
              }
            }
          }
          logoDark {
            data {
              attributes {
                url
              }
            }
          }
          countries {
            data {
              attributes {
                name
                slug
              }
            }
          }
          cities {
            data {
              attributes {
                name
                slug
              }
            }
          }
          categories {
            data {
              attributes {
                name
                slug
              }
            }
          }
          tags {
            data {
              attributes {
                name
                slug
              }
            }
          }
          type {
            data {
              attributes {
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const GetCompaniesPro = gql`
  query GetCompaniesPro($limit: Int, $offset: Int) {
    companies(
      filters: { plan: { slug: { eq: "pro" } } }
      pagination: { limit: $limit, start: $offset }
      ) {
      data {
        id
        attributes {
          name
          slug
          specialities
          plan {
            data {
              attributes {
                title
                slug
              }
            }
          }
          logoLight {
            data {
              attributes {
                url
              }
            }
          }
          logoDark {
            data {
              attributes {
                url
              }
            }
          }
          countries {
            data {
              attributes {
                name
                slug
              }
            }
          }
          cities {
            data {
              attributes {
                name
                slug
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                name
                slug
              }
            }
          }
          tags {
            data {
              attributes {
                name
                slug
              }
            }
          }
          type {
            data {
              attributes {
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const GetCompaniesPremium = gql`
  query GetCompaniesPremium($limit: Int, $offset: Int) {
    companies(
      filters: { plan: { slug: { eq: "premium" } } }
      pagination: { limit: $limit, start: $offset }
      ) {
      data {
        id
        attributes {
          name
          slug
          youtubeReelId
          specialities
          slogan
          plan {
            data {
              attributes {
                title
                slug
              }
            }
          }
          logoLight {
            data {
              attributes {
                url
              }
            }
          }
          logoDark {
            data {
              attributes {
                url
              }
            }
          }
          countries {
            data {
              attributes {
                name
                slug
              }
            }
          }
          cities {
            data {
              attributes {
                name
                slug
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                name
                slug
              }
            }
          }
          tags {
            data {
              attributes {
                name
                slug
              }
            }
          }
          type {
            data {
              attributes {
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const GetPlans = {
  query: gql`
    query GetPlans {
      plans {
        data {
          attributes {
            title
            slug
            description
            features
            price
            link
          }
        }
      }
    }
  `,
};

export const GetCountries = gql`
  query GetCountries {
    countries {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`;

export const GetSectors = gql`
  query GetSectors {
    categories {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`;

export const GetTypes = gql`
  query GetTypes {
    types {
      data {
        attributes {
          title
          slug
        }
      }
    }
  }
`;

export const GetCompanyBySlug = gql`
  query GetCompanyBySlug($slug: String!) {
    companies(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          slug
          slogan
          description
          youtubeReelId
          webSite
          specialities
          map
          nit
          emails {
            email
          }
          team {
            name
            position
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          awards {
            name
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          accreditations {
            name
            url
            document {
              data {
                attributes {
                  url
                }
              }
            }
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          phones {
            name
            phoneNumber
            link
          }
          socialMedia {
            name
            url
            icon
          }
          clients {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          work {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          countries {
            data {
              attributes {
                name
                slug
              }
            }
          }
          cities {
            data {
              attributes {
                name
                slug
                country {
                  data {
                    attributes {
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                name
                slug
              }
            }
          }
          tags {
            data {
              attributes {
                name
                slug
              }
            }
          }
          logoLight {
            data {
              attributes {
                url
              }
            }
          }
          logoDark {
            data {
              attributes {
                url
              }
            }
          }
          plan {
            data {
              attributes {
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const GetCitiesByCountrySlug = gql`
  query GetCitiesByCountry($countrySlug: String!) {
    cities(filters: { country: { slug: { eq: $countrySlug } } }) {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`;
