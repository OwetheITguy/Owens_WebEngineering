import React from "react";


const  Comicview = (props) => {
    const {jokeComicInfo} = props

    return(
        <div>
            <h1>
                {jokeComicInfo.safe_title}
            </h1>
            <div>
                <img src={jokeComicInfo.img} alt={jokeComicInfo.alt || "No Joke comic today"} />
            </div>
            <div>
                {jokeComicInfo.transcript}
            </div>
        </div>
    )
}


export default Comicview;