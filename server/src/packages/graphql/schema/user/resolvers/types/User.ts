import { Book } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const User = {
  books: async (parent: Parent, _: Args, context: Context): Promise<Book[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.user.findFirst({ where: { id } }).books();
  }
};

export default User;
