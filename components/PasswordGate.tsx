"use client";

import React, { useEffect, useState } from "react";

export default function PasswordModal({
  onSuccess,
  onClose,
  requiredPassword = "intelligeneer123",
}: {
  onSuccess: () => void;
  onClose: () => void;
  requiredPassword?: string;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // 检查本地存储是否已有 IP 地址
    const savedIP = localStorage.getItem("userIP");
    const currentIP = window.location.hostname; // 简单示例，用本地的 hostname 代替 IP
    if (savedIP === currentIP) {
      onSuccess(); // 如果 IP 地址已匹配，则直接成功
    }
  }, [onSuccess]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 防止默认的表单提交行为
    if (password === requiredPassword) {
      setError(false);
      const userIP = window.location.hostname; // 获取用户当前 IP 地址
      localStorage.setItem("userIP", userIP); // 存储 IP 地址到 localStorage
      onSuccess(); // 密码正确时调用成功回调
    } else {
      setError(true); // 显示错误提示
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 半透明背景
      }}
    >
      <div
        className="bg-white rounded shadow-lg p-6 w-[90%] max-w-md"
        style={{
          backgroundColor: "#ffffff", // 白色背景
          borderRadius: "8px", // 圆角
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // 阴影
        }}
      >
        <h3 className="text-lg font-semibold mb-4">Enter Password</h3>
        <form onSubmit={handlePasswordSubmit}>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // 根据状态切换类型
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter your password"
              style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "8px",
                width: "100%",
              }}
            />
            {/* 密码可见/隐藏按钮 */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // 切换状态
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showPassword ? "🙈" : "👁️"} {/* 使用图标 */}
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-2">
              Incorrect password, please try again.
            </p>
          )}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit" // 将按钮类型改为 submit
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
