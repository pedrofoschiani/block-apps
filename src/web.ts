import { WebPlugin, registerPlugin} from '@capacitor/core';

import type { BlockAppsPlugin } from './definitions';

export class BlockAppsWeb extends WebPlugin implements BlockAppsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
