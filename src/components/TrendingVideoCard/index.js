import './index.css'

import {Link} from 'react-router-dom'

const TrendingVideoCard = props => {
  const {data} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = data
  return (
    <Link to={`/videos/${id}`}>
      <li className="trending-video-li">
        <img
          className="trending-video-thumbnail"
          src={thumbnailUrl}
          alt={title}
        />
        <div>
          <p>{title}</p>
          <p>{channel.name}</p>
          <p>{viewCount} views</p>
          <p>{publishedAt}</p>
        </div>
      </li>
    </Link>
  )
}

export default TrendingVideoCard
