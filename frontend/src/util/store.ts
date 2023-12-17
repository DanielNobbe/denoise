import { IStore } from "@/interfaces/common";
import { create } from "zustand";
import {IDenoise} from "@/interfaces/denoise";

export const useStore = create<IStore>((set: any) => ({
    denoise: [],
    setDenoise: (denoise: IDenoise[]) => set({ denoise }),
    loadingDenoise: true,
    setLoadingDenoise: (loadingDenoise: boolean) => set({ loadingDenoise }),
}));