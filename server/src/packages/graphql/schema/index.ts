import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { GraphQLSchema } from 'graphql';
import { flatten } from 'lodash';
import { join } from 'path';

import { userResolvers } from './user';
import { bookResolvers } from './book'

const resolvers = mergeResolvers([userResolvers, bookResolvers]);

const types = loadFilesSync(join(__dirname, './**/types.graphql'));
const queries = loadFilesSync(join(__dirname, './**/queries.graphql'));
const mutations = loadFilesSync(join(__dirname, './**/mutations.graphql'));

const typeDefs = mergeTypeDefs(flatten([types, queries, mutations]));

const schema: GraphQLSchema = makeExecutableSchema({typeDefs, resolvers});

export {schema};