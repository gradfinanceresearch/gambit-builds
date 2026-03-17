import type { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = String(ctx.params?.slug || "");

  // Prevent path traversal
  if (slug.includes("..") || slug.includes("/")) {
    return { notFound: true };
  }

  const htmlPath = path.join(
    process.cwd(),
    "public",
    "concepts",
    `${slug}.html`
  );

  if (!fs.existsSync(htmlPath)) {
    return { notFound: true };
  }

  const html = fs.readFileSync(htmlPath, "utf-8");
  return { props: { html } };
};

export default function Concept({ html }: { html: string }) {
  return (
    <div
      style={{ all: "initial" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
