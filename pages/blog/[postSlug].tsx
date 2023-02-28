import { GetStaticProps, GetStaticPaths } from "next";

const fetchPost = ({ slug }: { slug: string }) => {
  const isPublished = !!(new Date().getMinutes() % 2);

  switch (slug) {
    case "1": {
      return { published: isPublished, title: "Post 1" };
    }
    case "2": {
      return { published: isPublished, title: "Post 2" };
    }
    case "3": {
      return { published: isPublished, title: "Post 3" };
    }
    default: {
      return;
    }
  }
};

function Post({ post }: { post: { published: boolean; title: string } }) {
  const { title } = post;

  return (
    <div>
      <main>
        <h1>{title}</h1>
      </main>
    </div>
  );
}

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const slug = params?.postSlug;

  if (typeof slug !== "string") {
    return {
      notFound: true,
      revalidate: 5,
    };
  }

  const post = fetchPost({ slug });

  if (post?.published !== true) {
    console.log(`Page with slug: ${slug} not found`);

    return {
      notFound: true,
      revalidate: 4, // Remember this value to spot when Response Headers change from "[...] Cache-Control: s-maxage=5..." to "[...] Cache-Control: s-maxage=4..."
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
