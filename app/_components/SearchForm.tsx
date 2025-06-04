'use client';

import { useForm } from 'react-hook-form';

type SearchFormType = {
  searchInput: string;
};

const SearchForm = () => {
  const { register, handleSubmit } = useForm<SearchFormType>();

  const onSubmit = (data: SearchFormType) => {
    console.log(data);
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
