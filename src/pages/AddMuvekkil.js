import { React, useState, useEffect } from "react";
import axios from "axios";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  handleChange,
  createMuvekkil,
} from "../features/muvekkil/muvekkilSlice";
import styled from "styled-components";

const AddMuvekkil = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    isLoading,
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
  } = useSelector((store) => store.muvekkil);

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ad || !soyad) {
      toast.error("Please fill ad and soyad fields");
      return;
    }
    dispatch(
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
      })
    );
    // history.push("/muvekkil");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormRow label="Ad" name="ad" value={ad} onChange={handleFormChange} />
        <FormRow
          label="Soyad"
          name="soyad"
          value={soyad}
          onChange={handleFormChange}
        />
        <FormRow label="TC" name="tc" value={tc} onChange={handleFormChange} />
        <FormRow
          label="Telefon"
          name="telefon"
          value={telefon}
          onChange={handleFormChange}
        />
        <FormRow
          label="Email"
          name="email"
          value={email}
          onChange={handleFormChange}
        />
        <FormRow
          label="Adres"
          name="adres"
          value={adres}
          onChange={handleFormChange}
        />
        <FormRow
          label="Dosya Mahkemesi"
          name="dosyaMahkemesi"
          value={dosyaMahkemesi}
          onChange={handleFormChange}
        />
        <FormRow
          label="Dosya No"
          name="dosyaNo"
          value={dosyaNo}
          onChange={handleFormChange}
        />
        <FormRow
          label="Toplam Borç"
          name="toplamBorc"
          value={toplamBorc}
          onChange={handleFormChange}
        />
        <FormRow
          label="Vekalet Ücreti"
          name="vekaletUcreti"
          value={vekaletUcreti}
          onChange={handleFormChange}
        />
        <FormRow
          label="Masraf"
          name="masraf"
          value={masraf}
          onChange={handleFormChange}
        />
        <FormRow
          label="Alınan Vekalet"
          name="alinanVekalet"
          value={alinanVekalet}
          onChange={handleFormChange}
        />
        <FormRow
          label="Kalan Tutar"
          name="kalanTutar"
          value={kalanTutar}
          onChange={handleFormChange}
        />
        <FormRow
          label="Vade Tarihi"
          name="vadeTarihi"
          value={vadeTarihi}
          onChange={handleFormChange}
        />
        <FormRow
          label="Yapılan Masraf"
          name="yapilanMasraf"
          value={yapilanMasraf}
          onChange={handleFormChange}
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
    button {
      grid-column: 2 / 3;
      width: 40%;
      height: 2rem;
    }
  }
`;

export default AddMuvekkil;
