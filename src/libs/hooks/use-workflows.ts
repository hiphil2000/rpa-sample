import { useState, useEffect } from "react";
import { Workflow } from "../db/types";
import {sleep} from "../utils.ts";

/**
 * Workflow List를 가져오는 Hook
 */
export default function useWorkflows() {
    const [workflows, setWorkflows] = useState<Workflow[]>([]);
    
    const fetchWorkflows = async () => {
        setWorkflows([]);
        const response = await fakeApi();
        setWorkflows(response);
    }
    
    const fakeApi = async (): Promise<Workflow[]> => {
        await sleep(1000);
        
        return [
            {
                id: "1",
                name: "Workflow 1",
                createdDate: new Date(),
                modifiedDate: new Date()
            },
            {
                id: "2",
                name: "Workflow 2",
                createdDate: new Date(),
                modifiedDate: new Date()
            }
        ];
    }

    useEffect(() => {
        // Fetch workflows from the database
        fetchWorkflows();
    }, []);

    return [workflows, fetchWorkflows] as const;
}