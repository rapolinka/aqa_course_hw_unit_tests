"use strict";

const firstValue = 6;

const firstValueToString = String(firstValue);
const twiceValueToString = firstValueToString + firstValueToString;
const thirdValueToString = firstValueToString + firstValueToString + firstValueToString;

console.log(Number(firstValueToString) + Number(twiceValueToString) + Number(thirdValueToString));

