export const metadata = {
  title: "Create Blog",
};

const layout = ({ children }) => {
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-2xl font-semibold text-primary mt-10">Create Post</h2>
      {children}
    </div>
  );
};

export default layout;
