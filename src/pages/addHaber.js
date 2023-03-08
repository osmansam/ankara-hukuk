import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  createHaber,
  handleChange,
  clearForm,
  setImage,
  setLoading,
  createBaslik,
  setBaslikHaberId,
  getBaslik,
} from "../features/haber/haberSlice";
import styled from "styled-components";

const AddHaber = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [photo, setPhoto] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const { language } = useSelector((store) => store.bar);
  const {
    isLoading,
    titleTr,
    titleEn,
    contentTr,
    contentEn,
    image,
    date,
    baslikHaberId,
  } = useSelector((store) => store.haber);

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleImageChange = (e) => {
    setPhoto(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isImage && baslikHaberId === "") {
      console.log(isImage);
      console.log(baslikHaberId, "baslikHaberId");
      if (!titleTr || !contentTr) {
        toast.error("Please fill titleTr and contentTr");
        return;
      }
      dispatch(createHaber({ titleTr, titleEn, contentTr, contentEn, image }));
      dispatch(clearForm());
      setIsImage(false);
    } else if (isImage && baslikHaberId !== "") {
      if (!titleTr || !contentTr) {
        toast.error("Please fill titleTr and contentTr");
        return;
      }
      const haberId = baslikHaberId;
      dispatch(
        createBaslik({ titleTr, titleEn, contentTr, contentEn, image, haberId })
      );
      dispatch(clearForm());
      setIsImage(false);
      dispatch(setBaslikHaberId(""));
      await dispatch(getBaslik(haberId));
      history.push(`/habers/baslik/${haberId}`);
    } else {
      dispatch(setLoading(true));
      if (photo) {
        const formData = new FormData();
        formData.append("image", photo);
        try {
          const {
            data: {
              image: { src },
            },
          } = await axios.post("api/v1/habers/image", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          toast.success("Image Uploaded Successfully");
          if (src) {
            dispatch(setImage(src));
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }

      setIsImage(true);
      dispatch(setLoading(false));
    }
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!isImage) {
    return (
      <ImageForm>
        <form
          className="form file-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h1>Upload Image</h1>
          <div className="form-row">
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
      </ImageForm>
    );
  }
  return (
    <Wrapper>
      {baslikHaberId !== "" ? <h1>Add Baslik</h1> : <h1>Add Haber</h1>}
      <form onSubmit={handleSubmit}>
        <FormRow
          type="text"
          name="titleTr"
          value={titleTr}
          handleChange={handleFormChange}
          labelText="Title (TR)"
        />
        <FormRow
          type="text"
          name="titleEn"
          value={titleEn}
          handleChange={handleFormChange}
          labelText="Title (EN)"
        />
        <FormRow
          type="text"
          name="contentTr"
          value={contentTr}
          handleChange={handleFormChange}
          labelText="Content (TR)"
        />
        <FormRow
          type="text"
          name="contentEn"
          value={contentEn}
          handleChange={handleFormChange}
          labelText="Content (EN)"
        />
        <div className="button-container">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
          <button className="btn btn-block" onClick={() => setIsImage(false)}>
            Back
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;

  margin: 10rem auto;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    justify-items: center;
    align-items: center;
    .form-row:nth-child(2),
    .form-row:nth-child(3) {
      &:first-child {
        visibility: hidden;
      }
    }
    .button-container {
      grid-column: 1 / -1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50vh;
    }
    button {
      width: 20vh;
    }
  }
`;

const ImageForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 40vh;
  }
  button {
    margin-top: 1rem;
  }
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
`;

export default AddHaber;
