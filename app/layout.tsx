import React from "react";
import Header from "@/components/Header";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: "Cat Images",
    description: "Cat images from TheCatAPI",
};
export default function RootLayout(
    {children,}:
        Readonly<{children: React.ReactNode;}>
){
  return(
      <html lang="en">
          <body>
          <Header />
            {children}
          </body>
      </html>
  );
}