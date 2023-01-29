import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

export default function Comments(props: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    console.log(data)
  }

  return (
    <div>
      <hr className="max-w-xlg mx-auto border border-red-400" />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 may-w-2xl mb-10">
        <h3 className="text text-sm text-red-400">Enjoyed the article?</h3>
        <h4 className="text text-2xl font-bold">Leave a comment below!</h4>
        <hr className="py-3 mt-5"></hr>

        <input
          {...register("_id")}
          type="hidden"
          name="_id"
          value={props._id}
        ></input>

        <label className="block mb-5">
          <span className="text-gray-600">Name</span>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your lovely name"
            className="shadow border rounded py-2 px-3 form-input mt-1 w-full outline-none focus:ring ring-red-200"
          ></input>
        </label>
        <label className="bloxk mb-5">
          <span className="text-gray-600">Email</span>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="name@gmail.com"
            className="shadow border rounded py-2 px-3 form-input mt-1 w-full outline-none focus:ring ring-red-200"
          ></input>
        </label>
        <label className="bloxk mb-5">
          <span className="text-gray-600">Comment</span>
          <textarea
            {...register("comment", { required: true })}
            className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none focus:ring ring-blue-300"
            rows={8}
          ></textarea>
        </label>

        {/* errors filed that will be displayed if any of the field validations fail */}
        <div>
          {errors.name && (
            <span className="text-red-300">- The Name Field is required. </span>
          )}

          {errors.email && (
            <span className="text-red-300">
              - The Email Field is required.{" "}
            </span>
          )}

          {errors.comment && (
            <span className="text-red-300">
              - The Comment Field is required.{" "}
            </span>
          )}
        </div>
        <input type="submit" className="shadow bg-yellow-500
        hover:bg-yellow-300 focus:shadow-outline foucs:outline-none text-white 
        font-bold py-2 px-4 cursor-pointer"></input>
      </form>
    </div>
  );
}

// export default Comments;
