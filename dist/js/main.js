/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('28 january 2022')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100)\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    formId: 'form1',\n    someElem: [\n        {\n            type: 'block',\n            id: 'total'\n        }\n    ]\n})\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 150) => {\n    const calcBlock = document.querySelector('.calc-block')\n    const calcType = document.querySelector('.calc-type')\n    const calcSquare = document.querySelector('.calc-square')\n    const calcCount = document.querySelector('.calc-count')\n    const calcDay = document.querySelector('.calc-day')\n    const total = document.querySelector('#total')\n\n    const countCalc = () => {\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\n        const calcSquareValue = calcSquare.value\n\n        let totalValue = 0\n        let calcCountValue = 1\n        let calcDayValue = 1\n\n        if (calcCount.value > 1) {\n            calcCountValue += +calcCount.value / 10\n        }\n\n        if (calcDay.value && calcDay.value < 5) {\n            calcDayValue = 2\n        } else if (calcDay.value && calcDay.value < 10) {\n            calcDayValue = 1.5\n        }\n\n        if (calcType.value && calcSquare.value) {\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\n        } else {\n            totalValue = 0\n        }\n\n        total.textContent = Math.round(totalValue)\n    }\n\n    calcBlock.addEventListener('input', (e) => {\n\n        if (e.target === calcType || e.target === calcSquare ||\n            e.target === calcCount || e.target === calcDay) {\n            countCalc()\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n    let start = performance.now();\n  \n    requestAnimationFrame(function animate(time) {\n      // timeFraction изменяется от 0 до 1\n      let timeFraction = (time - start) / duration;\n      if (timeFraction > 1) timeFraction = 1;\n  \n      // вычисление текущего состояния анимации\n      let progress = timing(timeFraction);\n  \n      draw(progress); // отрисовать её\n  \n      if (timeFraction < 1) {\n        requestAnimationFrame(animate);\n      }\n    });\n  };\n  \n  \n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menu = document.querySelector('menu')\n    const menuItems = menu.querySelectorAll('ul>li>a')\n    const container = document.querySelector(\".container\");\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu')\n    }\n\n    container.addEventListener('click', (e) => {\n        if (e.target.closest('.menu')) {\n            handleMenu()\n        }\n    })\n\n    menu.addEventListener('click', (e) => {\n        if (e.target.classList.contains('close-btn') || e.target.closest('ul>li>a')) {\n            handleMenu()\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst modal = () => {\n    const buttons = document.querySelectorAll('.popup-btn')\n    const modal = document.querySelector('.popup')\n\n    let screenWidth = screen.width\n\n    window.addEventListener('resize', () => {\n        screenWidth = screen.width\n    })\n\n    buttons.forEach((btn) => {\n        btn.addEventListener('click', () => {\n            if (screenWidth >= 768) {\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                    duration: 300,\n                    timing(timeFraction) {\n                      return timeFraction;\n                    },\n                    draw(progress) {\n                        modal.style.opacity = progress\n                    },\n                  });\n            }\n            modal.style.display = 'block'   \n        })\n    })\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            modal.style.display = 'none'\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\n\n    const form = document.getElementById(formId);\n    const formElements = form.querySelectorAll(\"input\");\n\n    const statusBlock = document.createElement(\"div\");\n    const loadText = \"Загрузка...\";\n    const errorText = \"Ошибка...\";\n    const successText = \"Спасибо! Наш менеджер с вами свяжется\";\n  \n    const validate = (list) => {\n        let success = true;\n        list.forEach((input) => {\n            console.log(input.name);\n          \n            if (input.name == \"user_phone\") {\n                if (/[^\\+\\d\\(\\)\\-]/g.test(input.value.trim())) {\n                    success = false;\n                }\n            }\n  \n            if (input.name == \"user_name\") {\n                if (/[^а-я\\-\\s]/gi.test(input.value.trim())) {\n                    success = false;\n                }\n            }\n    \n            if (input.name == \"user_message\") {\n                if (/[^а-я\\-\\!\\.\\,\\?\\:\\;\\(\\)\\\"\\s]/gi.test(input.value.trim())) {\n                    success = false;\n                }\n            }\n      });\n  \n        return success;\n    };\n  \n    const sendData = (data) => {\n        return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n            method: \"POST\",\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\",\n            },\n        }).then((res) => res.json);\n    };\n  \n    const submitForm = () => {\n        const formData = new FormData(form);\n        const formBody = {};\n    \n        statusBlock.textContent = loadText;\n        form.append(statusBlock);\n  \n        formData.forEach((value, key) => {\n            formBody[key] = value;\n        });\n  \n        someElem.forEach((elem) => {\n            const element = document.getElementById(elem.id);\n  \n            if (elem.type === \"block\") {\n                formBody[elem.id] = element.textContent;\n            } else if (elem.type === \"input\") {\n                formBody[elem.id] = element.value;\n        }\n      });\n  \n        if (validate(formElements)) {\n            sendData(formBody).then(data => {\n                statusBlock.textContent = successText;\n  \n                formElements.forEach((input) => {\n                    input.value = \"\";\n                });\n            })\n            .catch((error) => {\n                statusBlock.textContent = errorText;\n            });\n        } else {\n            alert(\"Данные не валидны!\");\n        }\n    };\n  \n    try {\n        if (!form) {\n            throw new Error(\"Верните форму на место!\");\n        }\n  \n        form.addEventListener(\"submit\", (e) => {\n            e.preventDefault();\n            submitForm();\n        });\n    } catch (error) {\n        console.log(error.message);\n    }\n  };\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const sliderBlock = document.querySelector('.portfolio-content');\n    const slides = document.querySelectorAll('.portfolio-item');\n    const portfolioDots = document.querySelector('.portfolio-dots');\n    \n    const timeInterval = 2000;\n    let currentSlide = 0;\n    let countOfDots = 0;\n    let interval;\n    let newDot;\n    let dots;\n  \n    const prevSlide = (elems, index, strSlide) => {\n      elems[index].classList.remove(strSlide);\n    };\n  \n    const nextSlide = (elems, index, strSlide) => {\n      elems[index].classList.add(strSlide);\n    };\n  \n    const addDots = () => {\n      if (countOfDots < slides.length) {\n        newDot = document.createElement('li');\n        newDot.classList.add('dot');\n        portfolioDots.append(newDot);\n        countOfDots++;\n        addDots();\n      }\n    };\n  \n    const autoSlide = () => {\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\n      prevSlide(dots, currentSlide, 'dot-active');\n      currentSlide++;\n      if (currentSlide >= slides.length) {\n        currentSlide = 0;\n      }\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\n      nextSlide(dots, currentSlide, 'dot-active');\n    };\n  \n    const startSlide = (timer = 1500) => {\n      interval = setInterval(autoSlide, timer);\n    };\n  \n    const stopSlide = () => {\n      clearInterval(interval);\n    };\n  \n    addDots();\n    dots = document.querySelectorAll('.dot');\n    nextSlide(dots, currentSlide, 'dot-active');\n  \n    sliderBlock.addEventListener('click', (e) => {\n      e.preventDefault();\n  \n      if (!e.target.matches('.dot, .portfolio-btn')) {\n        return;\n      }\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\n      prevSlide(dots, currentSlide, 'dot-active');\n  \n      if (e.target.matches('#arrow-right')) {\n        currentSlide++;\n      } else if (e.target.matches('#arrow-left')) {\n        currentSlide--;\n      } else if (e.target.classList.contains('dot')) {\n        dots.forEach((dot, index) => {\n          if (e.target === dot) {\n            currentSlide = index;\n          }\n        });\n      }\n  \n        if (currentSlide >= slides.length) {\n        currentSlide = 0;\n        }\n  \n      if (currentSlide < 0) {\n        currentSlide = slides.length - 1;\n      }\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\n      nextSlide(dots, currentSlide, 'dot-active');\n    });\n  \n    sliderBlock.addEventListener('mouseenter', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide();\n        }\n      },\n      true);\n\n    sliderBlock.addEventListener(\"mouseleave\", (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            startSlide(timeInterval);\n        }\n      },\n      true);\n  \n    startSlide(timeInterval);\n  };\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header');\n    const tabs = document.querySelectorAll('.service-header-tab');\n    const tabContent = document.querySelectorAll('.service-tab');\n  \n    tabPanel.addEventListener('click', (e) => {\n      if (e.target.closest('.service-header-tab')) {\n        const tabBtn = e.target.closest('.service-header-tab');\n  \n        tabs.forEach((tab, index) => {\n          if (tab === tabBtn) {\n            tab.classList.add('active');\n            tabContent[index].classList.remove('d-none');\n          } else {\n            tab.classList.remove(\"active\");\n            tabContent[index].classList.add('d-none');\n          }\n        });\n      }\n    });\n  };\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours')\n    const timerMinutes = document.getElementById('timer-minutes')\n    const timerSeconds = document.getElementById('timer-seconds')\n\n    let idInterval;\n    \n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow)/1000\n        let hours = Math.floor(timeRemaining / 60 / 60)\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        timerHours.textContent = hours\n        timerMinutes.textContent = minutes\n        timerSeconds.textContent = seconds\n\n        return { hours, minutes, seconds, timeRemaining\n        }\n    }\n\n    // getTimeRemaining('22 january 2022')\n\n    const addZero = (value) => {\n        if (value < 10) {\n            value = '0' + value\n        }\n        return value\n    }\n\n    const updateClock = () => {\n        const getTime = getTimeRemaining()\n        timerHours.textContent = addZero(getTime.hours)\n        timerMinutes.textContent = addZero(getTime.minutes)\n        timerSeconds.textContent = addZero(getTime.seconds)\n\n        if (getTime.timeRemaining < 0) {\n            clearInterval(idInterval)\n            timerHours.textContent = '00'\n            timerMinutes.textContent = '00'\n            timerSeconds.textContent = '00'\n        }\n    }\n\n    updateClock()\n    idInterval = setInterval(updateClock, 1000)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\n    const calcSquare = document.querySelector('.calc-square')\n    const calcCount = document.querySelector('.calc-count')\n    const calcDay = document.querySelector('.calc-day')\n    const calcArray = [calcSquare, calcCount, calcDay]\n    \n    const formNames = document.querySelectorAll('.form-name')\n    const topForms = document.querySelector('.top-form')\n    const arrayNameForm = []\n\n    const formEmails = document.querySelectorAll('.form-email')\n    const formPhones = document.querySelectorAll('.form-phone')\n    const formMess = document.querySelector('.mess')\n    \n    formNames.forEach((formName) => {\n        arrayNameForm.push(formName, topForms)\n        arrayNameForm.forEach((form) => {\n            form.addEventListener('input', (e) => {\n                e.target.value = e.target.value.replace(/[^а-яА-Я\\s\\-]/gi, \"\")\n            })\n        })\n    })\n    \n    formEmails.forEach((formEmail) => {\n        formEmail.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^\\w\\-\\.\\!\\~\\*\\'\\\"\\@]+/gi, \"\")\n        })\n    })\n\n    formPhones.forEach((formPhone) => {\n        formPhone.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/, \"\")\n        })\n    })\n\n    formMess.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^а-яА-я\\-\\ ]/, \"\")\n    })\n    \n    calcArray.forEach((input) => {\n        input.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/\\D+/, \"\")\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;