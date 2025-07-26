const buttons = document.querySelectorAll(".buttons__btn");
const text = document.querySelector(".text");
text.style.fontWeight = 900;
let URL = "https://learnbasicmethods-default-rtdb.firebaseio.com/i.json";

async function query(method, FETCH) {
  text.style.color = "black";
  text.textContent = "loading...";
  try {
    await FETCH.then((resp) => resp.json())
      .then((resp) => {
        if (resp != null || resp != undefined) {
          text.textContent = Object.values(resp);
        } else text.textContent = "null";
      })
      .then((resp) => console.dir(resp));
  } catch (error) {
    text.style.color = "red";
    text.textContent = "Failed";
  }
}

const Method = (method) => {
  switch (method) {
    case "PUT": {
      fetch(URL, {
        method: method,
        body: JSON.stringify({ i: `${Math.floor(Math.random() * 100)}` }),
      });
      break;
    }
    case "GET": {
      query(method, fetch(URL, { method: method }));
      break;
    }
    case "DELETE": {
      query(method, fetch(URL, { method: method }));
      break;
    }
    case "POST": {
      query(
        method,
        fetch(URL, {
          method: method,
          body: JSON.stringify({
            i: `${Math.floor(Math.random() * 100)}`,
          }),
        })
      );
      //   console.dir(method);
      break;
    }
  }
};

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    Method(event.target.id);
  });
});
