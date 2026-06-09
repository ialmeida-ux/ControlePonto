
const URL = "http://localhost:3001/justificativa"


const criarJustificativa = async (idUser, dataEntrada, dataSaida, motivo, token) => {
    try {

        const resp = await fetch(URL,{ method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            body:JSON.stringify({
                "idUser": idUser,
                "dataEntrada": dataEntrada.toISOString(),
                "dataSaida": dataSaida.toISOString(),
                "motivo": motivo,
                "status": "AGUARDANDO"
            }) 
        })

        return true
    } catch (e) {
        return false
    }
}

export { criarJustificativa}