import React from "react";
import {IconHome} from "@tabler/icons-react";
import {NavLink} from "@mantine/core";
import {NavLink as RouterNavLink, useLocation} from "react-router-dom";

type NavItem = {
    href: string;
    icon: React.FC;
    label: string;
    allowFavorite?: boolean;
    favorite?: boolean;
}

export const navData: NavItem[] = [
    { href: "/", icon: IconHome, label: "Home", allowFavorite: true },
    // { href: "/editor", icon: IconFilePencil, label: "Editor" }
]

/**
 * 현재 라우팅 위치의 NavData를 가져옵니다.
 * @returns {NavItem | undefined}
 */
export function useNavData(): NavItem | undefined {
    const location = useLocation();

    return navData.find((item) => item.href === location.pathname);
}

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