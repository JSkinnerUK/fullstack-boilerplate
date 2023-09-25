import { Prisma, prisma } from '@server/db';
import { Logger, logger } from '@server/utils';
import { schema } from './schema';

interface Context {
  prisma: Prisma
  logger: Logger
}

const context = async () => ({
  prisma: prisma,
  logger: logger,
})

export { schema, context, Context };
