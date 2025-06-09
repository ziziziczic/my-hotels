export const searchHotels = async () => {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/searchHotels
      `,
      {
        cache: 'no-store',
      },
    );

    if (response && response.ok) {
      return await response.json();
    }
    throw new Error('Failed to fetch hotel list');
  } catch {
    // 에러시 빈 배열 리턴
    return [];
  }
};
