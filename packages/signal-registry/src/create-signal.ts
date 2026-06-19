import {
  supabase
} from "@parmana/database";

import type {
  Signal
} from "./types.js";

export async function createSignal(
  signal: Signal
): Promise<Signal> {

  const {
    error
  } = await supabase
    .from("signals")
    .upsert({
      signal_id: signal.signalId,
      name: signal.name,
      type: signal.type,
      trusted: signal.trusted,
      source: signal.source
    });

  if (error) {
    throw error;
  }

  return signal;
}