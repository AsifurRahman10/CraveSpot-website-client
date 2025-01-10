import { useLoaderData } from "react-router-dom";
import { useAxiosPublic } from "../../Hooks/useAxiosPublic";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// image api key
const image_URL = import.meta.env.VITE_ImageBBKEY;
// image hosting link
const image_hosting_link = `https://api.imgbb.com/1/upload?key=${image_URL}`;
export const UpdateItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const { price, category, recipe, name, _id } = useLoaderData();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_link, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount) {
        reset();
        Swal.fire({
          title: `${data.name} has been added to menu`,
          icon: "success",
          draggable: true,
        });
      }
    }
  };
  return (
    <div>
      <h2 className="text-center text-4xl my-10">UPDATE ITEM</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-12 bg-white w-11/12 lg:w-9/12 mx-auto"
      >
        {/*   Recipe name* */}
        <div>
          <label className="font-semibold">Recipe name*</label>
          <input
            type="text"
            defaultValue={name}
            placeholder="Recipe name"
            className="input input-bordered w-full mt-4"
            {...register("name")}
          />
        </div>
        <div className="mt-6 flex items-center gap-6">
          {/* select */}
          <div className="flex-1">
            <label className="font-semibold block">Category*</label>
            <select
              defaultValue={category}
              {...register("category")}
              className="select select-bordered w-full mt-4"
            >
              <option disabled value={"default"}>
                Category
              </option>
              <option value={"salad"}>Salads</option>
              <option value={"pizza"}>Pizza</option>
              <option value={"soup"}>Pizza</option>
              <option value={"dessert"}>Dessert</option>
              <option value={"drinks"}>Drinks</option>
            </select>
          </div>
          {/* price */}
          <div className="flex-1">
            <label className="font-semibold">Price*</label>
            <input
              defaultValue={price}
              {...register("price")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-4"
            />
          </div>
        </div>

        {/*   Recipe Details* */}
        <div className="mt-4">
          <label className="font-semibold block">Recipe Details*</label>
          <textarea
            defaultValue={recipe}
            {...register("recipe")}
            rows="5"
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Bio"
          ></textarea>
        </div>
        {/*   file upload* */}
        <div>
          <input
            type="file"
            className="file-input file-input-bordered w-full mt-4"
            {...register("image")}
          />
        </div>
        <button className="flex items-center btn mt-4 text-lg bg-gradient-to-r from-[#835D23] to-[#B58130] text-white px-8 rounded-none">
          Update Item
        </button>
      </form>
    </div>
  );
};
