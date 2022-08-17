
import { useContext, useState } from "react"
import { SocketContext } from "../Context"
import { FcVideoCall, FcCancel } from 'react-icons/fc'
import BeatLoader from "react-spinners/BeatLoader"
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'

const Notifications = () => {
  const { answerCall, call, setCall, callAccepted } = useContext(SocketContext)
  const [openModal, setOpenModal] = useState(true)
  const callSound = new Audio ('./call.mp3');

  const aceptCall = () => {
    answerCall()
    setOpenModal(false)
  }

  const cancelCall = () => {
    setCall(false)
  }

  call.isReceivedCall && !callAccepted && callSound.play()

  return (
    <>
      {call.isReceivedCall && (
        <div>
          <Modal isOpen={openModal} isCentered={true}>
            <ModalOverlay />
            <ModalContent borderRadius='20px' bg='#eaeaea' w='100%' p={10}>
              <ModalBody>
                <h1 className="text-center"><strong>{call.name} is calling <span><BeatLoader size={7} /></span></strong></h1>
              </ModalBody>
              <ModalFooter>
                <Button marginRight={10} colorScheme='teal' variant='link' onClick={() => aceptCall()}><FcVideoCall size='50px' /></Button>
                <Button colorScheme='teal' variant='link' onClick={() => cancelCall()}><FcCancel size='40px' /></Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      )
      }
    </>
  )
}

export default Notifications
