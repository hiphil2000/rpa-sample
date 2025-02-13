import AppTemplate from "../templates/app-template.tsx";
import {useWorkflows} from "../libs/hooks";
import {WorkflowItem} from "../components";
import {Stack} from "@mantine/core";

export default function Home() {
    const [workflows] = useWorkflows();

    return (
        <AppTemplate header={"Home"}>
            <Stack gap="md" p="md">
                {workflows.map((workflow) => {
                    const {id, name, createdDate, modifiedDate} = workflow;
                    return (
                        <WorkflowItem key={id}
                                      name={name}
                                      createdDate={createdDate}
                                      modifiedDate={modifiedDate}
                        />
                    )
                })}
            </Stack>
        </AppTemplate>
    )
}