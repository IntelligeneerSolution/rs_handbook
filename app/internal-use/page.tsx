// app/internal-use/page.tsx
import { InternalUseList } from "@/cosmic/blocks/internal-use/InternalUseList";

export default async function InternalUsePage() {
  return (
    <main className="p-4">
      <div className="relative m-auto flex max-w-[950px] flex-col items-start gap-2">
        <div className="flex justify-between w-full items-baseline mb-4">
          <h1 className="md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            Internal Uses
          </h1>
        </div>
        <InternalUseList
          query={{ type: "internal-uses" }}
          className="mx-auto grid w-full max-w-screen-lg grid-cols-1 flex-col gap-5 pb-24 sm:grid-cols-2 lg:gap-10"
        />
      </div>
    </main>
  );
}
