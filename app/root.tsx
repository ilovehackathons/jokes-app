import { Links, LiveReload, Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/global.css";
import largeStylesUrl from "~/styles/global-large.css";
import mediumStylesUrl from "~/styles/global-medium.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
    {
      rel: "stylesheet",
      href: largeStylesUrl,
      media: "(min-width: 1024px)",
    },
    {
      rel: "stylesheet",
      href: mediumStylesUrl,
      media: "(min-width: 640px)",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
