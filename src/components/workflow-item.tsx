import React from "react";
import dayjs from "dayjs";
import {Group, Paper} from "@mantine/core";
import {Link} from "react-router-dom";

type WorkflowItemProps = {
    name: string;
    createdDate: Date;
    modifiedDate: Date;
}

export default function WorkflowItem({
    name, createdDate, modifiedDate
}: WorkflowItemProps) {
    return (
        <Paper radius="lg" shadow="md" px="md">
            <Group>
                <Link to={`/workflow/${name}`}>{name}</Link>
                <p>Created: {dayjs(createdDate).format("YYYY-MM-DD HH:mm:ss")}</p>
                <p>Modified: {dayjs(modifiedDate).format("YYYY-MM-DD HH:mm:ss")}</p>
            </Group>
        </Paper>
    )
}