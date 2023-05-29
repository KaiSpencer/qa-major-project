import { storage } from "@/utils/storage";

export default async function Success() {
  const nhsNumber = await storage.get("multiPageFormState.nhsNumber");
  const over18 = await storage.get("multiPageFormState.isOver18");
  return (
    <div>
      <h1>Success</h1>
      <p>Thank you for your submission.</p>
      <br />
      <h2>Form Data</h2>
      <p>NHS Number: {nhsNumber}</p>
      <p>Over 18: {over18}</p>
    </div>
  );
}
