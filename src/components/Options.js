import { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SocketContext } from '../Context'

const Options = ({ children }) => {
  const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } = useContext(SocketContext)
  const [idToCall, setIdToCall] = useState ('')
  const [isCopied, setIsCopied] = useState(false)

  return (
    <div>
    <h1>Options</h1>
    <div>
      <h2>Account Info</h2>
      <input type="text" placeholder='Your Name' value={name} onChange={(e)=> {setName(e.target.value)}} />
      <CopyToClipboard text={me} onCopy={() => setIsCopied(true)}>
        { !isCopied ? <button>Copy your ID</button> : <button>Copied!</button> }
      </CopyToClipboard>
    </div>
    <div>
      <h2>Make a call</h2>
      <input type="text" placeholder='ID to Call' value={idToCall} onChange={(e) => {setIdToCall(e.target.value)}} />
      { callAccepted && !callEnded ? (
          <button onClick={leaveCall}>Hang Up</button>
        ) : (
          <button onClick={()=> callUser(idToCall)}>Call</button>
      )}
      
    </div>
    <span>{ children }</span>
    </div>
  )
}
export default Options
