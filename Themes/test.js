let getData = async function(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>data.json())

    console.log(response);
}

getData()

