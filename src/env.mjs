import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    IS_PLAYWRIGHT_TEST: z
      .union([z.literal("true"), z.literal("false")])
      .default("false")
      .transform((val) => val === "true"),
  },
  client: {
    // NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    // NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
    IS_PLAYWRIGHT_TEST: process.env.IS_PLAYWRIGHT_TEST,
  },
});
