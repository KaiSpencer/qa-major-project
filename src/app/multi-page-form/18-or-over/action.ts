"use server";

import { storage } from "@/utils/storage";
import { redirect } from "next/navigation";

export async function action(data: FormData) {
  await storage.set(
    "multiPageFormState.isOver18",
    data.get("over-18") as string,
  );
  redirect("/multi-page-form/success");
}
