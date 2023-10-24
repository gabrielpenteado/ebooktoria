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

export const GET_EBOOK = gql`
  query Query($id: ID!) {
    ebook(id: $id) {
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
        ebookId
        id
        name
      }
    }
  }
`;