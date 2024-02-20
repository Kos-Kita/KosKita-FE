import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ReactNode, useContext } from "react";
import defaultImg from "@/assets/download.png";
import { IGetRoom } from "@/utils/apis/chat/types";
import { WebsocketContext } from "@/utils/context/ws-provider";

interface HistoryChatProps {
  openHistoryCht: boolean;
  setOpenHistoryCht: (b: boolean) => void;
  children: ReactNode;
  rooms?: IGetRoom[];
  onOpenChat: (room_id: string, senderId: number, recieveId: number) => void;
}
const HistoryChat = ({
  openHistoryCht,
  setOpenHistoryCht,
  rooms,
  children,
  onOpenChat,
}: HistoryChatProps) => {
  const { setDataRoom } = useContext(WebsocketContext);
  return (
    <Popover open={openHistoryCht} modal={openHistoryCht} onOpenChange={setOpenHistoryCht}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-96 mt-6 space-y-3 min-h-[100px] ">
        <h3 className="text-sm font-semibold">Messages</h3>
        <div className="flex flex-col gap-y-3 max-h-[500px] overflow-y-scroll kos px-2">
          {rooms !== null ? (
            rooms?.map((room, index) => (
              <div
                className="bg-slate-100 p-3 rounded-lg hover:bg-slate-200 duration-300 text-sm cursor-pointer flex items-center gap-x-4"
                key={index}
                onClick={() => {
                  onOpenChat(room.room_id, room.sender_id, room.receiver_id),
                    setOpenHistoryCht(false);
                  setDataRoom({ name: room.name, photo: room.photo_profile });
                }}
              >
                <img
                  src={room.photo_profile !== "" ? room.photo_profile : defaultImg}
                  className="size-12 rounded-full"
                  alt="img-user"
                />
                <span className="font-medium ">{room?.name}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-sm ">No Message</p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default HistoryChat;
