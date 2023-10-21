export const typeDefs = `#graphql
  type Query {
    ebooks: [Ebook]
    ebook(id: ID): Ebook
  }

  type Ebook {
  id:         ID!     
  title:      String!
  image_url:  String!
  link:       String!
  createAt:   String!   
  updateAt:   String!  
  authors:    [Author]
  categories: [Category]
  }

  type Author {
    id: ID!
    name: String!
    ebookId: String
  }

  type Category {
    id: ID!
    name: String!
    ebookId: String
  }

  type Mutation {
    addEbook(image_url: String!, title: String!, link: String!):  Ebook
    updateEbook(id: ID!, title: String, image_url: String, link: String): Ebook
    deleteEbook(id: ID!): Ebook
    addAuthor(ebookId: ID!, name: String!): Author
    deleteAuthor(id: ID!): Author
    addCategory(ebookId: ID!, name: String!): Category
    deleteCategory(id: ID!): Category
  }
`;
