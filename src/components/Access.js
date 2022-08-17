import styles from '../styles/Access.module.css'
import { Box, Button, Input } from '@chakra-ui/react'
import { useContext } from "react"
import { SocketContext } from "../Context"
import Notifications from "./Notifications"
import Options from "./Options"
import VideoPlayer from "./VideoPlayer"

function Access() {

  const { name, setName, isLogged, setIsLogged, callAccepted, callEnded } = useContext(SocketContext)

  return (
    <div>
      <Notifications />
      {
        !isLogged ? (
          <div className='access'>
            <div className={styles.logo}>
              <span>We</span>
              <span>Talk</span>
            </div>
            <Box width='300px' borderRadius='lg' padding='20px'>
              <form className='login-form' onSubmit={() => setIsLogged(true)} >
                <Input fontWeight='bold' bg='#eaeaea' required  placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                <Button type="submit" fontWeight='bold' colorScheme='teal' width='100%' marginTop='20px'> Start </Button>
              </form>
            </Box>
          </div>
        ) : (
          <div className='flex-row gap-40 flex-wrap'>
            <VideoPlayer user='sender' />
            {
              callAccepted && !callEnded
                ? (
                  <VideoPlayer user='receiver' />
                ) : (
                  <Options />
                )
            }
          </div>
        )
      }
    </div>
  )
}
export default Access