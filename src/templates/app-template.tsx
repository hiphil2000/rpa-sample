import React from "react";
import {ActionIcon, Container, Group, Stack, Box, Title, NavLink} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import AppNavigation from "../libs/router/app-navigation.tsx";
import {IconChevronLeft, IconChevronRight} from "@tabler/icons-react";
import clsx from "clsx";
import classes from "./app-template.module.css"
import {ColorSchemeButton} from "../components";

type AppTemplateProps = {
    header?: React.ReactNode;
    children: React.ReactNode;
    initialCollapsed?: boolean;
}

export default function AppTemplate({
    header, children, initialCollapsed = true
}: AppTemplateProps) {
    const [opened, {toggle}] = useDisclosure(initialCollapsed);
    const toggleIcon = opened ? <IconChevronLeft/> : <IconChevronRight/>;

    return (
        <div className={classes.app}>
            <Box className={classes.appHeader} px="md">
                <Group style={{height: "100%"}}>
                    {header}
                    <Box ml="auto">
                        <ColorSchemeButton />
                    </Box>
                </Group>
            </Box>
            <Box className={clsx(classes.appNav, opened ? "" : classes.collapsed)}>
                <Stack className={classes.appNavMenu} h="100%">
                    <Box className={classes.appNavTitle} py="sm" h="56">
                        <Title order={3} style={{textAlign: "center"}}>RPA App</Title>
                    </Box>
                    <Stack className={classes.appMenuList} gap={0}>
                        <AppNavigation />
                    </Stack>
                    <Stack className={classes.appToolList} gap={0}>
                        <NavLink key={"options"}
                                 label={"options"}
                        />
                    </Stack>
                </Stack>
                <div className={classes.navToggleButton}>
                    <ActionIcon size={"xs"} onClick={toggle}>
                        {toggleIcon}
                    </ActionIcon>
                </div>
            </Box>
            <div className={classes.appMain}>
                <Container fluid>
                   {children}
                </Container>
            </div>
        </div>
    )
}