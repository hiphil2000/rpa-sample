import AppTemplate from "../templates/app-template.tsx";
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Controls,
    MiniMap,
    ReactFlow,
    SelectionMode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {useParams} from "react-router-dom";
import {useColorScheme} from "@mantine/hooks";
import {useCallback, useState} from "react";
import {nodeTypes} from "../libs/workflow/nodes";
import {Title} from "@mantine/core";

const initialNodes = [
    {
        id: "1",
        type: "schedule",
        position: { x: 0, y: 0},
        data: { name: "Scheduled Node" }
    }
]

type EditorParams = {
    id: string;
}

export default function Editor() {
    const {id} = useParams<EditorParams>();
    const colorScheme = useColorScheme();

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);

    const onNodesChange = useCallback(
        (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );
    const onEdgesChange = useCallback(
        (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );
    const onConnect = useCallback(
        (connection: any) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges],
    );

    return (
        <AppTemplate header={<Title order={3}>{id}</Title>}>
            <div style={{width: '800px', height: '800px'}}>
                <ReactFlow colorMode={colorScheme}
                           panOnDrag={[1, 2]}
                           panOnScroll
                           selectionOnDrag
                           selectionMode={SelectionMode.Partial}
                           nodes={nodes}
                           edges={edges}
                           onNodesChange={onNodesChange}
                           onEdgesChange={onEdgesChange}
                           onConnect={onConnect}
                           nodeTypes={nodeTypes}
                           fitView
                >
                    <Background/>
                    <Controls/>
                    <MiniMap/>
                </ReactFlow>
            </div>
        </AppTemplate>
    )
}