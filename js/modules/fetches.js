function fetches(){
    fetch('http://localhost:3000/offerss')
    .then(data => data.json())
    .then(res => console.log(res));
}


export default fetches;