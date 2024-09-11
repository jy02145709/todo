import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { categoriesState, IToDo } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [categories, setCategories] = useRecoilState<{
    [key: string]: IToDo[];
  }>(categoriesState);

  const onValid = ({ category }: IForm) => {
    if (!categories[category]) {
      setCategories((oldCategories) => ({
        ...oldCategories,
        [category]: [],
      }));
    }
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("category", { required: "Please enter a category name" })}
        placeholder="Add new category"
      />
      <button type="submit">Add Category</button>
    </form>
  );
}

export default CreateCategory;
