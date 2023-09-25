import { Book } from './types';
import { getBook } from './queries';

const resolvers = {
  Query: {
    getBook
  },
  Book
};

export default resolvers;
