// console.log('Request data...');

// setTimeout(()=>{
//     console.log('preparing data...');

//     const backenData = {
//         server:'aws',
//         port:2000,
//         status:'working'
//     }

//     setTimeout(()=>{
//         backenData.modified = true
//         console.log('Data received0', backenData);
//     },2000)
// },2000)

// const p = new Promise((resolve, reject) => {                                                                                                                                                                             
//     setTimeout(() => {
//         console.log('preparing data...');
//         const backenData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backenData)
//     }, 2000)
// })
// p.then((data) => {
    // console.log('promise resolved', data);
    // return  new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         data.modified = true
    //         resolve(data)
            // console.log('Data received', backenData);
    //     },2000)
    // })

    // .then(clientData =>{
        // console.log('Data received', clientData);
    // })
    // p2.then(clientData =>{
    //     console.log('Data received', clientData);

    // })
// })