import { Skeleton } from '@mui/material';
import React from 'react';

function FeedCardSkeleton(props) {
    return (
        <div style={{ width: 345, margin: 12 }}>
            <Skeleton style={{ borderRadius: 4 }} variant="rectangular" width='100%' height={200} />
            <br />
            <Skeleton variant="text" width='100%' />
            <Skeleton variant="text" width='70%' />
        </div>
    );
}

export default FeedCardSkeleton;