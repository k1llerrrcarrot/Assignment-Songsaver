import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"
import SongFilters from "./SongFilters"

class SongOverview extends React.Component {

    constructor() {
        super()
        this.state = {
            sortType: "",
            filters: {
              rock: false,
              jazz: false,
              pop: false,
              oneStar: false,
              twoStar: false,
              threeStar: false,
              fourStar: false,
              fiveStar: false,
            },
            songs: []
        }
    }
  
    addSong = (song) => {
      song.id = this.state.songs.length + 1

      this.setState((prevState) => {
          const newSonglist = prevState.songs
          newSonglist.push(song)
          return {songs: newSonglist}
      })
    }
    
    removeSong = (song) => {
      const songToRemove = this.state.songs.findIndex((item) => {
          return item === song
      })

      this.setState((prevState) => {
          const newSongList = prevState.songs
          
          newSongList.splice(songToRemove, 1)

          //decrement all id's after the removed song to avoid duplicates
          for (let i = songToRemove; i < newSongList.length; i++) { 
              newSongList[i].id = newSongList[i].id - 1
          }

          return (
              {songs: newSongList}
          )
      })
    }

    handleSorting = (event) => {
        const clickedElementValue = event.target.attributes.name.value
  
        if (clickedElementValue === "song") {
          switch (this.state.sortType) {
            case "songName-az":
              this.setState({sortType: "songName-za"})
              break;
  
            case "songName-za":
              this.setState({sortType: ""})
              break;
  
            default:
              this.setState({sortType: "songName-az"})
              break;
          }
        }
        
        if (clickedElementValue === "artist") {
          switch (this.state.sortType) {
            case "artist-az":
              this.setState({sortType: "artist-za"})
              break;
  
            case "artist-za":
              this.setState({sortType: ""})
              break;
  
            default:
              this.setState({sortType: "artist-az"})
              break;
          }
        }
  
        if (clickedElementValue === "rating") {
          switch (this.state.sortType) {
            case "rating-15":
              this.setState({sortType: "rating-51"})
              break;
  
            case "rating-51":
              this.setState({sortType: ""})
              break;
  
            default:
              this.setState({sortType: "rating-15"})
              break;
          }
        }
    }

    handleFilter = (event) => {
      const {name, checked} = event.target
      this.setState((prevState) => {
        const newFilters = prevState.filters
        newFilters[name] = checked
        return (
          {filters: newFilters}
        )
      })
    }

    render() {
        return (
            <div className="main">
                <header>
                  <h1>Winc Liedjeslijst</h1>
                </header>
                
                <SongForm addSong={this.addSong}/>

                <SongFilters 
                  handleFilter={this.handleFilter}
                  filters={this.state.filters}
                />
             
                <SongList 
                  songs={this.state.songs} 
                  removeSong={this.removeSong} 
                  handleSorting={this.handleSorting} 
                  sortType={this.state.sortType}
                  filters={this.state.filters}
                />
            </div>
        );
    }
}
  
export default SongOverview