import { useContext } from "react"
import { SocketContext } from "../Context"

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
  return (
    <div>
    {stream && (
      <div>
        <h1>{name || 'Name'}</h1>
        <video playsInline muted ref={myVideo} autoPlay />
      </div>
    )}
    {callAccepted && !callEnded && (
      <div>
        <h1>{call.name || 'Name'}</h1>
        <video playsInline ref={userVideo} autoPlay />
      </div>
    )}
    </div>
  )
}
export default VideoPlayer