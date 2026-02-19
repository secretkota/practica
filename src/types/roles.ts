export interface Role {
    id: number;
    title: string;
    description: string;
    permissions: string[]
}

export interface Permission {
  code: string
  name: string
  group: string
  description: string
}