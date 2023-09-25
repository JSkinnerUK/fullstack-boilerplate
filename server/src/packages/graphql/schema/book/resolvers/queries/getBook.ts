import { Book } from '@prisma/client';
import { Parent, Context, QueryGetBookArgs, GetBookInput, GetBookResult } from '../../../../types';

async function getBook(_: Parent, args: QueryGetBookArgs, context: Context): Promise<GetBookResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetBookInput = input;

  const book: Book | null = await prisma.book.findFirst({ where: { id }, include: { author: true } });

  return { book };
}

export default getBook;
