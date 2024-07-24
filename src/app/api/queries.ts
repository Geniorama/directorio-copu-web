import { gql } from "@apollo/client";

export const GetCompaniesBasic = {
  query: gql`
    query GetCompaniesBasic {
      companies(filters: { plan: { slug: { eq: "basico" } } }) {
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
            countries {
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
          }
        }
      }
    }
  `,
};

export const GetCompaniesPro = {
  query: gql`
    query GetCompaniesPro {
      companies(filters: { plan: { slug: { eq: "pro" } } }) {
        data {
          id
          attributes {
            name
            slug
            plan {
              data {
                attributes {
                  title
                  slug
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
          }
        }
      }
    }
  `,
};

export const GetCompaniesPremium = {
  query: gql`
    query GetCompaniesPremium {
      companies(filters: { plan: { slug: { eq: "premium" } } }) {
        data {
          id
          attributes {
            name
            slug
            youtubeReelId
            plan {
              data {
                attributes {
                  title
                  slug
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
          }
        }
      }
    }
  `,
};

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

export const GetCountries = {
  query: gql`
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
  `,
};

export const GetSectors = {
  query: gql`
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
  `,
};

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
          nit
          emails {
            email
          }
          phones {
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
