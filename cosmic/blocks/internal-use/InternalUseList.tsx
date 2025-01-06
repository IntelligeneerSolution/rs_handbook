import { cosmic } from "@/cosmic/client";
import { InternalUseCard, InternalUseCardType } from "./InternalUseCard";

export async function InternalUseList({
  query,
  className,
  preview,
}: {
  query: any;
  className?: string;
  preview?: boolean;
}) {
  const { objects: events } = await cosmic.objects
    .find(query)
    .props("title,slug,metadata")
    .depth(1)
    .status(preview ? "any" : "published");

  return (
    <div className={className}>
      {events?.map((event: InternalUseCardType) => {
        return <InternalUseCard event={event} key={event.slug} />;
      })}
    </div>
  );
}
