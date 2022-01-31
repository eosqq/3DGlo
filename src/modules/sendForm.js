const sendForm = ({ formId, someElem = [] }) => {

    const form = document.getElementById(formId);
    const formElements = form.querySelectorAll("input");

    const statusBlock = document.createElement("div");
    const loadText = "Загрузка...";
    const errorText = "Ошибка...";
    const successText = "Спасибо! Наш менеджер с вами свяжется";
    const nameError = 'Не меньше двух букв в Вашем имени'
    const phoneError = 'Не менее 5 и не более 11 цифр'
  
    const validate = (list) => {
        let success = true;
        list.forEach((input) => {
            
            if (input.name == "user_phone") {  
                if (input.value.length <= 5 && input.value.length <= 11) {
                    success = false;
                }
            }
  
            if (input.name == "user_name") {
                if (input.value.length <= 2) {
                    success = false
                }
            }
      })
      
        return success;
    };  

    const requiredEmail = () => {
        formElements.forEach((input) => {
            if (input.name == "user_email") {
              input.setAttribute("required",true);
            } 
            });
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
        statusBlock.style.color = 'white'
  
        formData.forEach((value, key) => {
            formBody[key] = value;
        });
  
        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);
  
            if (elem.type === "block") {
                console.log(elem);
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value;
        }
      });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.style.color = 'white'
                    statusBlock.textContent = successText;

                    if (formId == 'form1' || formId == 'form2') {
                    setTimeout(() => {
                        statusBlock.textContent = ''
                    }, 3000)
                    }
                    if (formId == 'form3') {
                        statusBlock.style.color = 'white'
                        setTimeout(() => {
                            statusBlock.textContent = ''
                            document.querySelector('.popup').style.display = 'none'
                        }, 3000)
                    }
    
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
        requiredEmail()
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitForm();
        });

        formElements.forEach((formInput) => {
            formInput.addEventListener('blur', (e) => {
                if (formInput.name == 'user_name') {

                    if (e.target.value.length <= 2) {
                        formInput.style.border = '2px solid red'
                        statusBlock.textContent = nameError
                        statusBlock.style.color = 'red'
                        form.append(statusBlock)

                        setTimeout(() => {
                            formInput.style.border = 'none'
                            statusBlock.textContent = ''
                        }, 3000)
                    }
                }
                if (formInput.name == 'user_phone') {
                    if (e.target.value.length <= 5 && e.target.value.length <= 11) {
                        formInput.style.border = '2px solid red'
                        statusBlock.textContent = phoneError
                        statusBlock.style.color = 'red'
                        form.append(statusBlock)

                        setTimeout(() => {
                            formInput.style.border = 'none'
                            statusBlock.textContent = ''
                        }, 3000)
                    }
                }
            })
        })
    } catch (error) {
        console.log(error.message);
    }
  };
  
  export default sendForm;