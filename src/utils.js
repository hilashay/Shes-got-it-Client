export function formatKey(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/[A-Z]/g, " $&").trim();
}
