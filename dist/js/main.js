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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('20 january 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menu = document.querySelector('menu')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n    const container = document.querySelector(\".container\");\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    container.addEventListener('click', (e) => {\r\n        if (e.target.closest('.menu')) {\r\n            handleMenu()\r\n        }\r\n    })\r\n\r\n    menu.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('close-btn') || e.target.closest('ul>li>a')) {\r\n            handleMenu()\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const modal = document.querySelector('.popup')\r\n\r\n    let screenWidth = screen.width\r\n    \r\n    let count = 0;\r\n    let idAnimation;\r\n\r\n    window.addEventListener('resize', () => {\r\n        screenWidth = screen.width\r\n    })\r\n\r\n    const animation = () => {\r\n        if (screenWidth >= 768) {\r\n            count++\r\n            idAnimation = requestAnimationFrame(animation)\r\n            if (count * 0.06 <= 1) {\r\n                modal.style.opacity = count * 0.06\r\n            } else {\r\n                cancelAnimationFrame(idAnimation)\r\n                count = 0\r\n            }\r\n        } else {\r\n            count = 0\r\n        }\r\n    }\r\n\r\n    buttons.forEach((btn) => {\r\n        btn.addEventListener('click', () => {\r\n            animation()\r\n            modal.style.display = 'block'\r\n        })\r\n    })\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.portfolio-content');\r\n    const slides = document.querySelectorAll('.portfolio-item');\r\n    const portfolioDots = document.querySelector('.portfolio-dots');\r\n    \r\n    const timeInterval = 2000;\r\n    let currentSlide = 0;\r\n    let countOfDots = 0;\r\n    let interval;\r\n    let newDot;\r\n    let dots;\r\n  \r\n    const prevSlide = (elems, index, strSlide) => {\r\n      elems[index].classList.remove(strSlide);\r\n    };\r\n  \r\n    const nextSlide = (elems, index, strSlide) => {\r\n      elems[index].classList.add(strSlide);\r\n    };\r\n  \r\n    const addDots = () => {\r\n      if (countOfDots < slides.length) {\r\n        newDot = document.createElement('li');\r\n        newDot.classList.add('dot');\r\n        portfolioDots.append(newDot);\r\n        countOfDots++;\r\n        addDots();\r\n      }\r\n    };\r\n  \r\n    const autoSlide = () => {\r\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n      prevSlide(dots, currentSlide, 'dot-active');\r\n      currentSlide++;\r\n      if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n      }\r\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n      nextSlide(dots, currentSlide, 'dot-active');\r\n    };\r\n  \r\n    const startSlide = (timer = 1500) => {\r\n      interval = setInterval(autoSlide, timer);\r\n    };\r\n  \r\n    const stopSlide = () => {\r\n      clearInterval(interval);\r\n    };\r\n  \r\n    addDots();\r\n    dots = document.querySelectorAll('.dot');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n  \r\n    sliderBlock.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n  \r\n      if (!e.target.matches('.dot, .portfolio-btn')) {\r\n        return;\r\n      }\r\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n      prevSlide(dots, currentSlide, 'dot-active');\r\n  \r\n      if (e.target.matches('#arrow-right')) {\r\n        currentSlide++;\r\n      } else if (e.target.matches('#arrow-left')) {\r\n        currentSlide--;\r\n      } else if (e.target.classList.contains('dot')) {\r\n        dots.forEach((dot, index) => {\r\n          if (e.target === dot) {\r\n            currentSlide = index;\r\n          }\r\n        });\r\n      }\r\n  \r\n        if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n        }\r\n  \r\n      if (currentSlide < 0) {\r\n        currentSlide = slides.length - 1;\r\n      }\r\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n      nextSlide(dots, currentSlide, 'dot-active');\r\n    });\r\n  \r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n      },\r\n      true);\r\n\r\n    sliderBlock.addEventListener(\"mouseleave\", (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval);\r\n        }\r\n      },\r\n      true);\r\n  \r\n    startSlide(timeInterval);\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n  \r\n    tabPanel.addEventListener('click', (e) => {\r\n      if (e.target.closest('.service-header-tab')) {\r\n        const tabBtn = e.target.closest('.service-header-tab');\r\n  \r\n        tabs.forEach((tab, index) => {\r\n          if (tab === tabBtn) {\r\n            tab.classList.add('active');\r\n            tabContent[index].classList.remove('d-none');\r\n          } else {\r\n            tab.classList.remove(\"active\");\r\n            tabContent[index].classList.add('d-none');\r\n          }\r\n        });\r\n      }\r\n    });\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n    let idInterval;\r\n    \r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow)/1000\r\n        let hours = Math.floor(timeRemaining / 60 / 60)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        timerHours.textContent = hours\r\n        timerMinutes.textContent = minutes\r\n        timerSeconds.textContent = seconds\r\n\r\n        return { hours, minutes, seconds, timeRemaining\r\n        }\r\n    }\r\n\r\n    // getTimeRemaining('22 january 2022')\r\n\r\n    const addZero = (value) => {\r\n        if (value < 10) {\r\n            value = '0' + value\r\n        }\r\n        return value\r\n    }\r\n\r\n    const updateClock = () => {\r\n        const getTime = getTimeRemaining()\r\n        timerHours.textContent = addZero(getTime.hours)\r\n        timerMinutes.textContent = addZero(getTime.minutes)\r\n        timerSeconds.textContent = addZero(getTime.seconds)\r\n\r\n        if (getTime.timeRemaining < 0) {\r\n            clearInterval(idInterval)\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n        }\r\n    }\r\n\r\n    updateClock()\r\n    idInterval = setInterval(updateClock, 1000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n    const calcArray = [calcSquare, calcCount, calcDay]\r\n    \r\n    const formNames = document.querySelectorAll('.form-name')\r\n    const topForms = document.querySelector('.top-form')\r\n    const arrayNameForm = []\r\n\r\n    const formEmails = document.querySelectorAll('.form-email')\r\n    const formPhones = document.querySelectorAll('.form-phone')\r\n    const formMess = document.querySelector('.mess')\r\n    \r\n    formNames.forEach((formName) => {\r\n        arrayNameForm.push(formName, topForms)\r\n        arrayNameForm.forEach((form) => {\r\n            form.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^а-яА-Я\\s\\-]/gi, \"\")\r\n            })\r\n        })\r\n    })\r\n    \r\n    formEmails.forEach((formEmail) => {\r\n        console.log(formEmail);\r\n        formEmail.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^\\w\\-\\.\\!\\~\\*\\'\\\"\\@]+/gi, \"\")\r\n        })\r\n    })\r\n\r\n    formPhones.forEach((formPhone) => {\r\n        formPhone.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/, \"\")\r\n        })\r\n    })\r\n\r\n    formMess.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-я\\-\\ ]/, \"\")\r\n    })\r\n    \r\n    calcArray.forEach((input) => {\r\n        input.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, \"\")\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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