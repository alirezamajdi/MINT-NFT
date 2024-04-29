"use client";
import ReduxProvider from "@/store/redux-provider";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </ReduxProvider>
  );
}
