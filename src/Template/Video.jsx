import React from 'react'

const Video = ({video, imgsrc, clip}) => {
  return (
    <div>
        <img src={imgsrc} alt="image" />
        <video type='video/mp4' src={clip}></video>
    </div>
  )
}

export default Video