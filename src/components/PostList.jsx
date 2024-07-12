import Post from "./post";
import classes from "./PostList.module.css";
function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Viktor" body="Is going to become a great programmer!" />
      <Post author="Beni" body="He is in Poland." />
    </ul>
  );
}

export default PostList;
