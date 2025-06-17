import { createContext, ReactNode, useCallback, useState } from 'react';

interface ReviewContextType {
  reviewIndex: number;
}

interface ReviewActionContextType {
  handleReviewIndex: (index: number) => void;
}

export const ReviewContext = createContext<ReviewContextType>({
  reviewIndex: 0,
});

export const ReviewActionContext = createContext<ReviewActionContextType>({
  handleReviewIndex: () => {},
});

export function ReviewContextProvider({ children }: { children: ReactNode }) {
  const [reviewIndex, setReviewIndex] = useState<number>(0);

  const handleReviewIndex = useCallback((index: number) => {
    setReviewIndex(index);
  }, []);

  return (
    <ReviewActionContext.Provider value={{ handleReviewIndex }}>
      <ReviewContext.Provider value={{ reviewIndex }}>
        {children}
      </ReviewContext.Provider>
    </ReviewActionContext.Provider>
  );
}
