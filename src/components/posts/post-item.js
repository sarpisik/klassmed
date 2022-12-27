import Image from "next/image";

function PostItem(props) {
  const { title, image, slug } = props.posts;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <div className="post-item">
      <div className="post-img block">
        <Image
          src={imagePath}
          alt={title}
          width={374}
          height={303}
          layout="responsive"
          quality={60}
          priority
        />
      </div>
    </div>
  );
}

export default PostItem;
