import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { Attribute } from "next-themes"; // Nhập type Attribute từ next-themes
import { PropsWithChildren } from "react";

// Định nghĩa ThemeProviderProps với Attribute từ next-themes
type ThemeProviderProps = PropsWithChildren<{
  attribute?: Attribute | Attribute[] | undefined;
  defaultTheme?: string | undefined;
  enableSystem?: boolean | undefined;
  disableTransitionOnChange?: boolean | undefined;
}>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}