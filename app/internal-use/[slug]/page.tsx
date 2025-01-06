import { SingleInternalUse } from "@/cosmic/blocks/internal-use/SingleInternalUse";

export default async function InternalUseDetailsPage({ params }: { params: { slug: string } }) {
  return (
    <SingleInternalUse
      query={{ slug: params.slug, type: "internal-uses" }}
    />
  );
}
