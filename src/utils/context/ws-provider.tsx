import React, { useState, createContext } from "react";
import { boolean } from "zod";

type Conn = WebSocket | null;

interface IDataOwner {
  user_name: string;
  photo_profile: string;
}

export const WebsocketContext = createContext<{
  conn: Conn;
  setConn: (c: Conn) => void;
  chatOpen: boolean;
  setChatOpen: (b: boolean) => void;
  dataOwner: IDataOwner;
  setDataOwner: (d: IDataOwner) => void;
}>({
  conn: null,
  setConn: () => {},
  chatOpen: false,
  setChatOpen: () => boolean,
  dataOwner: { photo_profile: "", user_name: "" },
  setDataOwner: () => {},
});

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [dataOwner, setDataOwner] = useState<IDataOwner>();
  const [conn, setConn] = useState<Conn>(null);

  return (
    <WebsocketContext.Provider
      value={{
        chatOpen,
        setChatOpen,
        setDataOwner,
        dataOwner,
        conn: conn,
        setConn: setConn,
      }}
    >
      {children}
    </WebsocketContext.Provider>
  );
};

export default WebSocketProvider;
