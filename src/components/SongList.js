import React from "react"
import SongListItem from "./SongListItem"

function SongList(props) {
  let sortedSongs = [...props.songs]

  const sortBy = (key) => {
    return function (a, b) {
      return a[key].toLowerCase().localeCompare(b[key].toLowerCase())
    }
  }

  switch (props.sortType) {
    case "songName-az":
      sortedSongs = sortedSongs.sort(sortBy("songName"))
      break;
    case "songName-za":
      sortedSongs = sortedSongs.sort(sortBy("songName")).reverse()
      break;
    case "artist-az":
      sortedSongs = sortedSongs.sort(sortBy("artist"))
      break;
    case "artist-za":
      sortedSongs = sortedSongs.sort(sortBy("artist")).reverse()
      break;
    case "rating-15":
      sortedSongs = sortedSongs.sort(sortBy("rating"))
      break;
    case "rating-51":
      sortedSongs = sortedSongs.sort(sortBy("rating")).reverse()
      break;
    default:
      break;
  }

  const allFiltersArray = Object.entries(props.filters)
  const activeFilters = allFiltersArray.filter((filter) => {
    return filter[1] === true
  }).map((filter) => {
    return filter[0]
  })
  
  let sortedAndFilteredSongs = sortedSongs
  if (activeFilters.length > 0) {
    sortedAndFilteredSongs = sortedSongs.filter((song) => {
      return (activeFilters.includes(song.genre) || activeFilters.includes(song.rating))
    })
  }

  return (   
    <table className="song-list">
      <thead>
          <tr className="song-header">  
              <th 
                className="song-row__item" 
                name="song" 
                onClick={props.handleSorting}
              >Song
                {
                  props.sortType === "songName-az" ? 
                  " \u25BC" :
                  props.sortType === "songName-za" ?
                  " \u25B2" :
                  ""
                }
              </th>
              
              <th 
                className="song-row__item" 
                name="artist" 
                onClick={props.handleSorting}
              >Artist
                {
                  props.sortType === "artist-az" ? 
                  " \u25BC" :
                  props.sortType === "artist-za" ?
                  " \u25B2" :
                  ""
                }
              </th>

              <th 
                className="song-row__item genre"
              >Genre
              </th>

              <th 
                className="song-row__item" 
                name="rating" 
                onClick={props.handleSorting}
              >Rating
                {
                  props.sortType === "rating-15" ? 
                  " \u25BC" :
                  props.sortType === "rating-51" ?
                  " \u25B2" :
                  ""
                }
              </th>
              <th></th>
          </tr>
      </thead>
      
      <tbody>
        {
          sortedAndFilteredSongs.map((song) => {
            return (
              <SongListItem key={song.id} song={song} removeSong={props.removeSong} />
            )
          })
        }
      </tbody>
      
    </table>    
    
  );
}

  
export default SongList