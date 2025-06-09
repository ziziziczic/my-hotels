'use client';

import { hotelItem } from '@/app/api/hotelList/route';
import SearchForm from '../_components/SearchForm';
import { useState } from 'react';

const PcPage = ({ hotelList }: { hotelList: hotelItem[] }) => {
  const [hotels, setHotels] = useState(hotelList);
  return (
    <div>
      <SearchForm setHotels={setHotels} />
      {hotels.map((hotel) => hotel.hotelName)}
    </div>
  );
};

export default PcPage;
