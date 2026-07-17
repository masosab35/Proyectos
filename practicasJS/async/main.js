let saludo= () => {
    return new Promise((resolve, reject) => {
    if (false) {
        reject(new Error("Ocurrio un error"));
    }
    setTimeout(() => {
        dato= "Hola mundo";
        resolve(dato);
    }, 4000);
    })

}

/*saludo().then((dato) => {
    console.log(dato);
})
*/
async function saludoAsync() {
    try {
        let dato = await saludo();
        console.log(dato);
    } catch (error) {
        console.log(error.message);
    }
}

saludoAsync();