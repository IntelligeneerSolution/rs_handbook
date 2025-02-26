// components/footer.tsx
import { cosmic } from "@/cosmic/client";
import { buttonVariants } from "@/cosmic/elements/Button";
import { MailIcon, PhoneIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { NavMenu } from "@/cosmic/blocks/navigation-menu/NavMenu";

export default async function Footer() {
  const { object: settings } = await cosmic.objects
    .findOne({
      type: "global-settings",
      slug: "settings",
    })
    .props("metadata")
    .depth(1);

  type Link = {
    url: string;
    company: string;
    icon: {
      imgix_url: string;
    };
  };

  return (
    <nav className="pb-8 md:my-10 mx-auto flex flex-col lg:flex-row items-center justify-between container w-full">
      <div className="my-8">
        <NavMenu
            // query={{ type: "navigation-menus", slug: "header" }}
            className="flex flex-wrap items-center"
            hasMobileMenu={true}
            // showInternal={false}
            // searchParams={{}}
          />
        {/*  <NavMenu*/}
        {/*    // query={{ type: "navigation-menus", slug: "header" }}*/}
        {/*    className="flex flex-wrap items-center"*/}
        {/*    hasMobileMenu={true}*/}
        {/*    showInternal={searchParams?.showInternal === "true"}// 将解析的参数传递给 NavMenu*/}
        {/*    searchParams={searchParams} // 确保传递 searchParams*/}
        {/*  />*/}
      </div>
      <div className="flex gap-x-8 justify-center mb-6 lg:mb-0">
        {settings.metadata.links.map((link: Link) => {
          return (
            <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
              <img
                className="h-[26px]"
                src={`${link.icon.imgix_url}?w=500&auto=format,compression`}
                alt={link.company}
              />
            </a>
          );
        })}
      </div>
      {/*<ModeToggle />*/}
    </nav>
  );
}
