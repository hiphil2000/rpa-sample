import React from "react";
import {IconFilePencil, IconHome} from "@tabler/icons-react";
import {NavLink} from "@mantine/core";
import {NavLink as RouterNavLink} from "react-router-dom";

type NavItem = {
    href: string;
    icon: React.FC;
    label: string;
}

const navData: NavItem[] = [
    { href: "/", icon: IconHome, label: "Home" },
    // { href: "/editor", icon: IconFilePencil, label: "Editor" }
]

export default function AppNavigation() {
    const items = navData.map((item) => (
        <NavLink key={item.label}
                 to={item.href}
                 label={item.label}
                 leftSection={<item.icon />}
                 component={RouterNavLink}
        />
    ));

    return (
        <>
            {items}
        </>
    )
}