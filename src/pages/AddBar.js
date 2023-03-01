import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBar } from "../features/bar/barSlice";
import styled from "styled-components";

const AddBar = () => {
  const { bar, isLoading } = useSelector((store) => store.bar);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    type: "About Us",
    categoryTr: "",
    categoryEn: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { type, categoryTr, categoryEn } = values;
    if (!type || !categoryTr || !categoryEn) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(createBar({ type, categoryTr, categoryEn }));
    setValues({ type: "About Us", categoryTr: "", categoryEn: "" });
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
          list={["About Us", "Work", "Our Team"]}
        />
        <FormRow
          type="text"
          name="categoryTr"
          value={values.categoryTr}
          handleChange={handleChange}
          labelText="Category (Turkish)"
        />
        <FormRow
          type="text"
          name="categoryEn"
          value={values.categoryEn}
          handleChange={handleChange}
          labelText="Category (English)"
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
export default AddBar;
