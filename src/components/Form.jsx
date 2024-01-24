const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg font-medium">Title</span>
          </div>
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full text-base"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text text-lg font-medium">Your post</span>
          </div>
          <textarea
            value={post.post}
            onChange={(e) => setPost({ ...post, post: e.target.value })}
            className="textarea textarea-bordered text-base h-40"
            placeholder="Post"
          ></textarea>
        </label>
        <div className="w-full flex justify-end mt-4">
          <button type="submit" disabled={submitting} className="btn btn-primary text-white">
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
