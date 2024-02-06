'use client'

import { IComponentChildren } from "@/interfaces/common";
import LayoutElement from "./layout";

export default function SidebarLayer({ children }: IComponentChildren) {
    return (
        <LayoutElement>
            {children}
        </LayoutElement>
    )
}