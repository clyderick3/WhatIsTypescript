import axios from "axios";
import { useEffect, useState } from "react";

function Dictionary() {

    const [def1, setDef] = useState([]);

    const form: HTMLFormElement = document.querySelector("#defineform");
    document.body.addEventListener("submit", async function (event) {
      event.preventDefault();
      let form = event.target as HTMLFormElement;
    });

    useEffect(() => {
        const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
        form.onsubmit = async () => {
          const formData = new FormData(form);
          // console.log(formData);
          const text = formData.get("defineword") as string;
          axios.get(url + text)
            .then((res) => {
              console.log(res);
              setDef(res.data);
            })
            .catch((err) => {
              console.log(err);
          })
        }

    }
    ,[]);

}
export default Dictionary;