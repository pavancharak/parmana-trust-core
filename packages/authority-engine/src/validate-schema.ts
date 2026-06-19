import type {
  Schema
} from "@parmana/schema-registry";

export function validateSchema(

  schema: Schema,

  signals: Record<
    string,
    unknown
  >

): string[] {

  const errors: string[] = [];

  for (

    const field of schema.fields

  ) {

    if (

      field.required &&

      !(field.name in signals)

    ) {

      errors.push(
        `${field.name} missing`
      );

      continue;
    }

    const value =
      signals[field.name];

    if (
      value === undefined
    ) {
      continue;
    }

    if (
      field.type === "boolean" &&
      typeof value !== "boolean"
    ) {
      errors.push(
        `${field.name} must be boolean`
      );
    }

    if (
      field.type === "number" &&
      typeof value !== "number"
    ) {
      errors.push(
        `${field.name} must be number`
      );
    }

    if (
      field.type === "string" &&
      typeof value !== "string"
    ) {
      errors.push(
        `${field.name} must be string`
      );
    }

  }

  return errors;

}