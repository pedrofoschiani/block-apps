import { WebPlugin} from '@capacitor/core';

import type { BlockAppsPlugin } from './definitions';

export class BlockAppsWeb extends WebPlugin implements BlockAppsPlugin {
  setBlockedPackages(_options: { packages: string[]; }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
