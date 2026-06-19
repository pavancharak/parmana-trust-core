import {
  schemas
} from "./store.js";

export function listSchemas() {

  return [
    ...schemas.values()
  ];

}