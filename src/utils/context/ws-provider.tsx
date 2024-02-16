import React, { useState, createContext } from "react";
import { boolean } from "zod";

type Conn = WebSocket | null;

export const WebsocketContext = createContext<{
  conn: Conn;
  setConn: (c: Conn) => void;
  chatOpen: boolean;
  setChatOpen: (b: boolean) => void;
}>({
  conn: null,
  setConn: () => {},
  chatOpen: false,
  setChatOpen: () => boolean,
});

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [conn, setConn] = useState<Conn>(null);

  return (
    <WebsocketContext.Provider
      value={{
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
