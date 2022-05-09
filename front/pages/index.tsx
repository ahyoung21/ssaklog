import React, { useState } from 'react';

export default function Index() {
  const [text, setText] = useState<string>('자바스크립트');

  setTimeout(() => {
    setText('타입스크립트');
  }, 1000);

  return (
    <>
      <div>
        <span>{text} 적용 완료</span>
        <p>로그인 여부를 체크합니다. 로그인 상태라면 메인 화면으로 이동됩니다.</p>
      </div>
    </>
  );
}
