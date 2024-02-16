// import { useAuth } from "@/utils/context/auth";
import { useAuth } from "@/utils/context/auth";
import { WebsocketContext } from "@/utils/context/ws-provider";
import axios from "axios";
import { MessageSquareIcon, Minus, Send, X } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";

export type Message = {
  message: string;
  receiver_id: string;
  room_id: string;
  sender_id: string;
  type: "recv" | "self";
};
const PopupChat = () => {
  const [hide, setHide] = useState(false);
  const { conn, chatOpen, setChatOpen } = useContext(WebsocketContext);
  const textarea = useRef<any>(null);
  const msgContainer = useRef<any>(null);

  const [messages, setMessage] = useState<Array<Message>>([]);
  const { user } = useAuth();
  useEffect(() => {
    if (conn === null) {
      setChatOpen(false);
      return;
    }

    conn.onmessage = (message) => {
      const m: Message = JSON.parse(message.data);
      if (m.message !== "") {
        user.id == Number(m.sender_id) ? (m.type = "self") : (m.type = "recv");
        setMessage([...messages, m]);
      }

      // if (m.message == "user left the chat") {
      //   const deleteUser = users.filter((user) => user.username != m.username);
      //   setUsers([...deleteUser]);
      //   setMessage([...messages, m]);
      //   return;
      // }
    };

    conn.onclose = () => {};
    conn.onerror = (error) => {
      console.log(error);
    };
    conn.onopen = () => {
      const roomId = conn.url.split("/")[4];
      const parts = roomId.split("?");

      const getMessages = async () => {
        try {
          const response = await axios.get(`https://l3n.my.id/room/${parts[0]}`);
          const result = response.data;
          console.log(result);
          setMessage(result.data);
        } catch (error) {
          console.log(error);
        }
      };
      getMessages();
    };
  }, [textarea, messages, conn, setMessage]);

  const sendMessage = () => {
    if (!textarea.current?.value) return;
    if (conn === null) {
      setChatOpen(false);
      return;
    }

    conn.send(textarea.current.value);
    textarea.current.value = "";
  };

  return (
    <>
      <div
        className={`flex transition-all ease-out duration-200  flex-col overflow-hidden rounded-lg bg-gray-100 fixed right-3 bottom-3  z-[999] ${
          chatOpen ? "w-1/3 h-3/4" : "h-0 w-0"
        }`}
      >
        <div className="bg-teal-500 p-4  flex items-center justify-between">
          <h1 className="text-center text-2xl font-bold text-white">Chat</h1>
          <div className="flex items-center gap-x-5">
            <button
              className="hover:bg-teal-400 duration-300 p-2 rounded-lg"
              onClick={() => {
                setHide(true), setChatOpen(false);
              }}
            >
              <Minus className="text-white" />
            </button>
            <button
              className="hover:bg-teal-400 duration-300 p-2 rounded-lg"
              onClick={() => {
                setChatOpen(false);
                setHide(false);
              }}
            >
              <X className="text-white" />
            </button>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto kos" ref={msgContainer}>
          <div className="flex flex-col space-y-3 p-4">
            {messages.map((msg) => (
              <>
                {msg.type === "self" ? (
                  <div className="max-w-[80%] flex flex-col  items-start self-end">
                    <div className="self-end rounded-xl rounded-tr border bg-[#eb675312] py-2 px-3 w-full">
                      {msg.message}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="max-w-[80%] flex flex-col  items-start self-start">
                      <div className="self-start rounded-xl rounded-tl border bg-[#f1fcfa]  py-2 px-3 w-full">
                        {msg.message}
                      </div>
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="flex items-center p-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-teal-500"
            ref={textarea}
            onKeyDown={(e) => {
              e.key === "Enter" && sendMessage();
            }}
          />
          <button
            className="ml-2 rounded-lg bg-teal-500 px-4 py-2 text-white "
            onClick={sendMessage}
          >
            <Send />
          </button>
        </div>
      </div>
      {hide ? (
        <div
          className="fixed bottom-3 right-3 size-16 flex items-center justify-center border bg-teal-500 z-50 rounded-full cursor-pointer"
          onClick={() => {
            setHide(false);
            setChatOpen(true);
          }}
        >
          <MessageSquareIcon className="text-white " />
        </div>
      ) : null}
    </>
  );
};

export default PopupChat;
