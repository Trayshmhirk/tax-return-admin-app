import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Admin | Tax Returns",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className="min-h-screen flex content-center">
            <div className="w-full flex overflow-hidden">
               <aside className="">Sidebar</aside>

               <main className="flex flex-col gap-1">
                  <h1>Main</h1>
                  {children}
               </main>
            </div>
         </body>
      </html>
   );
}
