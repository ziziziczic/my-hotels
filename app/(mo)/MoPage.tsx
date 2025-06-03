import { hotelItem } from '@/app/api/hotelList/route';

const MoPage = ({ hotelList }: { hotelList: hotelItem[] }) => {
  return <div>{hotelList.map((hotel) => hotel.hotelName)}</div>;
};

export default MoPage;
