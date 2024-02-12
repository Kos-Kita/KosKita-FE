import { Minus, Send, X } from "lucide-react";
import { useState } from "react";

interface PopupChat {
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
}

const PopupChat = ({ chatOpen, setChatOpen }: PopupChat) => {
  const [hide, setHide] = useState(false);

  return (
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
              setHide(!hide), setChatOpen(false);
            }}
          >
            <Minus className="text-white" />
          </button>
          <button
            className="hover:bg-teal-400 duration-300 p-2 rounded-lg"
            onClick={() => setChatOpen(false)}
          >
            <X className="text-white" />
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto kos">
        <div className="flex flex-col space-y-5 p-4">
          <div className="flex items-center self-end rounded-xl rounded-tr bg-[#eb675312] py-2 px-3 max-w-[80%] ">
            <p>Mengirim pesan</p>
          </div>
          <div className="flex items-center self-start rounded-xl rounded-tl bg-[#f1fcfa] py-2 px-3 max-w-[80%] ">
            <p>Menerima pesan</p>
          </div>
        </div>
      </div>
      <div className="flex items-center p-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-teal-500"
        />
        <button className="ml-2 rounded-lg bg-teal-500 px-4 py-2 text-white ">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default PopupChat;
