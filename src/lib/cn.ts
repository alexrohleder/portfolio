function cn(...classNames: Array<false | null | undefined | string>): string {
  return classNames.filter(Boolean).join(" ");
}

export default cn;
