const p0 = document.createElement('p')
let valDiv = document.getElementById("JSValid")
let p0String = "js is associated with this page";
p0String = p0String + "js is running"
function handleSubmit(event) {
    event.preventDefault();
    const p1 = document.createElement('p');
    let outString = "function started\n";

    const data = new FormData(event.target);
    outString = outString + toString(data);

    let value = Object.fromEntries(data.entries()); //TODO: Figure out how to actually get data from a form.
    outString = outString + toString(value);
    outString = outString + "grabbing information";
    outString = outString + toString({value});
    outString = outString + "information grabbed";

    let outDiv = document.getElementById("output");
    p1.innerHTML = outString;
    outDiv.appendChild(p1);
};

const formA = document.getElementById('dataInput');
formA.addEventListener('submit', handleSubmit);
p0String = p0String + "a function was called";
p0.innerHTML = p0String;
valDiv.appendChild(p0)