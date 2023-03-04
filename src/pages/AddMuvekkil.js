import { React, useState, useEffect } from "react";
import axios from "axios";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createMuvekkil,
  updateMuvekkil,
} from "../features/muvekkil/muvekkilSlice";
import styled from "styled-components";

const AddMuvekkil = ({ props }) => {
  const initialState = {
    ad: "",
    soyad: "",
    tc: "",
    telefon: "",
    email: "",
    adres: "",
    dosyaMahkemesi: "",
    dosyaNo: "",
    toplamBorc: "",
    vekaletUcreti: "",
    masraf: "",
    alinanVekalet: "",
    kalanTutar: "",
    vadeTarihi: "",
    yapilanMasraf: "",
    isEditing: false,
  };
  const dispatch = useDispatch();
  const history = useHistory();
  if (props) {
    setMuvekkil(props);
  }
  const [muvekkil, setMuvekkil] = useState(initialState);

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMuvekkil({ ...muvekkil, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ad, soyad, isEditing } = muvekkil;
    if (!isEditing) {
      if (!ad || !soyad) {
        toast.error("Please fill ad and soyad fields");
        return;
      }
      dispatch(createMuvekkil(muvekkil));
      setMuvekkil({ ...initialState, isEditing: true });
    } else {
      if (!ad || !soyad) {
        toast.error("Please fill ad and soyad fields");
        return;
      }
      dispatch(updateMuvekkil(muvekkil));
      setMuvekkil({ ...initialState, isEditing: true });
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormRow
          label="Ad"
          name="ad"
          value={muvekkil.ad}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Soyad"
          name="soyad"
          value={muvekkil.soyad}
          handleChange={handleFormChange}
        />
        <FormRow
          label="TC"
          name="tc"
          value={muvekkil.tc}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Telefon"
          name="telefon"
          value={muvekkil.telefon}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Email"
          name="email"
          value={muvekkil.email}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Adres"
          name="adres"
          value={muvekkil.adres}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Dosya Mahkemesi"
          name="dosyaMahkemesi"
          value={muvekkil.dosyaMahkemesi}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Dosya No"
          name="dosyaNo"
          value={muvekkil.dosyaNo}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Toplam Borç"
          name="toplamBorc"
          value={muvekkil.toplamBorc}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Vekalet Ücreti"
          name="vekaletUcreti"
          value={muvekkil.vekaletUcreti}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Masraf"
          name="masraf"
          value={muvekkil.masraf}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Alınan Vekalet"
          name="alinanVekalet"
          value={muvekkil.alinanVekalet}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Kalan Tutar"
          name="kalanTutar"
          value={muvekkil.kalanTutar}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Vade Tarihi"
          name="vadeTarihi"
          value={muvekkil.vadeTarihi}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Yapılan Masraf"
          name="yapilanMasraf"
          value={muvekkil.yapilanMasraf}
          handleChange={handleFormChange}
        />

        <button type="submit" className="btn btn-block">
          {muvekkil.isEditing ? "Update" : "Add"}
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
    button {
      grid-column: 2 / 3;
      width: 40%;
      height: 2rem;
    }
  }
`;

export default AddMuvekkil;
