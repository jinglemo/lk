import "./globals.css";
import { Lora } from "next/font/google";
import Navbar from "@components//Navbar";
import Foot from "@components//Footer";
import Head from "next/head";
const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "LK Creatives",
  description: "LK Creative Signs & Awnings, Inc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="icon.ico" sizes="<generated>" />{" "}
        {/* Use an absolute path to the favicon */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={lora.className}>
        <Navbar />
        {children}
        <Foot />
      </body>
    </html>
  );
}
