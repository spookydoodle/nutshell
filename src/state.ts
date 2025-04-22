import * as rxjs from 'rxjs';
import * as Types from './types';
import { Slideshow } from './logic/slideshow/slideshow';

export const mode$ = new rxjs.BehaviorSubject<Types.Mode>('light');
export const slideshows$ = new rxjs.BehaviorSubject<Slideshow[]>([]);
