import React from 'react';
import FeedCardSkeleton from '../feed/card/Skeleton';

function FeedLoadingPlaceholder(props) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            <FeedCardSkeleton />
            <FeedCardSkeleton />
            <FeedCardSkeleton />
        </div>
    );
}

export default FeedLoadingPlaceholder;