import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import Form from "../components/form";
import Table from "../components/table";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  const showFormHandler = () => {
    setVisible(!visible);
  };
  return (
    <section>
      <Head>
        <title>Employee management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Empoyee management
        </h1>

        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={showFormHandler}
              className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800"
            >
              Add Employee{" "}
              <span className="px-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>

        {/* Collapsable form */}

        {visible ? <Form></Form> : <></>}

        {/* table */}
        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </section>
  );
}