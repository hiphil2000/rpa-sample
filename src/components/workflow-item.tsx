import dayjs from "dayjs";
import {Group, Paper, Stack, Text} from "@mantine/core";
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
            <Group p="md">
                <Stack gap="xs">
                    <Link to={`/workflow/${name}`}>{name}</Link>
                    <Text size="xs">Modified: {dayjs(modifiedDate).format("YYYY-MM-DD HH:mm:ss")} Created: {dayjs(createdDate).format("YYYY-MM-DD HH:mm:ss")}</Text>
                </Stack>
            </Group>
        </Paper>
    )
}