"use client"

import { useParams } from "next/navigation";

export const useProjectParams = () => {
    const params = useParams();
    const id = typeof params?.id === "string" ? params.id : null;
    return id;
};
