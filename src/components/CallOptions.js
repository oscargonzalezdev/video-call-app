
import { FcEndCall } from 'react-icons/fc'
import { IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { SocketContext } from '../Context'

function CallOptions() {

  const { leaveCall } = useContext(SocketContext)

  return (
    <div>
      <IconButton onClick={leaveCall} aria-label='End Call' icon={<FcEndCall size='lg' />} /> 
    </div>
  )
}

export default CallOptions