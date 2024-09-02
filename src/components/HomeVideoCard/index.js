import './index.css'

import {Link} from 'react-router-dom'

const HomeVideoCard = props => {
  const {videoInfo} = props
  //console.log(videoInfo)
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = videoInfo
  return (
    <li className="video-card-li">
      <Link style={{textDecoration: 'none'}} to={`/videos/${id}`}>
        <div>
          <img
            className="video-card-thumbnail"
            src={thumbnailUrl}
            alt={title}
          />
        </div>
        <div style={{display: 'flex', marginTop: '12px'}}>
          <div style={{padding: '12px'}}>
            <img
              className="channel-logo"
              src={channel.profile_image_url}
              alt={channel.name}
            />
          </div>
          <div>
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default HomeVideoCard