"use client";

import { createContext, useState, ReactNode, useEffect } from "react";

interface CartContextType {
  showInternal: boolean;
  setShowInternal: (value: boolean) => void;
}

export const CartContext = createContext<CartContextType>({
  showInternal: false, // 默认值为 false
  setShowInternal: () => {}, // 空函数占位符
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [showInternal, setShowInternal] = useState(false);

  // 初始化时从 URL 解析 `showInternal` 参数
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const showInternalParam = urlParams.get("showInternal");
      setShowInternal(showInternalParam === "true");
    }
  }, []);

  return (
    <CartContext.Provider value={{ showInternal, setShowInternal }}>
      {children}
    </CartContext.Provider>
  );
}
