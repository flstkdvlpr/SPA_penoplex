function fetches(){
    fetch('http://localhost:3000/offers')
    .then(data => data.json())
    .then(res => console.log(res));
}


export default fetches;