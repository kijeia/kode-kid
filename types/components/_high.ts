import { ProjectSchema } from "@/constants/projects";

export interface ContentProps {
    selectedProject: ProjectSchema | null
}

export interface ProjectsProps {
    handleProject: (selectedProject: ProjectSchema | null) => void
}