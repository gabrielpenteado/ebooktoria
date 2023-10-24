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

export const UPDATE_EBOOK = gql`
  mutation Mutation(
    $id: ID!
    $title: String!
    $image_url: String!
    $link: String!
  ) {
    updateEbook(id: $id, title: $title, image_url: $image_url, link: $link) {
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

export const DELETE_EBOOK = gql`
  mutation Mutation($id: ID!) {
    deleteEbook(id: $id) {
      id
      title
      image_url
      link
    }
  }
`;

export const ADD_AUTHOR = gql`
  mutation Mutation($ebookId: ID!, $name: String!) {
    addAuthor(ebookId: $ebookId, name: $name) {
      id
      name
      ebookId
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation Mutation($id: ID!) {
    deleteAuthor(id: $id) {
      id
      name
      ebookId
    }
  }
`;
