import { React, useState, useEffect } from "react";
import axios from "axios";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  clearForm,
  handleChange,
  setImage,
  setLoading,
} from "../features/lawyer/lawyerSlice";
import styled from "styled-components";

const AddLawyer = () => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const {
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
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 40vh;
  height: 200vh;
  margin: 10rem auto;
`;

export default AddLawyer;
