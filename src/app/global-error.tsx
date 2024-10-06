'use client';
import React from 'react';

const GlobalError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  console.error('Unexpected Error: ', error);

  return (
    <html>
      <body>
        <h2>에러가 발생했습니다.</h2>
        <button onClick={() => reset()}>다시 시도하기</button>
      </body>
    </html>
  );
};

export default GlobalError;
