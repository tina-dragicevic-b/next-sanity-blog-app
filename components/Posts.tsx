import Link from "next/link";
import { urlFor } from "../sanity";
import {
  generateNumber,
  generateNumber2,
} from "../helperMethods/generateRandomNumber";

function Posts(props: any) {
  return (
    <div>
      <Link key="props.post._id" href={`/post/${props.post.slug.current}`}>
        {/* {props.post.title} */}
        <div className="group cursor-pointer border rounded-lg overflow-hidden bg-gray-200">
          <img
            className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
            src={urlFor(props.post.mainImage).url()}
            alt=""
          ></img>
          <div className="flex justify-between p-5">
            <div>
              <p className="text-lg font-bold">{props.post.title}</p>
              <p className="text-xs">
                {props.post.description} by {props.post.author.name}
              </p>
            </div>
            <img
              className="h-12 w-12 border border-teal-900"
              src={urlFor(props.post.author.image).url()}
            ></img>
          </div>
        </div>
      </Link>
      {/* <p>{generateNumber()} + {generateNumber2()}</p> */}
    </div>
  );
}
export default Posts;
