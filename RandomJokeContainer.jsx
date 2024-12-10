import React, {useEffect, useState } from "react";
import Comicview from "../Components/ComicView";
import { useStore } from "../createStore";


const RandomJokeContainer = () => {
    const RandomJoke = useStore()

    useEffect(() => {
        RandomJoke.fetchRandomJoke()
    },[])

    return RandomJoke.RandomJokeStatus === "SUCCESS" ?
        <Comicview
            JokeComicInfo={RandomJoke.RandomJoke}
        />
        : RandomJoke.RandomJokeStatus === "Failure" ?
            onFailure()
            : <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

    function onFailure() {
        return(
            <div>
                Oops something went wrong, please try again later...
            </div>
        )
    }
}

export default RandomJokeContainer;