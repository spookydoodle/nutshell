import React from 'react';
import * as rxjs from 'rxjs';

export function useSubject<T>(subject$: rxjs.BehaviorSubject<T>): T {
    const [subject, setSubject] = React.useState<T>(subject$.value);

    React.useEffect(() => {
        const subscription = subject$.subscribe(setSubject);

        return () => {
            subscription.unsubscribe();
        };
    }, [subject$]);

    return subject;
}
