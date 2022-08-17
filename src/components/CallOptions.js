
import { FcEndCall } from 'react-icons/fc'
import { IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { SocketContext } from '../Context'

function CallOptions() {

  const { leaveCall } = useContext(SocketContext)

  return (
    <div className='call-options'>
      <IconButton bg='#ccc' borderRadius={50} onClick={leaveCall} aria-label='End Call' icon={<FcEndCall size='lg' />} /> 
    </div>
  )
}

export default CallOptions