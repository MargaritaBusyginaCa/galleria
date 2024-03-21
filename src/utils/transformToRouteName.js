export function transformToRouteName(string) {
  return string.toLowerCase().replace(/ /g, "-");
}
