import React from 'react';
import { useSelector } from 'react-redux';
import FeedLoadingPlaceholder from '../search/LoadingPlaceholder';
import { searchResult, loading } from '../search/searchSlice';
import FeedCard from './card';
import FeedCardSkeleton from './card/Skeleton';
import "./Feed.css";
import FeedPagination from './Pagination';

function Feed(props) {
    const searchResultSelector = useSelector(searchResult);
    const loadingSelector = useSelector(loading);

    React.useEffect(() => {
        console.log(searchResultSelector)
    }, [searchResultSelector])


    return (
        <div className="feed-wrapper">
            {/* if data is loading then show skeleton, otherwise map elements */}
            {loadingSelector ?
                <FeedLoadingPlaceholder /> :
                searchResultSelector.length <= 0 ? <h2>No stories found</h2> :
                    <div className="feed-card-wrapper">
                        {searchResultSelector?.map((item, index) => {
                            return <FeedCard key={item.href} data={item} />
                        })}
                    </div>
            }

            {searchResultSelector.length > 0 &&
                <FeedPagination />
            }
        </div>
    );
}

export default Feed;