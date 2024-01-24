"use client";

import Form from "@/components/Form";
import createPrompt from "@/lib/createPrompt";
import useAuthContext from "@/utils/AuthProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";

const createPost = () => {
  const [post, setPost] = useState({ title: "", post: "" });
  const { user } = useAuthContext();
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const createPost = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // console.log(post);
    await createPrompt({
      email: user.email,
      title: post.title,
      post: post.post,
    })
      .then(() => {
        setSubmitting(false);
        router.push("/");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPost}
      />
    </div>
  );
};

export default createPost;
