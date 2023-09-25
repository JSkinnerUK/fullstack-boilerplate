import "./packages/utils/env";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express, { json } from "express";
import http from "http";
import cors from "cors";
import { Context, context, schema } from "@server/graphql";
import { expressMiddleware } from "@apollo/server/express4";
import Config from "./config";

const PORT: string | number = process.env.PORT || Config.defaultPort;

const main = async () => {
  try {
    const app = express();
    app.use(cors());
    app.use(express.json());

    const httpServer = http.createServer(app);

    const server = new ApolloServer<Context>({
      schema,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();

    app.use(
      "/graphql",
      cors(),
      json(),
      expressMiddleware(server, {
        context: context,
      })
    );

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

main();
