import { hotelItem } from '@/app/api/hotelList/route';
import SearchForm from '../_components/SearchForm';

const PcPage = ({ hotelList }: { hotelList: hotelItem[] }) => {
  return (
    <div>
      {hotelList.map((hotel) => hotel.hotelName)}
      <SearchForm />
    </div>
  );
};

export default PcPage;
