const Contact = ({name}) => {
    return ( 
        <li className="contact">
            <div className="icon">{name.split("")[0].toUpperCase()}</div>
            {name}
          </li>
     );
}
 
export default Contact;