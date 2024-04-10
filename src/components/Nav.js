import React from 'react'
import appConfig from '../config/appConfig';
import { connect } from "react-redux";
import MyWatchlist from './MyWatchlist';

function Nav(props) {
    return (
        <div className="w-1/5 border-solid border-0 border-r border-grey">
            <h2 className="text-black text-2xl font-semibold p-4 text-center">{appConfig.appName}</h2>
            <div class="pt-2 relative mx-auto text-gray-600 text-center">
                <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
            </div>
            <MyWatchlist />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        watchlists: state
    };
};

export default connect(mapStateToProps)(Nav);