import {Title} from "@mantine/core";

interface ILogoProps {
    collapsed?: boolean;
}

export default function Logo({collapsed}: ILogoProps) {
    if (collapsed === true) {
        return (
            <Title order={3}>RPA</Title>
        )
    } else {
        return (
            <Title order={3}>RPA App</Title>
        )
    }
}