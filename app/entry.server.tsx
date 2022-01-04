import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";
import { getCssText } from "./styles/stitches.config";
import { styles } from "./styles/global";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  styles();

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  const markupWithStyles = markup.replace(
    /<\/head>/,
    `<style id="stitches">${getCssText()}</style></head>`
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markupWithStyles, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
