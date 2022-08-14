import styles from '../styles/Access.module.css'
import { Box, Button, Input } from '@chakra-ui/react'
import { useContext } from "react"
import { SocketContext } from "../Context"
import Notifications from "./Notifications"
import Options from "./Options"
import VideoPlayer from "./VideoPlayer"

function Access() {

  const { name, myVideo, userVideo, setName, isLogged, setIsLogged, call, callAccepted, callEnded } = useContext(SocketContext)

  return (
    <div className={styles.container}>
    <Notifications />
      {
        !isLogged ? (
          <div>
            <div className={styles.logo}>
              <span>We</span>
              <span>Talk</span>
            </div>
            <Box width='300px' borderRadius='lg' padding='20px'>
              <form className='login-form' onSubmit={() => setIsLogged(true)} >
                <Input required variant='filled' placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                <Button type="submit" colorScheme='teal' width='100%' marginTop='10px'> Start </Button>
              </form>
            </Box>
          </div>
        ) : (
          <div className='flex-row'>
            <VideoPlayer video={myVideo} />
            {
              callAccepted && !callEnded 
                ? <VideoPlayer video={userVideo} />
                : <Options />
            }
          </div>
        )
      }
    </div>

  )
}
export default Access