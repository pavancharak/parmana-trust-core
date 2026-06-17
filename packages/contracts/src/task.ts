export interface TaskDefinition {

  taskId: string;

  name: string;

  policy: {

    policyId: string;

    policyVersion: string;
  };
}