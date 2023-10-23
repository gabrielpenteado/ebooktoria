import { gql } from "@apollo/client";

export const GET_EBOOKS = gql`
  query Ebooks {
    ebooks {
      id
      image_url
      title
      link
      createAt
      updateAt
      authors {
        id
        name
        ebookId
      }
      categories {
        id
        name
        ebookId
      }
    }
  }
`;
