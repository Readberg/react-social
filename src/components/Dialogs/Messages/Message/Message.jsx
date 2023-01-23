import c from './Message.module.css'

function Message(props) {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

export default Message;