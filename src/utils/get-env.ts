export function getEnv(name: string, defaultValue: string): string {
  const value = process.env[name];
  if (!value) return defaultValue;
  return value;
}