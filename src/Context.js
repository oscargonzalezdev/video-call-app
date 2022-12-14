import { createContext, useEffect, useRef, useState } from "react"
import { io } from 'socket.io-client'
import Peer from 'simple-peer'

const SocketContext = createContext()
// set local server url
// const socket = io('http://localhost:5001');

// set remote server url
const socket = io('https://video-call-app-v1.herokuapp.com')

const ContextProvider = ({ children }) => {
    const [stream, setStream] = useState({})
    const [me, setMe] = useState('')
    const [call, setCall] = useState({})
    const [callAccepted, setCallAccepted] = useState(false)
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    const myVideo = useRef({})
    const userVideo = useRef({})
    const connectionRef = useRef()

    useEffect(() => {         
        socket.on('me', (id) => setMe(id));

        socket.on('callUser', ({ from, name: callerName, signal }) => {
            setCall({ isReceivedCall: true, from, name: callerName, signal })
        })

    }, [])

    const answerCall = () => {
        setCallAccepted(true)
        
        const peer = new Peer({ initiator: false, trickle: false, stream })

        peer.on('signal', (data) => {
            socket.emit('answerCall', { signal: data, to: call.from })
        })

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream
        })

        peer.signal(call.signal)
        connectionRef.current = peer
    }

    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream })

        peer.on('signal', (data) => {
            socket.emit('callUser', { userToCall: id, signalData: data, from: me, name })
        })

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream
        })

        socket.on('callAccepted', (signal) => {
            setCallAccepted(true)

            peer.signal(signal)
        })
        connectionRef.current = peer
    }

    const leaveCall = () => {
        setCallEnded(true)
        connectionRef.current.destroy()
        //reloads the current to get a new id
        window.location.reload()
    }

    return (
        <SocketContext.Provider value={{ setCall, setMe, setStream, call, callAccepted, myVideo, userVideo, stream, name, setName, callEnded, me, callUser, leaveCall, answerCall, isLogged, setIsLogged }}>
            {children}
        </SocketContext.Provider>
    )
}

export { ContextProvider, SocketContext }
