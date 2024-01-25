import { MdOutlineFileUpload } from "react-icons/md";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="h-screen flex flex-col pt-24">
        <div className="flex justify-between items-center mx-4">
          <h2 className="text-2xl font-semibold text-primary">Create Post</h2>
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary btn-sm rounded-full text-white"
          >
            {submitting ? (
              <div className="flex items-center gap-2">
                <span className="loading loading-spinner loading-sm text-primary"></span>{" "}
                {type === "Create" ? "Creating" : "Updating"}
              </div>
            ) : (
              type
            )}
          </button>
        </div>

        <input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
          type="text"
          placeholder="Title"
          className="input focus:outline-none focus:border-none w-full text-xl font-medium"
          autoFocus
        />

        <textarea
          value={post.post}
          onChange={(e) => setPost({ ...post, post: e.target.value })}
          required
          className="flex-1 mt-4 textarea text-base w-full focus:outline-none focus:border-none"
          placeholder="Post"
        ></textarea>
      </form>
    </div>
  );
};

export default Form;
