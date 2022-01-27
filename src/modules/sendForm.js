const sendForm = ({ formId, someElem = [] }) => {

    const form = document.getElementById(formId);
    const formElements = form.querySelectorAll("input");

    const statusBlock = document.createElement("div");
    const loadText = "Загрузка...";
    const errorText = "Ошибка...";
    const successText = "Спасибо! Наш менеджер с вами свяжется";
  
    const validate = (list) => {
        let success = true;
        list.forEach((input) => {
            console.log(input.name);
          
            if (input.name == "user_phone") {
                if (/[^\+\d\(\)\-]/g.test(input.value.trim())) {
                    success = false;
                }
            }
  
            if (input.name == "user_name") {
                if (/[^а-я\-\s]/gi.test(input.value.trim())) {
                    success = false;
                }
            }
    
            if (input.name == "user_message") {
                if (/[^а-я\-\!\.\,\?\:\;\(\)\"\s]/gi.test(input.value.trim())) {
                    success = false;
                }
            }
      });
  
        return success;
    };
  
    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json);
    };
  
    const submitForm = () => {
        const formData = new FormData(form);
        const formBody = {};
    
        statusBlock.textContent = loadText;
        form.append(statusBlock);
  
        formData.forEach((value, key) => {
            formBody[key] = value;
        });
  
        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);
  
            if (elem.type === "block") {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value;
        }
      });
  
        if (validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText;
  
                formElements.forEach((input) => {
                    input.value = "";
                });
            })
            .catch((error) => {
                statusBlock.textContent = errorText;
            });
        } else {
            alert("Данные не валидны!");
        }
    };
  
    try {
        if (!form) {
            throw new Error("Верните форму на место!");
        }
  
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
  };
  
  export default sendForm;