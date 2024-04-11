import React from 'react'
import { connect } from "react-redux";
import { removeWatchlist } from '../store/watchlists/action';
import { TrashIcon } from '@heroicons/react/20/solid'

function MyWatchlist(props) {

    const { removeWatchlist } = props;

    const userDataString = localStorage.getItem("userData");
    let data;

    if (userDataString === null) {
        data = [];
    } else {
        data = JSON.parse(userDataString);
    }

    const handleRemoveWatchlist = (watchlistName) => {
        // Dispatch action to remove the watchlist
        removeWatchlist(watchlistName);
    };

    return (
        <div>
            <h2 className="text-black text-xl font-semibold mb-4 text-center mt-4">My Watchlists</h2>
            {data.length > 0 ? data.map(watchlist => (
                <div key={watchlist.name} className="bg-white rounded-lg shadow-md mb-4 p-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold mb-2">{watchlist.name}</h3>
                        <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleRemoveWatchlist(watchlist.name)} />
                    </div>

                    <ul>
                        {watchlist.movies.map(movie => (
                            <li key={movie.imdbID} className="mb-2">
                                <span className="inline-block bg-gray-200 rounded-half px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{movie.Title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )) : <div className="flex justify-center items-center h-full">
                <p className="text-gray-500 text-center">No watchlists found. Please add movies to create multiple watchlists</p>
            </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        watchlists: state
    };
};

const mapDispatchToProps = {
    removeWatchlist
};

export default connect(mapStateToProps, mapDispatchToProps)(MyWatchlist);