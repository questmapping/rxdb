import type {
    RxStorage,
    RxStorageInstanceCreationParams
} from '../../types/index.d.ts';
import {
    RxStorageDexieStatics,
    RX_STORAGE_NAME_DEXIE
} from './dexie-helper.ts';
import type {
    DexieSettings,
    DexieStorageInternals
} from '../../types/plugins/dexie.d.ts';
import {
    createDexieStorageInstance,
    RxStorageInstanceDexie
} from './rx-storage-instance-dexie.ts';
import { ensureRxStorageInstanceParamsAreCorrect } from '../../rx-storage-helper.ts';



export class RxStorageDexie implements RxStorage<DexieStorageInternals, DexieSettings> {
    public name = RX_STORAGE_NAME_DEXIE;
    public statics = RxStorageDexieStatics;

    constructor(
        public settings: DexieSettings
    ) { }

    public createStorageInstance<RxDocType>(
        params: RxStorageInstanceCreationParams<RxDocType, DexieSettings>
    ): Promise<RxStorageInstanceDexie<RxDocType>> {
        ensureRxStorageInstanceParamsAreCorrect(params);
        return createDexieStorageInstance(this, params, this.settings);
    }
}


export function getRxStorageDexie(
    settings: DexieSettings = {}
): RxStorageDexie {
    const storage = new RxStorageDexie(settings);
    return storage;
}
