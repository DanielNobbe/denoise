import './globals.css'
import {IComponentChildren} from "@/interfaces/common";
import dynamic from "next/dynamic";
import Link from "next/link";

const AuthenticationLayer = dynamic(() => import('@/components/authentication'), {
  ssr: false
});

export default function RootLayout({ children }: IComponentChildren) {
  return (
    <html lang="en">
      <body>
        {/*<AuthenticationLayer>*/}
          {children}
          <Link prefetch={true} href={'/'} />
          <Link prefetch={true} href={'/denoise'} />
        {/*</AuthenticationLayer>*/}
      </body>
    </html>
  )
}
