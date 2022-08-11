import { useContext } from "react"
import { SocketContext } from "../Context"

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext)

  return (
    <>
    { call.isReceivedCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </>
  )
}

export default Notifications
