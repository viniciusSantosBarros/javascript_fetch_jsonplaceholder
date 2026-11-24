/* Função Assíncrona */
async function consultaDados(){
    
    /* Tratamento de erros */
    try {
        
        /* Requisição HTTP ao servidor */
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        
        /* Verificação da resposta HTTP */
        console.log(response.ok)
        console.log(response.status)

        if (!response.ok){
            throw new Error ("Erro: " + response.status)
        }

        /* Leitura e interpretação do JSON */
        const list = await response.json()

        /* Map */
        const mapearUsuarios = list.map(usuario => {
            return {
                id: usuario.id, 
                name: usuario.name,
                username: usuario.username,
                email: usuario.email
            }
        })

        console.log(mapearUsuarios)

        /* Filter */
        const filtrarUsuarios = mapearUsuarios.filter(usuarioFiltrado => {
            return usuarioFiltrado.id >= 5
        })

        console.log(filtrarUsuarios)

        /* Find */
        const localizarUsuario = filtrarUsuarios.find(encontrarUsuario => {
            return encontrarUsuario.username === "Elwyn.Skiles"
        })

        if (localizarUsuario){
            console.log(localizarUsuario)
        } else {
            console.log("Usuário não localizado")
        }

    } catch (error) {
        console.log(error.message)
    }
}