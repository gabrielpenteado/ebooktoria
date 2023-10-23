import { gql } from "@apollo/client";

export const ADD_EBOOK = gql`
  mutation Mutation($image_url: String!, $title: String!, $link: String!) {
    addEbook(image_url: $image_url, title: $title, link: $link) {
      id
      image_url
      link
      title
      updateAt
      createAt
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

export const DELETE_EBOOK = gql`
  mutation Mutation($deleteEbookId: ID!) {
    deleteEbook(id: $deleteEbookId) {
      id
      title
      image_url
      link
    }
  }
`;
