import { AspectRatio, Box, Input, Button, IconButton } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SocketContext } from '../Context'
import { MdVideoCall } from 'react-icons/md'

const Options = () => {
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
    <Box bg='rgba(222, 222, 222, 0.8)' rounded='lg' shadow='7px 7px 0 #5d5373' border='1px solid #ccc' borderRadius='20px' overflow='hidden'>
      <AspectRatio w='lg' ratio={4 / 3}>
        <div className='flex-column'>
          <h1 className='text-center'><strong>Call a friend!</strong></h1>
          <div>
            <div className='flex-row'>
                <Input required variant='filled' placeholder='Call ID' value={idToCall} onChange={(e) => { setIdToCall(e.target.value) }} />
                <IconButton isLoading={isClicked} disabled={idToCall.length < 7} onClick={()=>{callUser(idToCall); setIsClicked(true)}} variant='none' aria-label='Call' icon={<MdVideoCall color='green' size='80px'/>} />
            </div>
            <div>
              <CopyToClipboard marginTop='40px' text={me} onCopy={() => setIsCopied(true)}>
                <Button w='98%' colorScheme='teal' >{isCopied ? 'Copied!' : 'Copy my Call ID'}</Button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </AspectRatio>
    </Box>
  )
}
export default Options
