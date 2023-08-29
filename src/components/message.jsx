const Message = (props) => {
    return ( 
        <li className={`message ${props.type}`}>
            <div className="icon">{props.name.split("")[0].toUpperCase()}</div>
            <span className="content">{props.content}</span>
          </li>
     );
}
 
export default Message;