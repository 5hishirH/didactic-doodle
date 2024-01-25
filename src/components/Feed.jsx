import Image from "next/image";
import prompts from "@/lib/prompts";

const Feed = async () => {
  const promptData = await prompts();

  return (
    <div className="flex flex-col gap-4">
      {promptData.map((e, i) => (
        <div
          key={i}
          className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 mb-4"
        >
          <h2 className="text-lg font-medium">{e.title}</h2>
          <p className="mt-3">{e.prompt}</p>
          <div className="flex items-center gap-3 mt-4">
            <Image
              src={e.author.profilePic}
              alt="profile pic"
              height={36}
              width={36}
              className="rounded-full"
            />
            <div>
              <h2 className="text-sm">{e.author.username}</h2>
              <p className="text-xs">{e.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
