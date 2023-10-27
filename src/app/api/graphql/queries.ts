import { gql } from "@apollo/client";

export const GET_EBOOKS = gql`
  query Ebooks {
    ebooks {
      id
      image_url
      title
      link
      description
      createAt
      updateAt
      authors {
        id
        authorName
        ebookId
      }
      categories {
        id
        categoryName
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
      description
      createAt
      updateAt
      authors {
        id
        authorName
        ebookId
      }
      categories {
        ebookId
        id
        categoryName
      }
    }
  }
`;
