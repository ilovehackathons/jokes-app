// this is just an example. No need to copy/paste this 😄
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Sandwich } from "@prisma/client";

import { db } from "~/utils/db.server";

type LoaderData = { sandwiches: Array<Sandwich> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    sandwiches: await db.sandwich.findMany(),
  };
  return json(data);
};

export default function Sandwiches() {
  const data = useLoaderData<LoaderData>();
  return (
    <ul>
      {data.sandwiches.map((sandwich) => (
        <li key={sandwich.id}>{sandwich.name}</li>
      ))}
    </ul>
  );
}
