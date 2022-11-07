import type { Joke } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";

import { db } from "~/utils/db.server";

type LoaderData = {
  joke: Joke;
};

export const loader: LoaderFunction = async ({ params }) => {
  const data: LoaderData = {
    joke: await db.joke.findUniqueOrThrow({
      where: { id: params.jokeId },
    }),
  };
  return json(data);
};

export default function JokeRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <p>
        <Link to={data.joke.id}>{data.joke.name} Permalink</Link>
      </p>
    </div>
  );
}
