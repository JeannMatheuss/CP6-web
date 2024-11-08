// src/utils/util.js

export function addToLocalStorageList(listName, movie) {
    const existingList = JSON.parse(localStorage.getItem(listName)) || [];
    localStorage.setItem(listName, JSON.stringify([...existingList, movie]));
    }
    
    export function getLocalStorageList(listName) {
        return JSON.parse(localStorage.getItem(listName)) || [];
    }  