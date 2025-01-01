// src/components/ContentCard.js
import React from 'react';

const Content = ({ title, content }) => {
  const formattedContent = content.split('\n').map((sentence, index) => {
    const parts = sentence.split(':');
    return (
      <React.Fragment key={index}>
        {parts.map((part, i) => (
          <span key={i} className={i === 0 ? 'text-white' : 'text-gray-500'}>
            {part}
            {i === 0 ? '' : ''}
          </span>
        ))}
        {index < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    );
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4 flex flex-col items-center justify-center text-center">
        <p className="font-bold text-base mb-2">{title}</p>
        <p className="text-base">{formattedContent}</p>
      </div>
    </div>
  );
};

export default Content;

