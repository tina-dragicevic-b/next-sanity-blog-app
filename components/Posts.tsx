import Link from "next/link";
import {
  generateNumber,
  generateNumber2,
} from "../helperMethods/generateRandomNumber";
function Posts(props: any) {
  return (
    <div>
      <Link key="props.post._id" href={`/post/${props.post.slug.current}`}>
        {props.post.title}
      </Link>
      <p>{generateNumber()} + {generateNumber2()}</p>
    </div>
  );
}
export default Posts;
