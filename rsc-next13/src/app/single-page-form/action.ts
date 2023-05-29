"use server";

import { storage } from "@/utils/storage";
import { redirect } from "next/navigation";

export async function action(data: FormData) {
  await storage.set(
    "singlePageFormState.nhsNumber",
    data.get("nhs-number") as string,
  );
  if (data.get("over-18-yes")) {
    await storage.set("singlePageFormState.isOver18", "true");
  } else if (data.get("over-18-no")) {
    await storage.set("singlePageFormState.isOver18", "false");
  }

  redirect("/single-page-form/success");
}
