import { useEffect, useState } from 'react';
import { interval } from "rxjs";
import { map } from "rxjs/operators";

const SECOND = 1000

const useTimer = () => {
    const [iteration, setIteration] = useState(0)
    const timer$ = interval(SECOND).pipe(
        map(() => setIteration(iteration + 1))
    )
    useEffect(() => {
        const sub = timer$.subscribe()
        return () => sub.unsubscribe()
    }, [timer$]);
    return { iteration }
}

export default useTimer