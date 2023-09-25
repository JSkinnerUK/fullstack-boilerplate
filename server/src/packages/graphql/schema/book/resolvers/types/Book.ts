import { User } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Book = {
  author: async (parent: Parent, _: Args, context: Context): Promise<User | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.book.findFirst({ where: { id: id } }).author();
  }
};

export default Book;
