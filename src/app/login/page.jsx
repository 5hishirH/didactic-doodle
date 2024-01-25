"use client";

import useAuthContext from "@/utils/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const { handleGoogleUser } = useAuthContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("from");

  return (
    <div className="w-3/4 h-screen mx-auto flex flex-col items-center justify-center">
      <div className="flex items-center gap-4">
        <Image src="/icons8-blog-64.png" alt="logo" height={40} width={40} className="pb-1" />
        <h1 className="text-4xl font-bold">BLOG</h1>
      </div>
      <p className="text-center font-light mt-4">This is a blogging website that explores the nextjs capabities</p>
      <button
        className="btn btn-primary text-white mt-4"
        onClick={() => {
          handleGoogleUser()
            .then(() => {
              if (query) {
                router.push(`/${query}`);
              } else {
                router.push("/");
              }
            })
            .catch((err) => console.log(err));
        }}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
