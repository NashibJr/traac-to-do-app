/**
 * Axios is simply a promise based HTTP client for node.
 *  -> It runs on both the client side and the server side.
 *  -> XMLHTTP requests, server side runs on the http module in node.
 *
 * Features of axios.
 *  - It makes both XMLHTTP requests(client side) and http requests(server side)
 *  - Supports the promise API.
 *  - Intercepts requests and responses.
 *  - Automatically handles JSON data.
 *
 * Making HTTP requests with axios.
 *  - get, post, delete and put
 *  axios(configuration)
 * url, method
 *
 * The other way is to call the method on the axios object.
 * axios.get(), axios.post()
 * => axios.method(url,data, config) config => {}. It has data=>post, put and patch, headers:{}
 */

import React from "react";
import axios from "axios";
import client from "./api/client";

export default function App() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await client.get("/students/");
        setStudents(response.data);
      } catch (error) {
        console.log(error, ">>>>");
      }
    })();
  }, []);

  console.log(students, ">>>>");

  const handleAddStudent = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/videos/comments/create/2f698885-9087-472f-850e-399afb443e31/",
        {
          video: "2c7ed3da-e0f7-445e-a52a-257c0c2aec8b",
          body: "This video is very very good. I am Aturinda David.",
        }
      );

      console.log(response.data, ":::::");
    } catch (error) {
      console.log(error, ">>>");
    }
  };

  const handleCommentDelete = async () => {
    try {
      const response = await client.delete(
        "/videos/comments/3687a837-5be9-4888-92a2-8ae777c553d4/"
      );
      console.log(response.data);
    } catch (error) {
      console.log(error, "::::");
    }
  };

  return (
    <>
      <h2>Hello world</h2>
      <button type="button" onClick={handleAddStudent}>
        Add student
      </button>
      <button type="button" onClick={handleCommentDelete}>
        Delete Comment
      </button>
    </>
  );
}
