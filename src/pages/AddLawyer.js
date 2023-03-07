import { React, useState, useEffect } from "react";
import axios from "axios";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  clearForm,
  handleChange,
  setImage,
  setLoading,
  createLawyer,
} from "../features/lawyer/lawyerSlice";
import styled from "styled-components";

const AddLawyer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [photo, setPhoto] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const {
    type,
    typeOptions,
    name,
    email,
    image,
    dutyTr,
    dutyEn,
    educationTr,
    educationEn,
    barAssociationTr,
    barAssociationEn,
    languagesTr,
    languagesEn,
    expertiseTr,
    expertiseEn,
    isLoading,
  } = useSelector((store) => store.lawyer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isImage) {
      if (
        !name ||
        !email ||
        !dutyTr ||
        !dutyEn ||
        !educationTr ||
        !educationEn ||
        !barAssociationTr ||
        !barAssociationEn ||
        !languagesTr ||
        !languagesEn ||
        !expertiseTr ||
        !expertiseEn
      ) {
        toast.error("Please fill out all fields");
        return;
      }
      dispatch(
        createLawyer({
          type,
          name,
          email,
          image,
          dutyTr,
          dutyEn,
          educationTr,
          educationEn,
          barAssociationTr,
          barAssociationEn,
          languagesTr,
          languagesEn,
          expertiseTr,
          expertiseEn,
        })
      );
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
        } = await axios.post("api/v1/lawyers/image", formData, {
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
  const handleLawyerChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleImageChange = (e) => {
    setPhoto(e.target.files[0]);
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
      <form onSubmit={handleSubmit}>
        <FormRowSelect
          name="type"
          value={type}
          handleChange={handleLawyerChange}
          labelText="Type"
          list={typeOptions}
        />
        <FormRow
          type="text"
          name="name"
          value={name}
          handleChange={handleLawyerChange}
          labelText="Name"
        />
        <FormRow
          type="text"
          name="email"
          value={email}
          handleChange={handleLawyerChange}
          labelText="Email"
        />
        <FormRow
          type="text"
          name="dutyTr"
          value={dutyTr}
          handleChange={handleLawyerChange}
          labelText="Duty (Turkish)"
        />
        <FormRow
          type="text"
          name="dutyEn"
          value={dutyEn}
          handleChange={handleLawyerChange}
          labelText="Duty (English)"
        />
        <FormRow
          type="text"
          name="educationTr"
          value={educationTr}
          handleChange={handleLawyerChange}
          labelText="Education (Turkish)"
        />
        <FormRow
          type="text"
          name="educationEn"
          value={educationEn}
          handleChange={handleLawyerChange}
          labelText="Education (English)"
        />
        <FormRow
          type="text"
          name="barAssociationTr"
          value={barAssociationTr}
          handleChange={handleLawyerChange}
          labelText="Bar Association (Turkish)"
        />
        <FormRow
          type="text"
          name="barAssociationEn"
          value={barAssociationEn}
          handleChange={handleLawyerChange}
          labelText="Bar Association (English)"
        />
        <FormRow
          type="text"
          name="languagesTr"
          value={languagesTr}
          handleChange={handleLawyerChange}
          labelText="Languages (Turkish)"
        />
        <FormRow
          type="text"
          name="languagesEn"
          value={languagesEn}
          handleChange={handleLawyerChange}
          labelText="Languages (English)"
        />
        <FormRow
          type="text"
          name="expertiseTr"
          value={expertiseTr}
          handleChange={handleLawyerChange}
          labelText="Expertise (Turkish)"
        />
        <FormRow
          type="text"
          name="expertiseEn"
          value={expertiseEn}
          handleChange={handleLawyerChange}
          labelText="Expertise (English)"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
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
    button {
      grid-column: 2 / 3;
      width: 40%;
      height: 2rem;
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

export default AddLawyer;
