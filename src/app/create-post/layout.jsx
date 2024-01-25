// this component is required for showing metadata and create post text as a server component

export const metadata = {
  title: "Create Blog",
};

const layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default layout;
