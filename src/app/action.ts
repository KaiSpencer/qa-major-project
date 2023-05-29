"use server";

import { env } from "@/env.mjs";

export async function action(data: FormData) {
  if (env.IS_PLAYWRIGHT_TEST) {
    return "Mocked data";
  } else {
    return "Real data";
  }
}
