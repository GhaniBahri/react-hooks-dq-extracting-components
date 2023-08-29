import Message from "./message";
import { messages } from "../data";
const Messages = () => {
    return ( 
        <section className="messages">
        <ul>
          {
            messages.map(message=> <Message key={message.id} name={message.name} content={message.content} type={message.type} />)
          }
        </ul>
      </section>
     );
}
 
export default Messages;