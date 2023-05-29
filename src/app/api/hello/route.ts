import { env } from "@/env.mjs";

export async function GET() {
  if (env.IS_PLAYWRIGHT_TEST) {
    return new Response("Mocked data");
  }
  return new Response("I'm data from /api/hello/route.ts");
}
