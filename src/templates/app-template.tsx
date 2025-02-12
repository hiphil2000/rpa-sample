import React from "react";
import {ActionIcon, Container, Group, Stack, Box, Title, NavLink, Center, Text, ScrollArea} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import AppNavigation from "../libs/router/app-navigation.tsx";
import {IconChevronLeft, IconChevronRight} from "@tabler/icons-react";
import clsx from "clsx";
import classes from "./app-template.module.css"
import {ColorSchemeButton, Logo} from "../components";

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
            <Stack className={clsx(classes["menu-section"], !opened ? classes["collapsed"] : "")} gap={0}>
                <Center className={classes["logo-area"]}>
                    <Logo collapsed={!opened} />
                </Center>
                <Box className={classes["user-area"]} p="xs" bd="right">
                    <Text size="xs">User Area</Text>
                </Box>
                <Box className={classes["gnb-area"]}>
                    <ScrollArea scrollbars={"y"}>
                        <AppNavigation/>
                    </ScrollArea>
                </Box>
                <Box className={classes["footer-area"]} p="xs">
                    <Text size="xs">Footer</Text>
                </Box>
                <ActionIcon onClick={toggle} className={classes["menu-toggle"]}>
                    {toggleIcon}
                </ActionIcon>
            </Stack>
            <Stack className={classes["main-section"]} gap={0}>
                <Box className={classes["header-area"]} p="xs">
                    {header}
                </Box>
                <div className={classes["lnb-area"]}></div>
                <div className={classes["content-area"]}>
                    {children}
                </div>
            </Stack>
        </div>
    )
}