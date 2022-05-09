import React, { useState } from 'react';

export default function List() {
  const [text, setText] = useState(0);

  setTimeout(() => {
    setText(text + 1);
  }, 1000);

  return (
    <>
      <div>
        <span>{text} 적용 완료</span>
      </div>
    </>
  );
}
