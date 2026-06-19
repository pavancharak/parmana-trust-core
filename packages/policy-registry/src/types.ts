export interface Policy {

  policyId: string;

  taskId: string;

  schemaId: string;

  version: string;

  status:
    | "draft"
    | "active"
    | "retired";

  definition: unknown;

}