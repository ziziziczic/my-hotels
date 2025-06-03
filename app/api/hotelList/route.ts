// app/api
import { NextRequest, NextResponse } from 'next/server';

export interface hotelItem {
  hotelName: string;
  price: number;
}

export interface HotelListApiResponse {
  hotelList: hotelItem[];
}
// get 요청을 처리하는 함수
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GET = (requset: NextRequest) => {
  // 하드 코딩된 호텔 리스트 반환
  const hotelList = [
    {
      hotelName: '종로 그랜드 하얏트',
      price: 180000,
    },
    {
      hotelName: '마포 신라 호텔',
      price: 190000,
    },
    {
      hotelName: '강남 롯데 호텔',
      price: 200000,
    },
    {
      hotelName: '종로 롯데 호텔',
      price: 150000,
    },
    {
      hotelName: '잠실 롯데 호텔',
      price: 140000,
    },
  ];

  return NextResponse.json({ hotelList });
};

export { GET };
