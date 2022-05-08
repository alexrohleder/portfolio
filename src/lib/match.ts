function match<T extends string | number = string, R = unknown>(
  value: T,
  lookup: Record<T, R>
): R {
  if (value in lookup) {
    return lookup[value];
  }

  throw new Error(
    `Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ` +
      Object.keys(lookup)
        .map((key) => `"${key}"`)
        .join(", ")
  );
}

export default match;
