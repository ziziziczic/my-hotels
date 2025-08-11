import { useContext } from 'react';
import { ReviewActionContext, ReviewContext } from '../_store/useReviewStore';

export default function Sub() {
  const { handleReviewIndex } = useContext(ReviewActionContext);
  const { reviewIndex } = useContext(ReviewContext);
  return (
    <div>
      Sub
      <button
        onClick={() => {
          handleReviewIndex(reviewIndex + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}
