import Image from "next/image";
import { HeaderItem, HuluIcon } from "../components";
import {
  AiOutlineHome,
  AiOutlineThunderbolt,
  AiOutlineCheckCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import huluIcon from "../assets/Hulu_logo.svg";
export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row gap-2 items-center  mt-6">
      <div className="flex justify-evenly h-16 max-w-2xl ">
        <HeaderItem Icon={AiOutlineHome} title={"HOME"} />
        <HeaderItem Icon={AiOutlineThunderbolt} title={"TRENDING"} />
        <HeaderItem Icon={AiOutlineCheckCircle} title={"VERIFIED"} />
        <HeaderItem Icon={FiLayers} title={"COLLECTIONS"} />
        <HeaderItem Icon={AiOutlineSearch} title={"SEARCH"} />
        <HeaderItem Icon={BsPerson} title={"ACCOUNT"} />
      </div>
      <div className="w-36 h-16 sm:ml-auto sm:mr-6">
        <Image src={huluIcon} objectFit="contain" alt="Hulu Icon"/>
      </div>
    </header>
  );
}
