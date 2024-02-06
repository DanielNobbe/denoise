import { Metadata } from "next";
import Testdata from "@/components/testdata";
import Testdata2 from "@/components/testdata2";
import Testdata3 from "@/components/testdata3";

export const metadata: Metadata = {
  title: `(${process.env.NEXT_PUBLIC_ENV_NAME}) Denoise | Home`
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <h1 className="text-3xl font-bold" style={{width: "100%", marginLeft: "50px"}}>
                Denoise: Enhance Your Images
            </h1>
            <div style={{fontSize: "20px", width: "100%", marginLeft: "50px"}}>
                Rediscover lost details and sharpen every pixel with our advanced image enhancement suite
            </div>
            <Testdata />
            <div style={{fontSize: "20px", width: "100%", marginLeft: "50px"}}>
                <Testdata2 />
            </div>
            <div style={{fontSize: "20px", width: "100%", marginLeft: "50px"}}>
                <Testdata3 />
            </div>
        </main>
    )
}
