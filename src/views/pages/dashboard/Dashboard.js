import React from 'react'
import { connect } from 'react-redux';
import Banner from '../../../components/Banner'

// Actions
import { createWatchlist, addMovieToWatchlist } from '../../../store/watchlists/action';

// Components
import Nav from '../../../components/Nav';
import MovieGrid from '../../../components/MovieGrid';
import SearchBar from '../../../components/SearchBar';


function Dashboard({ watchlists, createWatchlist, addMovieToWatchlist }) {
    return (
        <div className="flex h-screen">
            {/* Left Column */}
            <Nav />
            {/* Right Column */}
            <div className="w-4/5">
                <Banner />
                <SearchBar />
                <MovieGrid />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    try {
        return {
            watchlists: state.watchlist.watchlists
        }
    } catch (err) {
        console.error(err)
    }
}



export default connect(mapStateToProps, { createWatchlist, addMovieToWatchlist })(Dashboard);