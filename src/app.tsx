import { createTheme, MantineProvider } from "@mantine/core"
import AppRouter from "./libs/router/app-router.tsx";
import "@mantine/core/styles.css"

const theme = createTheme({

});

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <AppRouter/>
        </MantineProvider>
    )
}