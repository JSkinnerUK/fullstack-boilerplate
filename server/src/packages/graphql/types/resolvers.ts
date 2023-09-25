import { Prisma } from '@server/db';
import { Logger } from '@server/utils';
import { GraphQLResolveInfo } from 'graphql';
import { Scalars } from './schema';

export type Parent = {
  id: Scalars['ID']['input'];
};

export type Args = any;

export type Context = {
  prisma: Prisma;
  logger: Logger;
};

export type Info = GraphQLResolveInfo;
