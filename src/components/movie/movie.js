import React, {PureComponent} from 'react'

class Movie extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentWillUpdate() {
        console.log('---', 'will update')
    }

    render() {
        const {movie, onCardClick} = this.props
        console.log(movie.date)
        return (
            <div className="movie-card" onClick = {onCardClick}>
                <div className="movie-img">
                    <img src={movie.poster_path}></img>
                </div>
                <div className="movie-info">
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-release-date">{(new Date(movie.release_date)).getFullYear().toString()}</div>
                    <div className="movie-genres">{movie.genres.toString()}</div>
                </div>
            </div>
        )
    }
}


export default Movie