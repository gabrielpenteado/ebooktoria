import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";

import prisma from "../../../../prisma/db";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { Context } from "./context";

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs,
  introspection: process.env.NODE_ENV !== "production", // this config protect the access to apollo server api in Production
});

// req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
