import { useState } from "react"
import Accueil from "../components/Accueil";
import Images from "../components/Images";
import Test from "../components/Test";

export default function Home({page}) {
  return <>
    {page === 'accueil' ? 
      <Accueil />
    : page === 'images' ? 
      <Images />
    : page === 'test' ?
      <Test />
    :
      404
    }
  </>
}
