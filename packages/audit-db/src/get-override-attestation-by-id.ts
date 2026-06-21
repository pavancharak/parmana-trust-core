import {
  supabase
} from "./supabase.js";

export async function getOverrideAttestationById(
  overrideAttestationId: string
) {

  const result =
    await supabase

      .from(
        "override_attestations"
      )

      .select("*")

      .eq(
        "override_attestation_id",
        overrideAttestationId
      )

      .maybeSingle();

  return result.data;

}