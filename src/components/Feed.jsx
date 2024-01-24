import Image from "next/image";
import prompts from "@/lib/prompts";

const Feed = async () => {
  const promptData = await prompts();

  return (
    <div className="w-10/12 mx-auto flex flex-col gap-8">
      {promptData.map((e, i) => (
        <div
          key={i}
          className="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-xl p-6"
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
