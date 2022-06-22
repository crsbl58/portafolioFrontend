import "../../../styles/demos/chat/index.css";
import "../../../styles/demos/chat/responsiveIndex.css";
import socket from "../../../network/socketio/index";
import { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [stateTxtUsers, setStateTxtUsers] = useState([]);
  const [stateUsers, setStateUsers] = useState([]);
  const [inputStates, setInputStates] = useState({
    id: "",
    text: "",
  });

  const containerRef = useRef<any>(null);

  const changeValueInputId = (e: any) => {
    setInputStates({
      ...inputStates,
      id: e.currentTarget.value,
    });
  };
  const changeValueInputText = (e: any) => {
    setInputStates({
      ...inputStates,
      text: e.currentTarget.value,
    });
  };

  useEffect(() => {
    socket.on("txtUsers", (txtUsers) => {
      setStateTxtUsers(txtUsers);
    });
    console.log(stateTxtUsers);
  }, [stateTxtUsers]);

  useEffect(() => {
    socket.on("listUsers", (txtUsers) => {
      setStateUsers(txtUsers);
      console.log(txtUsers);
      /*         socket.removeListener();*/
    });
  }, [stateUsers]);

  useEffect(() => {
    socket.disconnect();
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

useEffect(()=>{
  let totalHeightScroll =  containerRef.current.scrollHeight - containerRef.current.offsetHeight
    containerRef.current.scrollTop=totalHeightScroll;
},[stateTxtUsers]);



  return (
    <div className="divContainerChat00 flexColumn">
      <form
        className="formContainerSend flexRow"
        onSubmit={(e) => {
          e.preventDefault();
          socket.connect();
          socket.emit("sendText", {
            id: inputStates.id,
            text: inputStates.text,
          });
          setInputStates({ ...inputStates, text: "" });
        }}
      >
        <div className="divContainerIdChat01 flexRow">
          <h4>Usuario</h4>
          <input
            value={inputStates.id}
            required
            onChange={changeValueInputId}
          />
        </div>
        <input
          required
          enterKeyHint="send"
          value={inputStates.text}
          onChange={changeValueInputText}
        />
        <button>Enviar</button>
      </form>

      <div className="divContainerRoom flexRow">
        <div className="divContainerTextUsers00 flexColumn" ref={containerRef}>
          {stateTxtUsers.map((listTextUsers: any) => (
            <div className="divContainerTextUsers01 flexColumn">
              <h4>{listTextUsers.id}</h4>
              <h4>{listTextUsers.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
