"use client";
import Link from "next/link";
import { cosmic } from "@/cosmic/client";
import { NavMenu } from "@/cosmic/blocks/navigation-menu/NavMenu";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/cosmic/blocks/ecommerce/CartProvider";

export default function Header() {
  const { showInternal, setShowInternal } = useContext(CartContext);
  const [settings, setSettings] = useState<any>(null);

  // 从 Cosmic 加载设置数据
  useEffect(() => {
    async function fetchSettings() {
      try {
        const { object } = await cosmic.objects
          .findOne({
            type: "global-settings",
            slug: "settings",
          })
          .props("slug,title,metadata,type")
          .depth(1);
        // console.log("object",object);
        setSettings(object);
        // console.log("new object",object);
        // console.log("setting",settings);
      } catch (error) {
        console.error("Error fetching settings from Cosmic:", error);
      }
    }

    fetchSettings();

    // 从 URL 获取 showInternal 参数
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("showInternal") === "true") {
      setShowInternal(true);
    }
  }, [setShowInternal]);
  if (!settings) {
  return <p>Loading settings...</p>;
}

  return (
    <nav className="sticky top-0 bg-white/20 dark:bg-black/20 backdrop-blur-lg w-full z-[9999]">
      <div className="flex w-full items-center md:container justify-between p-4 flex-wrap gap-4">
        <Link href="https://www.adatop.com.au" className="flex-shrink-0">
          <img
            src={`${settings.metadata.logo.imgix_url}?w=500&auto=format,compression`}
            alt={settings.metadata.company}
            className="h-10 w-auto dark:hidden"
          />
          <img
            src={`${settings.metadata.dark_logo.imgix_url}?w=500&auto=format,compression`}
            alt={settings.metadata.company}
            className="h-10 w-auto hidden dark:block"
          />
        </Link>
        <div className="flex items-center flex-wrap">
          <NavMenu
            className="flex flex-wrap items-center"
            hasMobileMenu={true}
          />
        </div>
      </div>
    </nav>
  );
}
