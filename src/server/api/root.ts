import { exampleRouter } from '~/server/api/routers/example';
import { createTRPCRouter } from '~/server/api/trpc';
import { userRouter } from './routers/user';

/**
 * This is the primary router for your server.
@@ -8,6 +9,7 @@ import { createTRPCRouter } from "~/server/api/trpc";
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
