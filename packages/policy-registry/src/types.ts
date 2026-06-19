export interface Policy {

  policyId: string;

  taskId: string;

  version: string;

  status:
    | "draft"
    | "active"
    | "retired";

  definition: unknown;

}