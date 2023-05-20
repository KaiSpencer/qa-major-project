"use server";

import { redirect } from "next/navigation";

export async function action(data: FormData) {
  console.log("nhs-number", data.get("nhs-number"));
  console.log("over-18", data.get("over-18"));
  redirect("/success");
}
