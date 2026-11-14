/**
 * Server-rendered table of contents for journal posts. Plain anchor links to
 * the h2 ids, so it works without JavaScript and Google can use the anchors
 * for "jump to" links in search results.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export default function TableOfContents({ items }: { items: { id: string; title: string }[] }) {
  if (items.length < 3) return null;
  return (
    <nav className="post-toc" aria-labelledby="post-toc-title">
      <p id="post-toc-title" className="post-toc-title">{"In this guide"}</p>
      <ol>
        {items.map((it) => (
          <li key={it.id}>
            {/* Headings like "1. Essaouira" would read "1. 1. Essaouira" in a numbered list. */}
            <a href={`#${it.id}`}>{it.title.replace(/^\d+\.\s+/, "")}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
