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
  handleChange,
  clearMuvekkil,
} from "../features/muvekkil/muvekkilSlice";
import styled from "styled-components";

const AddMuvekkil = () => {
  const {
    id,
    ad,
    soyad,
    tc,
    telefon,
    email,
    adres,
    dosyaMahkemesi,
    dosyaNo,
    toplamBorc,
    vekaletUcreti,
    masraf,
    alinanVekalet,
    kalanTutar,
    vadeTarihi,
    yapilanMasraf,
    isEditing,
  } = useSelector((state) => state.muvekkil);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEditing) {
      if (!ad || !soyad) {
        toast.error("Please fill ad and soyad fields");
        return;
      }
      await dispatch(
        createMuvekkil({
          ad,
          soyad,
          tc,
          telefon,
          email,
          adres,
          dosyaMahkemesi,
          dosyaNo,
          toplamBorc,
          vekaletUcreti,
          masraf,
          alinanVekalet,
          kalanTutar,
          vadeTarihi,
          yapilanMasraf,
          isEditing: true,
        })
      );
      dispatch(clearMuvekkil());
      history.push("./muvekkil");
    } else {
      if (!ad || !soyad) {
        toast.error("Please fill ad and soyad fields");
        return;
      }
      await dispatch(
        updateMuvekkil({
          id,
          ad,
          soyad,
          tc,
          telefon,
          email,
          adres,
          dosyaMahkemesi,
          dosyaNo,
          toplamBorc,
          vekaletUcreti,
          masraf,
          alinanVekalet,
          kalanTutar,
          vadeTarihi,
          yapilanMasraf,
          isEditing: true,
        })
      );
      dispatch(clearMuvekkil());
      history.push("./muvekkil");
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormRow
          label="Ad"
          name="ad"
          value={ad}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Soyad"
          name="soyad"
          value={soyad}
          handleChange={handleFormChange}
        />
        <FormRow
          label="TC"
          name="tc"
          value={tc}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Telefon"
          name="telefon"
          value={telefon}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Email"
          name="email"
          value={email}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Adres"
          name="adres"
          value={adres}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Dosya Mahkemesi"
          name="dosyaMahkemesi"
          value={dosyaMahkemesi}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Dosya No"
          name="dosyaNo"
          value={dosyaNo}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Toplam Borç"
          name="toplamBorc"
          value={toplamBorc}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Vekalet Ücreti"
          name="vekaletUcreti"
          value={vekaletUcreti}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Masraf"
          name="masraf"
          value={masraf}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Alınan Vekalet"
          name="alinanVekalet"
          value={alinanVekalet}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Kalan Tutar"
          name="kalanTutar"
          value={kalanTutar}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Vade Tarihi"
          name="vadeTarihi"
          value={vadeTarihi}
          handleChange={handleFormChange}
        />
        <FormRow
          label="Yapılan Masraf"
          name="yapilanMasraf"
          value={yapilanMasraf}
          handleChange={handleFormChange}
        />

        <button type="submit" className="btn btn-block">
          {isEditing ? "Update" : "Add"}
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 5rem auto;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    justify-items: center;
    align-items: center;
    button {
      grid-column: 2 / 3;
      width: 40%;
      height: 2rem;
      margin-bottom: 3rem;
    }
  }
`;

export default AddMuvekkil;
