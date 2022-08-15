
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
  const { answerCall, call, setCall } = useContext(SocketContext)
  const [openModal, setOpenModal] = useState(true)

  const aceptCall = () => {
    answerCall()
    setOpenModal(false)
  }

  return (
    <>
      {call.isReceivedCall && (
        <div>
          <Modal isOpen={openModal} isCentered={true}>
            <ModalOverlay />
            <ModalContent w='100%' p={10}>
              <ModalBody>
                <h1 className="text-center"><strong>{call.name} is calling <span><BeatLoader size={7} /></span></strong></h1>
              </ModalBody>
              <ModalFooter>
                <Button marginRight={10} colorScheme='teal' variant='link' onClick={() => aceptCall()}><FcVideoCall size='50px' /></Button>
                <Button colorScheme='teal' variant='link' onClick={() => setCall(false)}><FcCancel size='40px' /></Button>
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
