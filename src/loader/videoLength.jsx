import React from 'react'
import moment from 'moment'

const VideoLength = () => {
  const videoLengthInSeconds = moment().startOf("day").seconds("time").format("H:mm:ss")
  return (
    <div className="absolute bottom-4 right-2 bg-black py-1 px-2 text-white text-sm rounded-md">
      {videoLengthInSeconds}
    </div>
  )
}

export default VideoLength