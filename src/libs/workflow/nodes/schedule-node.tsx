import {Center, Paper, Stack, Title} from "@mantine/core";
import {IconCalendarClock} from "@tabler/icons-react";
import {Handle, Position} from "@xyflow/react";

type ScheduleNodeProps = {
    data: ScheduleNodeData;
    isConnectable?: boolean;
    children?: never;
}

type ScheduleNodeData = {
    name: string;
}

export default function ScheduleNode({
    data, isConnectable
}: ScheduleNodeProps) {
    return (
        <Stack align="center">
            <Paper style={{width: 100, height: 100}}>
                <Center w="100%" h="100%">
                    <IconCalendarClock/>
                    <Handle type="source"
                            position={Position.Right}
                            id="next"
                            isConnectable={isConnectable}
                    />
                </Center>
            </Paper>
            <Title order={4}>{data.name}</Title>
        </Stack>
    )
}