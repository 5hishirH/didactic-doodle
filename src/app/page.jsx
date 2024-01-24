import Feed from "@/components/Feed";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mb-28">
      <div className="w-10/12 mx-auto flex gap-3 items-center py-6">
        <Image src={"/blog.png"} alt="logo" height={432} width={32} />
        <h2 className="text-2xl font-semibold text-primary">Blog</h2>
      </div>
      <Feed />
    </div>
  );
};

export default Home;
