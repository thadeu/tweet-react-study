import React from 'react'
import { ActionIcon } from '../ActionIcon'

export function Tweet({ tweet, isLiked, onClickLike }) {
  return (
    <div className="list-group-item mb-1" style={{ maxWidth: 600, margin: '0 auto' }}>
      <div className="media">
        <img 
          className="mr-3 rounded-circle"
          src={`https://pbs.twimg.com/profile_images/846497321126912001/n2eR-MKY_bigger.jpg`}
          alt="Avatar"
        />

        <div className="media-body">
          <div className="font-weight-bold">{tweet.username}</div>
          <p>{tweet.content}</p>
          <div className="d-flex justify-content-around mt-4">
            <ActionIcon icon="comment-square" />
            <ActionIcon icon="loop-square" />
            <ActionIcon
              icon="heart"
              count={tweet.likes}
              highlight={isLiked}
              highlightColor="red"
              onClick={onClickLike.bind(null, tweet.id)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}