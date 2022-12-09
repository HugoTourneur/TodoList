import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import AddListForm from "../Components/AddListForm";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <Header />
      <AddListForm />
    </>
  );
};

export default Home;
