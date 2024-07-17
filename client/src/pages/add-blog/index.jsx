import { useContext } from "react";
import classes from "./styles.module.css";
import { GlobalContext } from "../../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddNewBlog() {
  const { formData, setFormData } = useContext(GlobalContext);
  const navigate = useNavigate;

  console.log(formData);

  async function handleSaveBlogToDatabase() {
    const response = await axios.post("http://localhost:5000/api/blogs/add", {
      title: formData.title,
      description: formData.description,
    });

    const result = await response.data;

    console.log(result);

    if (result) {
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }

  //error above ask jeff

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
        <button onClick={handleSaveBlogToDatabase}>Add Blog</button>
      </div>
    </div>
  );
}
