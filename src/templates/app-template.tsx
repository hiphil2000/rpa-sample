import React from "react";
import {ActionIcon, Stack, Box, Center, Text, ScrollArea, Title, Group} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import AppNavigation, {useNavData} from "../libs/router/app-navigation.tsx";
import {IconChevronLeft, IconChevronRight} from "@tabler/icons-react";
import clsx from "clsx";
import classes from "./app-template.module.css"
import {Logo} from "../components";
import FavoriteButton from "../components/favorite-button.tsx";

type AppTemplateProps = {
    header?: React.ReactNode;
    children: React.ReactNode;
    initialCollapsed?: boolean;
}

export default function AppTemplate({
    header, children, initialCollapsed = true
}: AppTemplateProps) {
    const navItem = useNavData();
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
                    <Group>
                        <Title order={3}>{header}</Title>
                        {navItem?.allowFavorite === true && (
                            <FavoriteButton favorite={Boolean(navItem.favorite)} />
                        )}
                    </Group>
                </Box>
                <div className={classes["lnb-area"]}></div>
                <div className={classes["content-area"]}>
                    {children}
                </div>
            </Stack>
        </div>
    )
}