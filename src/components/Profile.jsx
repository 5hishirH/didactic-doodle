"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";

const PostCard = ({ allPosts }) => {
  return (
    <div>
      {allPosts.map((e, i) => (
        <div key={i} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-4 py-3 px-2 rounded-md">
          {e.title}
        </div>
      ))}
    </div>
  );
};

const Profile = ({ email }) => {
  const [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/post/${email}`);
      const data = await response.json(); // returns a object
      setLoading(false);
      setUserData(data);
    };

    fetchPosts();
  }, []);
  return (
    <div>
      {isLoading ? (
        "profile loading..."
      ) : (
        <div>
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <Image
                  src={userData.profilePic}
                  alt="pp"
                  height={64}
                  width={64}
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{userData.username}</h2>
              <Link
                href={"/edit-profile"}
                className="text-sm font-light flex items-center gap-2"
              >
                {userData.email}
                <FaEdit />
              </Link>
            </div>
          </div>
          <div>
            {userData.posts.length > 0 ? (
              <div>
                <h2 className="mt-6 ml-2 text-xl font-semibold text-primary">Your Posts</h2>
                <PostCard allPosts={userData.posts} />
              </div>
            ) : (
              "No posts"
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
