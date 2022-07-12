import React from 'react';
import { CommentContent } from './CommentContent';
import { CommentStar } from './CommentStar';

export const Comment = () => {
  return (
    <div id='reviews'>
      <CommentStar />
      <CommentContent />
    </div>
  );
};
