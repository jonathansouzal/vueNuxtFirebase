import fireApp from '@/plugins/firebase'

export const state = {
    user: null
}

export const mutations = {

}

export const actions = {
    fireTest () {
        const payload = {
           one: 'Apple',
           two: 'Oranges' 
        }
        fireApp.database().ref('testdb').push(payload)
        .then(() => {
            console.log('Sucesso')
        })
        .catch(error => {
            console.log("Erro", error)
        })
    }
}

export const getters = {

}