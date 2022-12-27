import {useState, useEffect} from "react";
import data from "../data/Data.json";

export default function Header() {
    return (
        <div className="sticky top-0 z-50 bg-black">
            <div className="grid max-w-screen-xl p-4 mx-auto lg:gap-8 xl:gap-0">
                <div className="header--wrapper">
                    <nav>
                        <div className="header--logo">
                            <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'}/>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}