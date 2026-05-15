import { ReactNode } from "react";
export interface ContentBlockProps {
  icon: string;
  topIcon?: string;
  illustration?: ReactNode;
  lightTheme?: boolean;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
  }[];
  id: string;
  direction: "left" | "right";
}
