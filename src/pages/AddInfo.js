import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createInfo } from "../features/info/infoSlice";
import styled from "styled-components";

const AddInfo = () => {
  const { isLoading } = useSelector((store) => store.bar);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    type: "About Us",
    headerTr: "",
    headerEn: "",
    infoTr: "",
    infoEn: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { type, headerTr, headerEn, infoTr, infoEn } = values;
    if (!type || !headerTr || !headerEn || !infoTr || !infoEn) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(createInfo({ type, headerTr, headerEn, infoTr, infoEn }));
    setValues({
      type: "About Us",
      headerTr: "",
      headerEn: "",
      infoTr: "",
      infoEn: "",
    });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit}>
        <FormRowSelect
          name="type"
          labelText="Type"
          value={values.type}
          handleChange={handleChange}
          list={["About Us", "Work", "Human Resources"]}
        />
        <FormRow
          type="text"
          name="headerTr"
          value={values.headerTr}
          handleChange={handleChange}
          labelText="Header (Turkish)"
        />
        <FormRow
          type="text"
          name="headerEn"
          value={values.headerEn}
          handleChange={handleChange}
          labelText="Header (English)"
        />
        <FormRow
          type="text"
          name="infoTr"
          value={values.infoTr}
          handleChange={handleChange}
          labelText="Info (Turkish)"
        />
        <FormRow
          type="text"
          name="infoEn"
          value={values.infoEn}
          handleChange={handleChange}
          labelText="Info (English)"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 40vh;
  height: 100vh;
  margin: 10rem auto;
`;
export default AddInfo;
