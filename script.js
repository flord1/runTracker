let entries = [];
const goal = 25;
const entriesWrapper = document.querySelector('#enrtries');
document.querySelector('#target').innerText = goal

function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry.toFixed(1))
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem);
}

function reducer(total, currentValue) {
    return total + currentValue
}

function calTotal() {
     const totalValue = entries.reduce(reducer).toFixed(1);
     document.getElementById("total").innerText = totalValue;
     document.getElementById("progressTotal").innerText = totalValue;
}

function calcAverage() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById("average").innerText = average;
}

function callHigh() {
    const high = Math.max(...entries);
    document.getElementById("high").innerText = high;
}

function handleSubmit(event) {
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    if(!entry) return;
    document.querySelector('form').reset();
    entries.push(entry);
    addNewEntry(entry);
    calTotal();
    calcAverage();
    callHigh();
}
const form = document.querySelector('form').addEventListener('submit', handleSubmit)