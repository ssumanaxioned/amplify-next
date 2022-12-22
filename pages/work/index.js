import { DataStore } from "aws-amplify";
import Header from "../../components/Header";
import List from "../../components/List";
import { Link, Post } from "../../models";

export async function getStaticProps() {
  const dataPost = await DataStore.query(Post);
  const dataLink = await DataStore.query(Link);
  const posts = await JSON.parse(JSON.stringify(dataPost));
  const links = await JSON.parse(JSON.stringify(dataLink));
  return {
    props: { posts, links },
  }
}

const Work = ({ posts, links }) => {
  return (
    <div>
      <Header data={links} />
      <div className="w-4/5 mx-auto">
        <h2 className="mt-5 text-4xl font-bold">Work</h2>
        <div className='mt-5 flex justify-start items-start flex-wrap gap-5'>
          {
            posts && posts.map((post) => {
              return (
                <List key={post.id} data={post} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Work;