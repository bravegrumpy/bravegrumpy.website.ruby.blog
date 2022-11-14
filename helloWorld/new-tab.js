window.alert("js is associated with this page")
console.log("js is running")
function handleSubmit(event) {
    event.preventDefault();

    console.log("function started ")

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries())

    console.log("grabbing information");
    console.log({ value });
    console.log("information grabbed")
}

const form = document.getElementById('dataInput')
form.addEventListener('submit', handleSubmit);
console.log("a function was called")