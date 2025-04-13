import * as rxjs from 'rxjs';
import * as Utils from './utils';
import * as Types from './types';
import { BG_IMG_MAX } from './layouts/images';


export const backgroundIndex$ = new rxjs.BehaviorSubject<number>(Utils.Numbers.getRandom(BG_IMG_MAX));
export const mode$ = new rxjs.BehaviorSubject<Types.Mode>('light');
