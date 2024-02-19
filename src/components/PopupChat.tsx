// import { useAuth } from "@/utils/context/auth";
import { IGetMessage } from "@/utils/apis/chat/types";
import { useAuth } from "@/utils/context/auth";
import { WebsocketContext } from "@/utils/context/ws-provider";
import { Response } from "@/utils/types/type";
import axios, { AxiosResponse } from "axios";
import { MessageSquareIcon, Minus, Send, X } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import defaultImg from "@/assets/download.png";

const PopupChat = () => {
  const [hide, setHide] = useState(false);
  const { conn, chatOpen, setChatOpen, dataRoom } = useContext(WebsocketContext);
  const textarea = useRef<any>(null);
  const msgContainer = useRef<any>(null);

  const [messages, setMessage] = useState<Array<IGetMessage>>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (conn === null) {
      setChatOpen(false);
      return;
    }
    const roomId = conn?.url.split("/")[4];
    const parts = roomId?.split("?")[0];

    const getMessages = async () => {
      try {
        const response: AxiosResponse<Response<IGetMessage[]>> = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/room/${parts}`
        );

        const result = response.data.data;
        const reverseData = result.reverse();
        const filterData = reverseData.filter((value) => value.message !== "");
        setMessage(filterData);
      } catch (error) {
        console.log(error);
      }
    };
    msgContainer.current.scrollTop = msgContainer.current.scrollHeight;

    getMessages();
  }, [chatOpen]);

  useEffect(() => {
    if (conn === null) {
      setChatOpen(false);
      return;
    }

    conn.onmessage = (message) => {
      const m: IGetMessage = JSON.parse(message.data);
      console.log("on message", m);
      if (m.message === "" && m.receiver_id === 0 && m.sender_id === 0) {
        return null;
      }
      setMessage([...messages, m]);
    };

    conn.onclose = (event) => {
      console.log("Connection closed:", event);
    };
    conn.onerror = (error) => {
      console.log("Connection Error : ", error);
    };
    conn.onopen = (e) => {
      console.log("Connection open", e);
    };
    msgContainer.current.scrollTop = msgContainer.current.scrollHeight;
  }, [textarea, messages, conn, setMessage]);

  const sendMessage = () => {
    if (!textarea.current?.value) return;
    if (conn === null || conn.readyState == 3) {
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
          <div className="flex items-center gap-x-3">
            <img
              src={dataRoom.photo !== "" ? dataRoom.photo : defaultImg}
              alt="photo-profile"
              className="size-10 rounded-full"
            />
            <h1 className="text-center text-base font-medium text-white">{dataRoom.name}</h1>
          </div>
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
            {messages.map((msg, index) => (
              <>
                {msg.sender_id === user.id ? (
                  <div className="max-w-[80%] flex flex-col  items-start self-end" key={index}>
                    <div className="self-end rounded-xl rounded-tr border bg-[#eb675312] py-2 px-3 w-full">
                      {msg.message}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="max-w-[80%] flex flex-col  items-start self-start" key={index}>
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
