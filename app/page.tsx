import React from "react";
import { Page } from "@/cosmic/blocks/pages/Page";
import GoogleMapComponent from "../components/googlemap";
import Header from "@/components/Header";

export default function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <main>
      {/*<Header searchParams={searchParams} /> /!* 将 searchParams 传递给 Header *!/*/}

      <section className="md:container mt-12 pb-8 m-auto px-4">
        <Page query={{ slug: "home", type: "pages" }} />
        <div className="relative m-auto flex max-w-[950px] flex-col items-start gap-2">
          <h3 className="m-auto mb-4 text-2xl md:text-4xl font-display text-zinc-900 dark:text-zinc-100 tracking-tighter">
            Our location
          </h3>
          <GoogleMapComponent />
        </div>
      </section>
    </main>
  );
}
