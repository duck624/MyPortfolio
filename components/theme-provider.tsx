import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PropsWithChildren } from "react";

// Định nghĩa type cho attribute
type ThemeProviderProps = PropsWithChildren<{
  attribute?: "class" | "data-theme" | "data-mode" | undefined;
  defaultTheme?: string | undefined;
  enableSystem?: boolean | undefined;
  disableTransitionOnChange?: boolean | undefined;
}>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}