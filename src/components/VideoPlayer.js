import { AspectRatio, Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useContext } from "react"
import { SocketContext } from "../Context"

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
            <Box boxShadow='md' rounded='lg' borderColor='#000' borderWidth='2px' borderRadius='20px' overflow='hidden'>
              <AspectRatio w='lg' ratio={4 / 3}>
              <video playsInline muted ref={myVideo} autoPlay />
              </AspectRatio>
            </Box>
          </div>
        )}
      {
        stream && user === 'receiver' && (
          <div>
            <h2 className="user-name">{call.name}</h2>
            <Box boxShadow='md' rounded='lg' borderColor='#000' borderWidth='2px' borderRadius='20px' overflow='hidden'>
              <AspectRatio w='lg' ratio={4 / 3}>
                <video playsInline ref={userVideo} autoPlay />
              </AspectRatio>
            </Box>
          </div>
        )
      }
    </>
  )
}
export default VideoPlayer