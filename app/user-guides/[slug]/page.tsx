// app/user-guides/[slug]/page.tsx
import { SingleBlog } from "@/cosmic/blocks/user-guides/SingleBlog";
import { cosmic } from "@/cosmic/client";

export const revalidate = 60;

export async function generateStaticParams() {
  const { objects: posts } = await cosmic.objects.find({
    type: "user-guides",
  });
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="p-4">
      <SingleBlog query={{ slug: params.slug, type: "user-guides" }} />
    </main>
  );
}
