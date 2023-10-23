import { Author, Category, Ebook } from "@prisma/client";

interface IEbook extends Ebook {
  authors: Author[];
  categories: Category[];
}
