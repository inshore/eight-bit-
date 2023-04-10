import type { LinksFunction, LoaderFunction, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import tailwindStylesheetUrl from '~/styles/tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStylesheetUrl },
  { rel: 'icon', href: '/_static/favicon.ico' }
];

export const meta: MetaFunction = () => ({
  'apple-mobile-web-app-capable': 'yes',
  charset: 'utf-8',
  title: '8 Bit',
  viewport: 'user-scalable=no, width=device-width, initial-scale=1.0'
});

export const loader: LoaderFunction = async ({ request }: LoaderArgs): Promise<object> => {
  return json<LoaderData>({
  });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}