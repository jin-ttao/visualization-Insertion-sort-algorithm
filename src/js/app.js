import { sortArray } from "./sorting.js";

const inputNumbers = document.querySelector("#userInputNumbers");
const inputNumbersButton = document.querySelector("#userInputNumbersButton");
const testButton = document.getElementById("testButton");
const graphBoxs = document.querySelectorAll(".graphBox");

let numbersArr = [];

const saveNumbers = function () {
    numbersArr = inputNumbers.value.split(',').map((num) => {
        return parseInt(num.trim(), 10);
    });

    const isAllNumber = numbersArr.every((num) => {
        return typeof num === 'number' && !isNaN(num);
    });

    if (isAllNumber) {
        renderNumberGraph(numbersArr);
        sortArray(numbersArr);
    } else {
        inputNumbers.value = null;
    }
};

const renderNumberGraph = function (array) {
    const main = document.querySelector("main");
    array.forEach((number) => {
        const graphNew = document.createElement("div");
        graphNew.classList.add("graph", "colorDefault");
        graphNew.style.height = number + "px";

        const graphBox = document.createElement("div");
        graphBox.classList.add("graphBox");

        graphBox.appendChild(graphNew);
        main.appendChild(graphBox);
    });
};

inputNumbersButton.addEventListener("click", saveNumbers);
