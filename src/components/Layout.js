import { IconButton, Link, useDisclosure } from '@chakra-ui/react'
import { useContext, useRef } from 'react'
import { BsFillQuestionCircleFill, BsPersonCircle } from 'react-icons/bs'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { AiFillGithub } from 'react-icons/ai'
import { SiBuymeacoffee } from 'react-icons/si'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import { SocketContext } from '../Context'

function Layout({ children }) {
  const { isLogged } = useContext(SocketContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()


  return (
    <div className='container'>
      {isLogged && (
        <div className='logo'>
          <span>We</span>
          <span>Talk</span>
        </div>
      )}
      <main>{children}</main>
      <section className='modal'>
        <IconButton className='button-open' zIndex={1} borderRadius='50%' width='fit-content' bg='#f1f1f1' ref={btnRef} onClick={onOpen} icon={<BsFillQuestionCircleFill size='30px' />} />
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          size='xs'
        >
          <DrawerOverlay />
          <DrawerContent bg='#f1f1f1'>
            <IconButton className='button-close' zIndex='1' borderRadius='50%' width='fit-content' bg='#f1f1f1' ref={btnRef} onClick={onClose} icon={<IoIosArrowDropleftCircle size='35px' />} />
            <div className='bg-button-close'/>
            <DrawerBody marginTop='-30px' padding='20px'>
              <div className='info'>
                <h2>What is WeTalk?</h2>
                <br />
                <p><strong>WeTalk</strong> is a video call web application based on <strong>WebRTC</strong> and <strong>Socket.io</strong>, these technologies allow us to send and receive data in real-time through our web browser.</p>
                <br />
                <h2>How can I make a Video Call?</h2>
                <br />
                <p>That is very easy. First, you need the <strong>Call ID</strong> of your friend. Then paste it in the corresponding input and click the video call icon and Voila!</p>
                <br />
                <h2>How can I collaborate?</h2>
                <br />
                <p>This is an <strong>open-source</strong> project and you can find more information, and collaborate o support the project on the following platforms:</p>
                <br />
                <div className='button-links'>
                <Link href='https://github.com/oscargonzalezdev/video-call-app' isExternal><AiFillGithub size='20px'/>&nbsp;GitHub</Link>
                <Link href='https://www.oscargonzalez.dev' isExternal><BsPersonCircle size='20px'/>&nbsp;Author</Link>
                <Link className='button-link' href='https://www.buymeacoffee.com/oscardev' isExternal><SiBuymeacoffee size='20px'/>Support</Link>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </section>
      <div className='bg-button' />
      <footer className='footer'>
        <p>Made with 🤍 by <a href="http://oscargonzalez.dev" target="_blank" rel="noopener noreferrer">Oscar Gonzalez</a></p>
      </footer>
    </div>
  )
}

export default Layout