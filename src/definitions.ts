import { registerPlugin } from '@capacitor/core';

export interface BlockAppsPlugin {
  setBlockedPackages(options: { packages: string[] }): Promise<void>;
}

const BlockApps = registerPlugin<BlockAppsPlugin>('BlockApps');
export { BlockApps };