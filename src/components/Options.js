import { AspectRatio, Box, Input, Button, Spinner } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SocketContext } from '../Context'
import { MdVideoCall } from 'react-icons/md'

const Options = ({ children }) => {
  const { me, call, callAccepted, callEnded, name, setName, leaveCall, callUser } = useContext(SocketContext)
  const [idToCall, setIdToCall] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  if (isCopied) {
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }
  if (isClicked) {
    setTimeout(() => {
      setIsClicked(false)
    }, 5000)
  }
  console.log('call', call)
  return (
    <Box boxShadow='md' rounded='lg' borderColor='#38B2AC80' borderWidth='2px' borderRadius='20px' overflow='hidden'>
      <AspectRatio w='lg' ratio={4 / 3}>
      <div className='flex-column'>
        <h1 className='text-center'><strong>Call a friend!</strong></h1>
        <div>
          <div className='call-options'>
            <Input required variant='filled' placeholder='Call ID' value={idToCall} onChange={(e) => { setIdToCall(e.target.value) }} />
            <Button isLoading={isClicked} variant='none' border='0' type='submit' onClick={() => { callUser(idToCall); setIsClicked(true) }}><MdVideoCall color='green' size={90} /></Button>
          </div>
          <br />
          <CopyToClipboard text={me} onCopy={() => setIsCopied(true)}>
            <Button width='93%' colorScheme='teal' variant='outline' >{isCopied ? 'Copied!' : 'Copy my Call ID'}</Button>
          </CopyToClipboard>
        </div>
        </div>
      </AspectRatio>
    </Box>
  )
}
export default Options
