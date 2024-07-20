import { gql } from "@apollo/client";

export const GetCompaniesBasic = {
  query: gql`
    query GetCompaniesBasic {
      companies(filters: { plan: { id_plan: { eq: "basic" } } }) {
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
                  id_plan
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
      companies(filters: { plan: { id_plan: { eq: "pro" } } }) {
        data {
          id
          attributes {
            name
            slug
            plan {
              data {
                attributes {
                  title
                  id_plan
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
      companies(filters: { plan: { id_plan: { eq: "premium" } } }) {
        data {
          id
          attributes {
            name
            slug
            plan {
              data {
                attributes {
                  title
                  id_plan
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
