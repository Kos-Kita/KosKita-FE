import React, { useState, createContext, Dispatch, SetStateAction } from "react";
import { boolean } from "zod";

type Conn = WebSocket | null;

export const WebsocketContext = createContext<{
  conn: Conn;
  setConn: (c: Conn) => void;
  chatOpen: boolean;
  setChatOpen: (b: boolean) => void;
  dataRoom: Partial<{ name: string; photo: string }>;
  setDataRoom: Dispatch<SetStateAction<Partial<{ name: string; photo: string }>>>;
}>({
  conn: null,
  setConn: () => {},
  chatOpen: false,
  setChatOpen: () => boolean,
  dataRoom: {},
  setDataRoom: () => {},
});

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [conn, setConn] = useState<Conn>(null);
  const [dataRoom, setDataRoom] = useState<Partial<{ name: string; photo: string }>>({});
  return (
    <WebsocketContext.Provider
      value={{
        dataRoom,
        setDataRoom,
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
