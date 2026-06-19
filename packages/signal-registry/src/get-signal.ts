import {
  supabase
} from "@parmana/database";

import type {
  Signal
} from "./types.js";

export async function getSignal(
  signalId: string
): Promise<Signal | undefined> {

  const {
    data,
    error
  } = await supabase
    .from("signals")
    .select("*")
    .eq(
      "signal_id",
      signalId
    )
    .single();

  if (error) {
    return undefined;
  }

  return {
    signalId: data.signal_id,
    name: data.name,
    type: data.type,
    trusted: data.trusted,
    source: data.source
  };
}