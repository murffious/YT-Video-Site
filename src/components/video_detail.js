import React from "react";
import CommentBox from './comment_box';
import CommentList from './comment_list';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-7">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div className="title">{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
      <CommentBox />
        <CommentList />
    </div>
  );
};

export default VideoDetail;