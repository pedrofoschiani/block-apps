export interface BlockAppsPlugin {
  /**
   * Define a lista de pacotes de aplicativos que devem ser bloqueados.
   * @param options - Um objeto contendo a lista de pacotes.
   */
  setBlockedPackages(options: { packages: string[] }): Promise<void>;
}
