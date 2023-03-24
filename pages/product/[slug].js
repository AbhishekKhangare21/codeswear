import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <div>The slug is: {slug} </div>;
};

export default Post;
