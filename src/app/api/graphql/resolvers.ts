import { Context } from "./context";

export const resolvers = {
  Query: {
    ebooks: async (parent: any, args: any, context: Context) => {
      return await context.prisma?.ebook.findMany();
    },
    ebook: async (parent: any, args: any, context: Context) => {
      return await context.prisma?.ebook.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Ebook: {
    authors: async (parent: any, args: any, context: Context) => {
      return await context.prisma?.author.findMany({
        where: {
          ebookId: parent.id,
        },
      });
    },
  },
  Mutation: {
    addEbook: async (parent: any, args: any, context: Context) => {
      return await context.prisma?.ebook.create({
        data: {
          title: args.title,
          image_url: args.image_url,
          link: args.link,
        },
      });
    },
    updateEbook: async (parent: any, args: any, context: Context) => {
      return await context.prisma?.ebook.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          image_url: args.image_url,
          link: args.link,
        },
      });
    },
    deleteEbook: async (parent: any, args: any, context: Context) => {
      return await context.prisma?.ebook.delete({
        where: {
          id: args.id,
        },
      });
    },
    addAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma?.author.create({
        data: {
          ebookId: args.ebookId,
          name: args.name,
        },
      });
    },
    deleteAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma?.author.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};
