import React, { useState, useEffect } from "react";
import PostPresenter from "./PostPresenter";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  location,
  caption,
}) => {
  const [isLikedS, setIsLikedS] = useState(isLiked);
  const [likeCountS, setLikeCountS] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const comment = useInput("");

  useEffect(() => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  }, [currentItem, files]);

  return (
    <PostPresenter
      user={user}
      location={location}
      files={files}
      createdAt={createdAt}
      likeCount={likeCountS}
      isLiked={isLikedS}
      newComment={comment}
      setIsLikedS={setIsLikedS}
      setLikeCountS={setLikeCountS}
      currentItem={currentItem}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  location: PropTypes.string,
  caption: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.shape,
    })
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default PostContainer;
