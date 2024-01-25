import Image from "next/image";

const Logobar = () => {
  return (
    <div className="flex items-center gap-3">
      <Image src={"/icons8-blog-64.png"} alt="logo" height={32} width={32} />
      <h2 className="text-2xl font-bold">Blog</h2>
    </div>
  );
};

export default Logobar;
