import { gql } from "@apollo/client";

export const ADD_EBOOK = gql`
  mutation Mutation(
    $image_url: String!
    $title: String!
    $link: String!
    $description: String!
  ) {
    addEbook(
      image_url: $image_url
      title: $title
      link: $link
      description: $description
    ) {
      id
      image_url
      link
      description
      title
      updateAt
      createAt
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

export const UPDATE_EBOOK = gql`
  mutation Mutation(
    $id: ID!
    $title: String!
    $image_url: String!
    $link: String!
    $description: String!
  ) {
    updateEbook(
      id: $id
      title: $title
      image_url: $image_url
      link: $link
      description: $description
    ) {
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

export const DELETE_EBOOK = gql`
  mutation Mutation($id: ID!) {
    deleteEbook(id: $id) {
      id
      title
      image_url
      link
      description
    }
  }
`;

export const ADD_AUTHOR = gql`
  mutation Mutation($ebookId: ID!, $authorName: String!) {
    addAuthor(ebookId: $ebookId, authorName: $authorName) {
      id
      authorName
      ebookId
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation Mutation($id: ID!) {
    deleteAuthor(id: $id) {
      id
      authorName
      ebookId
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation Mutation($ebookId: ID!, $categoryName: String!) {
    addCategory(ebookId: $ebookId, categoryName: $categoryName) {
      id
      categoryName
      ebookId
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation Mutation($id: ID!) {
    deleteCategory(id: $id) {
      id
      categoryName
      ebookId
    }
  }
`;
