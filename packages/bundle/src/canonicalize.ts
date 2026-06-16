export function canonicalize(
  value: unknown
): unknown {

  if (
    Array.isArray(value)
  ) {

    return value.map(
      canonicalize
    );
  }

  if (
    value !== null &&
    typeof value === "object"
  ) {

    return Object
      .keys(
        value as Record<string, unknown>
      )
      .sort()
      .reduce(

        (
          result,
          key
        ) => {

          result[key] =
            canonicalize(
              (
                value as Record<
                  string,
                  unknown
                >
              )[key]
            );

          return result;

        },

        {} as Record<
          string,
          unknown
        >
      );
  }

  return value;
}