import Dexie ,{Table} from 'dexie';

export interface McSkin {
    id?: number;
    name: string;
    isSlim: boolean;
    isHD:boolean;
    data:string;
    lastMotify:boolean;
  }
  export class MySubClassedDexie extends Dexie {
    // 'friends' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    skins!: Table<McSkin>; 
  
    constructor() {
      super('skinner');
      this.version(1).stores({
        skins: '++id, name, isSlim , isHD , data ,lastMotify' // Primary key and indexed props
      });
    }
  }
  
  export const db = new MySubClassedDexie();