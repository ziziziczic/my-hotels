'use client';

import { hotelItem } from '@/app/api/hotelList/route';
import { useForm } from 'react-hook-form';
import { searchHotels } from '../lib/fetch/searchHotels';
import { Dispatch, SetStateAction } from 'react';

type SearchFormType = {
  searchInput: string;
};

const SearchForm = ({
  setHotels,
}: {
  setHotels: Dispatch<SetStateAction<hotelItem[]>>;
}) => {
  const { register, handleSubmit } = useForm<SearchFormType>();

  const onSubmit = async ({ searchInput }: SearchFormType) => {
    console.log(searchInput);
    const hotels = await searchHotels();
    setHotels(hotels);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            id="searchInput"
            type="text"
            placeholder="검색어를 입력하세요."
            {...register('searchInput')}
          ></input>
          <button type="submit">검색</button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
