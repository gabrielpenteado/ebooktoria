export const typeDefs = `#graphql
  type Query {
    ebooks: [Ebook!]
    ebook(id: ID): Ebook
  }

  type Ebook {
  id:         ID!     
  title:      String!
  image_url:  String!
  link:       String!
  description: String!
  createAt:   String!   
  updateAt:   String!  
  authors:    [Author!]
  categories: [Category!]
  }

  type Author {
    id: ID!
    authorName: String!
    ebookId: String
  }

  type Category {
    id: ID!
    categoryName: String!
    ebookId: String
  }

  type Mutation {
    addEbook(image_url: String!, title: String!, link: String!, description: String!):  Ebook
    updateEbook(id: ID!, title: String, image_url: String, link: String, description: String): Ebook
    deleteEbook(id: ID!): Ebook
    addAuthor(ebookId: ID!, authorName: String!): Author
    deleteAuthor(id: ID!): Author
    addCategory(ebookId: ID!, categoryName: String!): Category
    deleteCategory(id: ID!): Category
  }
`;
