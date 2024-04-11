import React from 'react';
import appConfig from '../config/appConfig';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyWatchlist from './MyWatchlist';

function Nav(props) {
    const navigate = useNavigate()
    return (
        <div className="w-1/5 border-solid border-0 border-r border-grey relative">
            <h2 className="text-black text-2xl font-semibold p-4 text-center">{appConfig.appName}</h2>
            <div className="pt-2 relative mx-auto text-gray-600 text-center">
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                />
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
            </div>
            <MyWatchlist />
            <div className="absolute bottom-0 left-0 mb-4 w-full flex items-center justify-center cursor-pointer" onClick={(e) => {
                e.preventDefault()
                localStorage.removeItem("currentUser")
                navigate('/login')
            }}>
                <img src="https://avatar.iran.liara.run/public" alt="Avatar" className="h-10 w-10 rounded-full" />
                <p className="ml-2 text-gray-600">Logout</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        watchlists: state,
    };
};

export default connect(mapStateToProps)(Nav);
