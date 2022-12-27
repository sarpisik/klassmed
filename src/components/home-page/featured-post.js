import PostSlider from "../posts/post-slider";

function FeaturedPost(props) {
  return (
    <div className="post-area bg-azure md:pt-[160px] pt-[55px] md:pb-[155px] pb-[55px]">
      <div className="container">
        <PostSlider posts={props.posts} />
      </div>
    </div>
  );
}

export default FeaturedPost;
