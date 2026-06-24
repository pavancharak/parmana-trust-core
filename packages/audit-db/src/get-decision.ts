import {
  supabase
} from "./supabase.js";

export async function getDecision(
  decisionId: string
) {

  const {
    data,
    error
  } = await supabase

    .from(
      "authority_decisions"
    )

    .select("*")

    .eq(
      "decision_id",
      decisionId
    )

    .single();

  if (error) {

    return undefined;

  }

  return data;

}