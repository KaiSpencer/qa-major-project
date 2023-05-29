"use server";

import { storage } from "@/utils/storage";
import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

export async function action(data: FormData) {
  await storage.set(
    "multiPageFormState.nhsNumber",
    data.get("nhs-number") as string,
  );
  redirect("/multi-page-form/18-or-over", RedirectType.push);
}
