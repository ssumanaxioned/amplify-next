import { DataStore } from "aws-amplify";
import AmplifyImage from "../../components/AmplifyImage";
import Header from "../../components/Header";
import { Post, Link } from "../../models";

export async function getStaticProps({ params }) {
  const dataPost = await DataStore.query(Post, c => c.title.eq(params.slug));
  const posts = await JSON.parse(JSON.stringify(dataPost));
  const dataLink = await DataStore.query(Link);
  const links = await JSON.parse(JSON.stringify(dataLink));
  return {
    props: { posts, links },
  }
}

export async function getStaticPaths() {
  let paths = null;
  const dataPost = await DataStore.query(Post);
  const posts = await JSON.parse(JSON.stringify(dataPost));

  paths = posts.map((post) => ({
    params: { slug: post.slug },
  })
  )

  return {
    paths,
    fallback: false
  }
}

const WorkDetailPage = ({ posts, links }) => {
  return (
    <>
      <Header data={links} />
      <div className="w-4/5 mx-auto mt-5 space-y-5">
        <h2 className="text-5xl font-bold capitalize">
          {posts[0].title}
        </h2>
        <div className="text-lg">
          <p className="text-slate-400 capitalize">{posts[0].subtitle}</p>
          <p>{posts[0].description}</p>
        </div>
        <div className="flex">
          {
            posts[0].multipleimage.map((image, index) => (
              <figure key={index} className="w-96 h-96 relative">
                <AmplifyImage data={image} />
              </figure>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default WorkDetailPage;