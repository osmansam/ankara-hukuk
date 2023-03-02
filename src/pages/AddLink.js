import { React, useState, useEffect } from "react";
import axios from "axios";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  clearForm,
  handleChange,
  setImage,
  setLoading,
  createLink,
} from "../features/link/linkSlice";
import styled from "styled-components";

const AddLink = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [photo, setPhoto] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const { en, tr, image, link, isLoading } = useSelector((store) => store.link);

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
    if (isImage) {
      if (!en || !tr || !link) {
        toast.error("Please fill out all fields");
        return;
      }
      dispatch(createLink({ en, tr, image, link }));
      dispatch(clearForm());
      setIsImage(false);
      history.push("/");
    } else {
      dispatch(setLoading(true));
      const formData = new FormData();
      formData.append("image", photo);
      try {
        const {
          data: {
            image: { src },
          },
        } = await axios.post("api/v1/links/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Image Uploaded Successfully");
        if (src) {
          dispatch(setImage(src));
          setIsImage(true);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
      dispatch(setLoading(false));
    }
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!isImage) {
    return (
      <form
        className="form file-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="form-row">
          <label htmlFor="image" className="form-label">
            Image
          </label>
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
    );
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormRow
          type="text"
          name="en"
          value={en}
          handleChange={handleFormChange}
        />
        <FormRow
          type="text"
          name="tr"
          value={tr}
          handleChange={handleFormChange}
        />
        <FormRow
          type="text"
          name="link"
          value={link}
          handleChange={handleFormChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default AddLink;
