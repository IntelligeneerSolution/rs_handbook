"use client";

import Link from "next/link";
import PasswordModal from "@/components/PasswordGate";
import { MobileNav } from "./MobileNav";
import { useContext, useState } from "react";
import { CartContext } from "@/cosmic/blocks/ecommerce/CartProvider";

export type ItemType = {
  title: string;
  link: string;
  open_in_new_tab: boolean;
};

export function NavMenu({
  className,
  hasMobileMenu,
}: {
  className?: string;
  hasMobileMenu?: boolean;
}) {
  const { showInternal, setShowInternal } = useContext(CartContext);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const menuItems: ItemType[] = [
    { title: "Home", link: "/", open_in_new_tab: false },
    { title: "About", link: "/about", open_in_new_tab: false },
    { title: "User Guide", link: "/user-guides", open_in_new_tab: false },
    { title: "Contact", link: "/contact", open_in_new_tab: false },
    {
      title: "Internal Use",
      link: "#", // 阻止默认跳转
      open_in_new_tab: false,
    },
  ];

  const isInternalUse = (item: ItemType) => item.title === "Internal Use";

  const filteredItems = menuItems.filter(
    (item) => !isInternalUse(item) || showInternal
  );

  const handleInternalClick = (e: React.MouseEvent) => {
    e.preventDefault(); // 阻止默认行为
    setShowPasswordModal(true); // 显示密码弹窗
  };

  return (
    <div className={className}>
      {/* Desktop Navigation */}
      <div className={hasMobileMenu ? "md:flex items-center gap-4 hidden" : ""}>
        {filteredItems.map((item) => (
          <Link
            href={item.link}
            key={item.title}
            target={item.open_in_new_tab ? "_blank" : "_self"}
            className="group inline-flex h-10 w-full items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-zinc-50 dark:hover:bg-zinc-800 md:w-max"
            onClick={isInternalUse(item) ? handleInternalClick : undefined}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <PasswordModal
          onSuccess={() => {
            setShowInternal(true); // 设置为已解锁状态
            setShowPasswordModal(false); // 关闭弹窗
            window.location.href = "/internal-use"; // 跳转到 Internal Use 页面
          }}
          onClose={() => {
            setShowPasswordModal(false); // 关闭弹窗
          }}
          requiredPassword="intelligeneer123"
        />
      )}

      {/* Mobile Navigation */}
      {hasMobileMenu && (
        <MobileNav
          items={menuItems.filter(
            (item) => !isInternalUse(item) || showInternal
          )}
        />
      )}
    </div>
  );
}
