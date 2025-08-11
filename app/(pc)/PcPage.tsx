'use client';

import { hotelItem } from '@/app/api/hotelList/route';
import SearchForm from '../_components/SearchForm';
import { useState } from 'react';
import { ReviewContextProvider } from '../_store/useReviewStore';
import Review from '../_components/review';
import Sub from '../_components/sub';
import { useCounterStore } from '../_store/useCounterStore';
// import Tabs from './_components/Tabs';

const PcPage = ({ hotelList }: { hotelList: hotelItem[] }) => {
  const [hotels, setHotels] = useState(hotelList);
  const { count, increment, decrement } = useCounterStore();

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
      <div className="flex gap-2">
        <span>count : {count}</span>
        <button onClick={increment}>더하기</button>
        <button onClick={decrement}>빼기</button>
      </div>
    </div>
  );
};

export default PcPage;
