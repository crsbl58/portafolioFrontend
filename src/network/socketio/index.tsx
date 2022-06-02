import io from "socket.io-client";
let socket = io("https://sheltered-retreat-11064.herokuapp.com/");

export default socket;