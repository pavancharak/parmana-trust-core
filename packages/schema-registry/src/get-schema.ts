import {
  schemas
} from "./store.js";

export function getSchema(
  schemaId: string
) {

  return schemas.get(
    schemaId
  );

}