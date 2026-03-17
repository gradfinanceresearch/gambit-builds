import type { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = String(ctx.params?.slug || "");

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

  return { props: { slug } };
};

export default function Concept({ slug }: { slug: string }) {
  return (
    <>
      <style>{`
        html, body, #__next {
          margin: 0 !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
          background: transparent !important;
          overflow: hidden !important;
        }
      `}</style>
      <iframe
        src={`/concepts/${slug}.html`}
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          display: "block",
        }}
        title="Concept preview"
      />
    </>
  );
}
