import { atom } from "recoil"
export const themeToggleState = atom<string>({
    key:"themeToggleState",
    default:"dark"
}) 