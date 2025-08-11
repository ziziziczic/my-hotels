'use client';

import { hotelItem } from '@/app/api/hotelList/route';
import SearchForm from '../_components/SearchForm';
import { useState } from 'react';
import { ReviewContextProvider } from '../_provider/useReview';
import Review from '../_components/review';
import Sub from '../_components/sub';
// import Tabs from './_components/Tabs';

const PcPage = ({ hotelList }: { hotelList: hotelItem[] }) => {
  const [hotels, setHotels] = useState(hotelList);

  return (
    <div>
      pc
      <SearchForm setHotels={setHotels} />
      {hotels.map((hotel) => hotel.hotelName)}
      <ReviewContextProvider>
        <Review>
          <Sub />
        </Review>
      </ReviewContextProvider>
      {/* <Tabs /> */}
    </div>
  );
};

export default PcPage;
