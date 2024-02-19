export interface IGetRoom {
  room_id: string;
  sender_id: number;
  receiver_id: number;
  name: string;
  photo_profile: string;
}
export interface IGetMessage {
  room_id: string;
  message: string;
  sender_id: number;
  receiver_id: number;
}

export interface IRoomType {
  room_id: string;
  sender_id: number;
  name: string;
  photo_profile: string;
}
