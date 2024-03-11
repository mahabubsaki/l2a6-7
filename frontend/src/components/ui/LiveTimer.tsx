import { formatDistance } from 'date-fns';
import { useEffect, useState } from 'react';

const LiveTimer = ({ time }: { time: Date; }) => {
    const [liveTime, setLiveTime] = useState<Date>(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setLiveTime(new Date());
        }, 1000 * 60);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            {formatDistance(new Date(time), liveTime, { addSuffix: true })}
        </>
    );
};

export default LiveTimer;