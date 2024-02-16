import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ReactNode } from "react";
import { IRoomType } from "./Navbar";
import defaultImg from "@/assets/download.png";

interface HistoryChatProps {
  openHistoryCht: boolean;
  setOpenHistoryCht: (b: boolean) => void;
  children: ReactNode;
  rooms?: IRoomType[];
  onOpenChat: (room_id: string, recieveId: number) => void;
}
const HistoryChat = ({
  openHistoryCht,
  setOpenHistoryCht,
  rooms,
  children,
  onOpenChat,
}: HistoryChatProps) => {
  console.log(rooms);
  return (
    <Popover open={openHistoryCht} modal={openHistoryCht} onOpenChange={setOpenHistoryCht}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-96 mt-6 space-y-3 ">
        <h3 className="text-sm font-semibold">Messages</h3>
        <div className="flex flex-col gap-y-3 max-h-96 overflow-y-scroll kos px-2">
          {rooms?.map((room, index) => (
            <div
              className="bg-slate-100 p-3 rounded-lg hover:bg-slate-200 duration-300 text-sm cursor-pointer flex items-center gap-x-4"
              key={index}
              onClick={() => onOpenChat(room.room_id, room.sender_id)}
            >
              <img
                src={room.photo_profile !== "" ? room.photo_profile : defaultImg}
                className="size-12 rounded-full"
                alt="img-user"
              />
              <span>{room.room_id}</span>
              <span className="font-medium ">{room?.name}</span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default HistoryChat;
