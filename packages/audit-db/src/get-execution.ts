import {
  supabase
} from "./supabase.js";

export async function getExecution(
  executionId: string
) {

  const {
    data,
    error
  } = await supabase

    .from(
      "execution_records"
    )

    .select("*")

    .eq(
      "execution_id",
      executionId
    )

    .single();

  if (error) {

    throw error;

  }

  return data;
}