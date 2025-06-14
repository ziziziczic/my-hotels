import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { headers } from 'next/headers';
import MoPage from '@/app/(mo)/MoPage';
import PcPage from '@/app/(pc)/PcPage';
import { getHotelList } from './lib/fetch/getHotelList';
import { isMobileDevice } from './lib/isMobileDevice';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = async ({}: Readonly<{
  children: React.ReactNode;
}>) => {
  const hotelList = await getHotelList();

  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || ''; // 'user-agent' 헤더 값을 가져옴

  console.log(hotelList);

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isMobileDevice(userAgent) ? (
          <MoPage hotelList={hotelList} />
        ) : (
          <PcPage hotelList={hotelList} />
        )}
      </body>
    </html>
  );
};

export default RootLayout;
