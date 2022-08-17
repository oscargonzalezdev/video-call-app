import { AspectRatio, Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useContext } from "react"
import { SocketContext } from "../Context"
import CallOptions from './CallOptions'

const VideoPlayer = (props) => {
  const { stream, setStream, name, myVideo, userVideo, call } = useContext(SocketContext)
  const { user } = props

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });
  }, [])

  return (
    <>
      {
        stream && user === 'sender' && (
          <div>
            <h2 className="user-name">{name}</h2>
            <Box boxShadow='md' rounded='lg' shadow='7px 7px 0 #5d5373' border='1px solid #ccc' borderRadius='20px' overflow='hidden'>
              <AspectRatio w='lg' ratio={4 / 3}>
                <video className="video-player" playsInline muted ref={myVideo} autoPlay />
              </AspectRatio>
            </Box>
          </div>
        )}
      {
        stream && user === 'receiver' && (
          <div>
            <h2 className="user-name">{call.name}</h2>
            <Box boxShadow='md' rounded='lg' shadow='7px 7px 0 #5d5373' border='1px solid #ccc' borderRadius='20px' overflow='hidden'>
              <AspectRatio w='lg' ratio={4 / 3}>
                <div>
                  <CallOptions />
                  <video playsInline ref={userVideo} autoPlay />
                </div>
              </AspectRatio>
            </Box>
          </div>
        )
      }
    </>
  )
}
export default VideoPlayer