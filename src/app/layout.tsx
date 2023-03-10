import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <div>
            <Link href="/">Go to /</Link>
          </div>
          <div>
            <Link href="/?a=hello">/?a=hello</Link>
          </div>
          <div>
            <Link href="/about">/about</Link>
          </div>
        </div>
        <div>{children}</div>

        <p>
          I believe there is a bug where the wrong version of a page is ending
          up in the client side cache.
        </p>
        <ol>
          <li>
            Click the <Link href="/?a=hello">/?a=hello</Link> link, the page
            renders with the correct query param ✅
          </li>
          <li>
            Click the <Link href="/">Go to /</Link> link, the page renders
            correctly with no query param ✅
          </li>
          <li>
            Click the <Link href="/?a=hello">/?a=hello</Link> link again
          </li>
          <li>
            Click the <Link href="/about">/about</Link> link
          </li>
          <li>
            Click the <Link href="/">Go to /</Link> link, the page renders with
            an incorrect query param ❌
          </li>
        </ol>
      </body>
    </html>
  );
}
