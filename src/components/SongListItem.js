import React from "react"

function SongListItem(props) {
    let ratingAsNumber

    switch (props.song.rating) {
        case "oneStar":
            ratingAsNumber = "1"
            break;
        case "twoStar":
            ratingAsNumber = "2"
            break;
        case "threeStar":
            ratingAsNumber = "3"
            break;
        case "fourStar":
            ratingAsNumber = "4"
            break;
        default:
            ratingAsNumber = "5"
            break;
        
    }

    return(
        <tr>
            <td>{props.song.songName}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.genre[0].toUpperCase() + props.song.genre.substring(1)}</td>
            <td>{ratingAsNumber}</td>
            <td><button onClick={() => props.removeSong(props.song)}>Remove</button></td>
        </tr>
    )
}

export default SongListItem