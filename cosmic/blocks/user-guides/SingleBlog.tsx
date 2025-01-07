import { cosmic } from "@/cosmic/client";
import Markdown from "react-markdown";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getFormattedDate } from "@/cosmic/utils";

export async function SingleBlog({
  query,
  className,
  status,
}: {
  query: any;
  className?: string;
  status?: "draft" | "published" | "any";
}) {
  try {
    const { object: blog } = await cosmic.objects
      .findOne(query)
      .props("id,slug,title,metadata")
      .depth(1)
      .status(status ? status : "published");

    const date = getFormattedDate(blog.metadata.published_date);
    // console.log(blog.metadata.adatop_pos_system_instruction.url);
    return (
      <div className={className}>
        <section className="m-auto grid items-center pb-8 md:container">
          <div className="relative m-auto flex max-w-[750px] flex-col items-start gap-2">
            {/* 返回博客列表 */}
            <div className="lg:absolute lg:-left-[170px] lg:top-2">
              <Link
                  href="/user-guides"
                  className="flex text-sky-500 dark:text-sky-400"
              >
                <ArrowLeftIcon className="mr-2 mt-1 h-4 w-4"/> Back to blog
              </Link>
            </div>

            {/* 博客标题 */}
            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter text-black dark:text-white md:text-4xl">
              {blog.title}
            </h1>

            {/* 博客封面图片 */}
            {blog.metadata.image && (
                <div className="mb-10 w-full overflow-hidden rounded-xl">
                  <img
                      src={`${blog.metadata.image.imgix_url}?w=2000&auto=format,compression`}
                      alt={blog.title}
                      className="aspect-video w-full object-cover"
                  />
                </div>
            )}

            {/* 博客作者信息 */}
            <div className="mb-8 md:flex">
              <img
                  className="mr-2 h-[60px] w-[60px] rounded-full object-cover"
                  src={`${blog.metadata.author.metadata.image.imgix_url}?w=120&auto=format,compression`}
                  alt={blog.metadata.author.title}
              />
              <div className="mb-4 flex flex-col">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  {blog.metadata.author.title}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">{date}</span>
              </div>
            </div>

            {/* 博客内容 */}
            <Markdown
                className="space-y-4 text-zinc-700 dark:text-zinc-300"
                // rehypePlugins={[rehypeRaw]} // 允许 HTML 渲染
            >
              {blog.metadata.content}
            </Markdown>

            {
              blog.metadata.adatop_pos_system_instruction?.url &&
                (
              <div className="mt-8 w-full">
                <h2 className="mb-2 text-lg font-bold text-black dark:text-white">
                  PDF 文件
                </h2>
                <iframe
                  src={blog.metadata.adatop_pos_system_instruction.url}
                  className="w-full h-[600px] border rounded-lg"
                  title="PDF 文件"
                />
              </div>
            )}

            {/* 返回博客列表 */}
            <div className="my-10">
              <Link
                  href="/user-guides"
                  className="flex text-sky-500 dark:text-sky-400"
              >
                <ArrowLeftIcon className="mr-2 mt-1 h-4 w-4"/> Back to blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (e: any) {
    if (e.status === 404) return notFound();
  }
}
