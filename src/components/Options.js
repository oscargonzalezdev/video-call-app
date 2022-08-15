import { AspectRatio, Box, Input, Button, IconButton } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SocketContext } from '../Context'
import { MdVideoCall } from 'react-icons/md'

const Options = ({ children }) => {
  const { me, callUser } = useContext(SocketContext)
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

  return (
    <Box boxShadow='md' bg='rgba(222, 222, 222, 0.7)' rounded='lg' borderColor='#38B2AC80' borderWidth='2px' borderRadius='20px' overflow='hidden'>
      <AspectRatio w='lg' ratio={4 / 3}>
        <div className='flex-column'>
          <h1 className='text-center'><strong>Call a friend!</strong></h1>
          <div>
            <div className='flex-row call-options'>
                <Input required variant='filled' placeholder='Call ID' value={idToCall} onChange={(e) => { setIdToCall(e.target.value) }} />
                <IconButton isLoading={isClicked} disabled={idToCall.length < 7} onClick={()=>{callUser(idToCall); setIsClicked(true)}} variant='none' aria-label='Call' icon={<MdVideoCall color='green' size='80px'/>} />
            </div>
            <div>
              <CopyToClipboard text={me} onCopy={() => setIsCopied(true)}>
                <Button w='98%' colorScheme='teal' variant='outline' >{isCopied ? 'Copied!' : 'Copy my Call ID'}</Button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </AspectRatio>
    </Box>
  )
}
export default Options
