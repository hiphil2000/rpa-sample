import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware/persist";

type colorScheme = "system" | "dark" | "light";

interface IAppState {
    colorScheme: colorScheme;
}

type AppAction = {
    setColorScheme: (colorScheme: colorScheme) => void;
}

export const useAppStore = create<IAppState & AppAction>()(
    persist(
        (set) => ({
            colorScheme: "system",
            setColorScheme: (colorScheme) => set({colorScheme})
        }),
        {
            name: "AppStore",
            storage: createJSONStorage(() => localStorage)
        }
    )
)