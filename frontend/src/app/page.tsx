import { Metadata } from "next";
import Testdata from "@/components/testdata";

export const metadata: Metadata = {
  title: `(${process.env.NEXT_PUBLIC_ENV_NAME}) Denoise | Home`
};

export default function Home() {
  const linksToApps = [
    {
      title: "Wikipedia",
      url: "https://www.wikipedia.com/"
    },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <h1 className="text-3xl font-bold">
        Welcome to Denoise
      </h1>
      <br />
      <Testdata />
      <h2 className="text-2xl font-bold pt-10 pb-4">
        External Links
      </h2>
      <div className="flex flex-wrap gap-4">
        {linksToApps.map((link, index) => (
            <a
                key={index}
                href={link.url}
                target="_blank"
                className="w-40 h-40 rounded-md border-2 link-card"
                style={{borderColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR as string, boxShadow: "1px 1px 3px 0 rgba(0, 0, 0, 0.5)"}}
            >
              <p className="text-lg p-2">
                {link.title}
              </p>
            </a>
        ))}
      </div>
    </main>
  )
}
