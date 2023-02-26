import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ih054qpd",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default client;
