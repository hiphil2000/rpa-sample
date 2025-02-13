import React from "react";
import {IconStar, IconStarFilled} from "@tabler/icons-react"
import {ActionIcon} from "@mantine/core";

interface IFavoriteButtonProps {
    favorite: boolean;
    onClick?: React.MouseEventHandler;
}

export default function FavoriteButton({favorite, onClick}: IFavoriteButtonProps) {

    return (
        <ActionIcon variant={"transparent"}
                    radius={"xl"}
                    onClick={onClick}
        >
            {favorite ? <IconStarFilled color="yellow"/> : <IconStar/>}
        </ActionIcon>
    )
}