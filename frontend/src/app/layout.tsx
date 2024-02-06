import './globals.css'
import {IComponentChildren} from "@/interfaces/common";
import dynamic from "next/dynamic";
import Link from "next/link";

const SidebarLayer = dynamic(() => import('@/components/sidebar'), {
  ssr: false
});

export default function RootLayout({ children }: IComponentChildren) {
  return (
    <html lang="en">
      <body>
        <SidebarLayer>
          {children}
          <Link href={'/'} />
          <Link href={'/denoise'} />
          <Link href={'/imagemanipulator'} />
        </SidebarLayer>
      </body>
    </html>
  )
}
