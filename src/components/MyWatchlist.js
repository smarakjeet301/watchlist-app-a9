import React from 'react'
import { connect } from "react-redux";

function MyWatchlist(props) {
    const data = props.watchlists.watchlist.watchlists.length > 0 ? props.watchlists.watchlist.watchlists : JSON.parse(localStorage.getItem('userData'))
    localStorage.setItem('userData', JSON.stringify(data));

    const oldData = JSON.parse(localStorage.getItem('userData'))

    oldData.push(...props.watchlists.watchlist.watchlists)

    return (
        <div>
            <h2 className="text-black text-xl font-semibold mb-4 text-center mt-4">My Watchlists</h2>
            {data.map(watchlist => (
                <div key={watchlist.name} className="bg-white rounded-lg shadow-md mb-4 p-4">
                    <h3 className="text-lg font-semibold mb-2">{watchlist.name}</h3>
                    <ul>
                        {watchlist.movies.map(movie => (
                            <li key={movie.imdbID} className="mb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{movie.Title}</span>
                                <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Year: {movie.Year}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        watchlists: state
    };
};

export default connect(mapStateToProps)(MyWatchlist);