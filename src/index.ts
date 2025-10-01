import { registerPlugin } from '@capacitor/core';

import type { BlockAppsPlugin } from './definitions';

const BlockApps = registerPlugin<BlockAppsPlugin>('BlockApps', {
  web: () => import('./web').then((m) => new m.BlockAppsWeb()),
});

export * from './definitions';
export { BlockApps };
