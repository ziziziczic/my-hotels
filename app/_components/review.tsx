import { ReactNode, useContext } from 'react';
import { ReviewContext } from '../_provider/useReview';

export default function Review({ children }: { children: ReactNode }) {
  const { reviewIndex } = useContext(ReviewContext);

  return (
    <div>
      reviewIndex : {reviewIndex}
      <div>{children}</div>
    </div>
  );
}
