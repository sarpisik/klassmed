import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import PostItem from "./post-item";

SwiperCore.use([Pagination, Autoplay]);

function renderPost(post) {
  return (
    <SwiperSlide key={post.slug}>
      <PostItem posts={post} />
    </SwiperSlide>
  );
}

function PostSlider(props) {
  const { posts } = props;

  return (
    <Swiper
      pagination={false}
      spaceBetween={25}
      slidesPerView={3}
      draggable={false}
      simulateTouch={false}
      navigation={false}
      breakpoints={{
        992: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {posts.map(renderPost)}
    </Swiper>
  );
}

export default PostSlider;
