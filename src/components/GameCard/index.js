import './index.css'

import {Link} from 'react-router-dom'

const GameCard = props => {
  const {data} = props
  const {id, thumbnailUrl, title, viewCount} = data
  return (
    <li className="game-card-li">
      <Link to={`/videos/${id}`}>
        <img className="game-card-thumbnail" src={thumbnailUrl} alt={title} />
        <p>{title}</p>
        <p>{viewCount}</p>
      </Link>
    </li>
  )
}

export default GameCard