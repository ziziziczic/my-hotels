import { hotelItem } from '@/app/api/hotelList/route';

const MoPage = ({ hotelList }: { hotelList: hotelItem[] }) => {
  return (
    <div>
      mo
      <div>{hotelList.map((hotel) => hotel.hotelName)}</div>;
    </div>
  );
};

export default MoPage;
