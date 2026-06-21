import {
  supabase
} from "./supabase.js";

export async function getOverrideById(
  overrideId: string
) {

  const result =
    await supabase

      .from(
        "override_decisions"
      )

      .select("*")

      .eq(
        "override_id",
        overrideId
      )

      .maybeSingle();

  return result.data;

}