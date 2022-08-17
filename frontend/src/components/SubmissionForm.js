import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => {

    let str = JSON.stringify(data);

    fetch("http://localhost:5000/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: str,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after post");
        console.log(data);

        setResult(data.msg ? data.msg : "error");
      })
      .catch((err) => console.log(err));
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" />
      <p>
        <input {...register("authors")} placeholder="Authors" />
      </p>
      <p>
        <input {...register("source")} placeholder="Source" />
      </p>
      <p>
        <input {...register("pubyear")} placeholder="Publication Year" />
      </p>
      <p>
        <input {...register("doi")} placeholder="DOI" />
      </p>
      <p>
        <input {...register("claim")} placeholder="Claim" />
      </p>
      <p>
        <input {...register("evidence")} placeholder="Evidence" />
      </p>

      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programmin</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
};
export default SubmissionForm;
