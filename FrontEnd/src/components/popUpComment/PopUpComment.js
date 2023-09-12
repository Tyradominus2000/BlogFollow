import "./PopUpComment.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function PopUpComment({
  id = null,
  idUser = null,
  IsComment = true,
  articleName = "defaultArticleName",
  commentName = "defaultCommentName",
  setVisible,
  sendComment,
}) {
  const yupSchema = yup.object({
    title:
      IsComment &&
      yup
        .string()
        .required("This field must not be empty")
        .max(50, "Title as a limit of 50 character"),
    description: yup.string().required("This field must not be empty"),
  });

  const defaultValues = {
    title: "",
    description: "",
  };

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
  });

  async function submit(values) {
    console.log(values);
    clearErrors();
    const obj = {
      idUser: idUser,
      idArticle: id,
      idComment: id,
      title: values.title,
      description: values.description,
    };

    const response = await sendComment(IsComment, obj);
    if (response === true) {
      setVisible(false);
      alert("Message send");
    } else {
      setError("generic", {
        type: "generic",
        message: response,
      });
    }
  }
  console.log("Is a Comment : ", IsComment, " id : ", id);
  return (
    <div className="popUpContainer d-flex align-items-center">
      <form
        className="d-flex flex-column align-items-center justify-content-center flex-fill"
        onSubmit={handleSubmit(submit)}
      >
        {IsComment ? (
          <h2>Send a comment to the article : "{articleName}"</h2>
        ) : (
          <h2>Send a replies to the comment : "{commentName}"</h2>
        )}
        {IsComment && (
          <div className="d-flex flex-fill flex-column inputTitleContainer">
            <input
              type="text"
              className="inputComment"
              id="title"
              placeholder="Title of Comment"
              {...register("title")}
            />
            <div>
              {errors?.title && (
                <p className="form-error-light">{errors.title.message}</p>
              )}
            </div>
          </div>
        )}
        <div className="d-flex flex-fill flex-column inputDescriptionContainer">
          <textarea
            type="text"
            className="inputComment"
            id="description"
            placeholder="Description of Comment"
            {...register("description")}
          />
          <div>
            {errors?.description && (
              <p className="form-error-light">{errors.description.message}</p>
            )}
          </div>
        </div>
        {errors.generic && (
          <p className="form-error-light">{errors.generic.message}</p>
        )}
        <div className="d-flex justify-content-center btnInputContainer">
          <button onClick={() => setVisible(false)} type="button">
            Cancel
          </button>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
