import { useContext } from "react";
import classes from "./styles.module.css";
import { GlobalContext } from "../../context";

export default function AddNewBlog() {
  const { formData, setFormData } = useContext(GlobalContext);

  console.log(formData);

  return (
    <div className={classes.wrapper}>
      <h1>Add Blog</h1>
      <div className={classes.formWrapper}>
        <input
          name="title"
          placeholder="Enter Blog Title"
          id="title"
          type="text"
          value={formData.title}
          onChange={(event) =>
            setFormData({
              ...formData,
              title: event.target.value,
            })
          }
        />
        <textarea
          name="description"
          placeholder="Enter Blog Description"
          id="description"
          value={formData.description}
          onChange={(event) =>
            setFormData({
              ...formData,
              description: event.target.value,
            })
          }
        ></textarea>
        <button onClick={handleSavebBlogToDatabase}>Add Blog</button>
      </div>
    </div>
  );
}
