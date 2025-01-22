import {ActionIcon, useMantineColorScheme} from "@mantine/core";
import {IconBrightnessUp,IconBrightnessDown} from "@tabler/icons-react";

export default function ColorSchemeButton() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    const toggleColorScheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    }

    return (
        <ActionIcon variant="outline"
                    size="lg"
                    radius="md"
                    onClick={toggleColorScheme}>
            {colorScheme === "dark" ? <IconBrightnessDown /> : <IconBrightnessUp />}
        </ActionIcon>
    )
}