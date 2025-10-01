export interface BlockAppsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
