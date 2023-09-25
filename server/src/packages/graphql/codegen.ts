import type { CodegenConfig } from '@graphql-codegen/cli';
import { schema } from "./schema"
import { printSchema } from 'graphql/utilities/printSchema';

const config: CodegenConfig = {
  overwrite: true,
  schema: printSchema(schema),
  generates: {
    "./schema.graphql": {
      plugins: ["schema-ast"]
    },
    "./types/schema.ts": {
      plugins: ["typescript"]
    },
  }
};

export default config;
