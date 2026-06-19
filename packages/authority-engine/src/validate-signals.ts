import {
  getSignal
} from "@parmana/signal-registry";

export async function validateSignals(

  signalIds: string[]

): Promise<string[]> {

  const errors: string[] = [];

  for (

    const signalId of signalIds

  ) {

    const signal =
      await getSignal(
        signalId
      );

    if (!signal) {

      errors.push(
        `${signalId} not registered`
      );

      continue;
    }

    if (!signal.trusted) {

      errors.push(
        `${signalId} not trusted`
      );

    }

  }

  return errors;

}