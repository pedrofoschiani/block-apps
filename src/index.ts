import { registerPlugin } from '@capacitor/core';

import type { BlockAppsPlugin } from './definitions';

const BlockApps = registerPlugin<BlockAppsPlugin>('BlockApps');

export * from './definitions';
export { BlockApps };