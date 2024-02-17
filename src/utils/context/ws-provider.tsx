import React, { useState, createContext, Dispatch, SetStateAction } from "react";
import { boolean } from "zod";

type Conn = WebSocket | null;

export const WebsocketContext = createContext<{
  conn: Conn;
  setConn: (c: Conn) => void;
  chatOpen: boolean;
  setChatOpen: (b: boolean) => void;
  lastMsg: { roomId: string; message: string }[];
  setLastMsg: Dispatch<SetStateAction<{ roomId: string; message: string }[]>>;
}>({
  conn: null,
  setConn: () => {},
  chatOpen: false,
  setChatOpen: () => boolean,
  lastMsg: [{ roomId: "", message: "" }],
  setLastMsg: () => {},
});

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [conn, setConn] = useState<Conn>(null);
  const [lastMsg, setLastMsg] = useState<{ roomId: string; message: string }[]>([]);

  return (
    <WebsocketContext.Provider
      value={{
        lastMsg,
        setLastMsg,
        chatOpen,
        setChatOpen,
        conn: conn,
        setConn: setConn,
      }}
    >
      {children}
    </WebsocketContext.Provider>
  );
};

export default WebSocketProvider;
