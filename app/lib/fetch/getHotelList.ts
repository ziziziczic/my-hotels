import { HotelListApiResponse } from '@/app/api/hotelList/route';

export const getHotelList = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/api/hotelList`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch hotel list');
    }

    const data: HotelListApiResponse = await response.json();
    return data;
  } catch {
    // 에러시 빈 배열 리턴
    return { hotelList: [] };
  }
};
