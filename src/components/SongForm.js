import React from "react"

class SongForm extends React.Component {
    constructor() {
        super()
        this.state = {
            songName: "",
            artist: "",
            genre: "",
            rating: "",
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (
            this.state.songName &&
            this.state.artist &&
            this.state.genre &&
            this.state.rating
        ) {
            this.props.addSong(this.state)
            this.setState({
                songName: "",
                artist: "",
                genre: "",
                rating: "",
            })
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    } 

    render() {
        return (
            <form>
                <input 
                    type="text"
                    name="songName"
                    placeholder="Song name"
                    onChange={this.handleChange}
                    value={this.state.songName}
                />

                <input 
                    type="text"
                    name="artist"
                    placeholder="Artist"
                    onChange={this.handleChange}
                    value={this.state.artist}
                />

                <select 
                    name="genre"
                    onChange={this.handleChange}
                    value={this.state.genre}
                >
                    <option value="">Genre</option>
                    <option value="rock">Rock</option>
                    <option value="jazz">Jazz</option>
                    <option value="pop">Pop</option>
                </select>

                <select 
                    name="rating"
                    onChange={this.handleChange}
                    value={this.state.rating}
                >
                    <option value="" style={{color: "grey"}}>Rating</option>
                    <option value="oneStar">1</option>
                    <option value="twoStar">2</option>
                    <option value="threeStar">3</option>
                    <option value="fourStar">4</option>
                    <option value="fiveStar">5</option>
                </select>

                <button
                    onClick={this.handleSubmit}
                >Add Song</button>
            </form>
            
        )
    }
}

export default SongForm