import { AspectRatio, Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useContext } from "react"
import { SocketContext } from "../Context"

const VideoPlayer = (props) => {

  const { stream, setStream, name, callAccepted, myVideo, userVideo, callEnded, call } = useContext(SocketContext)
  const { video } = props

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
        stream && (
          <div>
            <h2 className="user-name">{video === myVideo ? name : call.name}</h2>
            <Box boxShadow='md' rounded='lg' borderColor='#38B2AC80' borderWidth='2px' borderRadius='20px' overflow='hidden'>
              <AspectRatio w='lg' ratio={4 / 3}>
                <video playsInline muted ref={video} autoPlay />
              </AspectRatio>
            </Box>
          </div>
        )}
    </>
  )
}
export default VideoPlayer