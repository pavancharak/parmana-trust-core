export interface SchemaField {

  name: string;

  type: string;

  required: boolean;

}

export interface Schema {

  schemaId: string;

  policyId: string;

  version: string;

  fields: SchemaField[];

}