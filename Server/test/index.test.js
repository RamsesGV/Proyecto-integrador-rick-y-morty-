const app = require('../src/app')
const session = require('supertest')
const request = session(app)

const character = { 
            id:923,
            name:'ram',
            species:'human',
            gender:'male',
            status:'alive',
            origin:{ 
                name:'Earth (c-137'
            },
            image:'image.jpg'
        }


describe('test de rutas', () => { 
    describe('GET /rickandmorty/character/:id',() => { 
        it('response con status: 200', async () =>  {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200)
        })
        it("responde un objeto con las propiedas: 'id', 'name' 'species', 'gender' ,'status', origin' e 'image'", async () => { 
            const response  = await request.get('/rickandmorty/character/1')
            for(const prop in character)
            expect(response.body).toHaveProperty(prop)
        })
        it('Si hay un error responde con status 500', async () => { 
            const response = await request.get('/rickandmorty/character/1asdas')
            expect(response.statusCode).toBe(500)
        })
    })


describe('GET /rickandmorty/login', () => { 
    it('Responde con un objeto con la propiedad access en true si la iformacion del usuario es valida' , async() => { 
        const response = await request.get('/rickandmorty/login?email=ramses@gmail.com&password=ramses123')
        const access = { access:true}
        expect(response.body).toEqual(access)

    })

    it('Responde con un objeto con la propiedad access en false si la iformacion del usuario np es valida', async () => { 
        const response = await request.get('/rickandmorty/login?email=rames@gmail.com&password=ramses13')
        const access = { access:false}
        expect(response.body).toEqual(access)
    })

})

describe('POST /rickandmorty/fav', () => { 
    it('Debe guardar el persona en favoritos', async () => { 
    const response = await request.post('/rickandmorty/fav').send(character)
    expect(response.body).toContainEqual(character)
    })

    it('Debe agregar personajes a favoritos sin Eliminar los que ya estan', async() => { 
        character.id = 1920
        character.name = 'FT 37a'
        const response = await request.post('/rickandmorty/fav').
        send(character)
        expect(response.body.length).toBe(2)
    })
})

describe('DELETE /rickandmorty/fav/:id', () => { 
    it('Si el id solicitado no existe, deberia retornar un arreglo con todos los favoritos', async () => { 
        const response = await request.delete('/rickandmorty/fav/2lkjlj') 
        expect(response.body.length).toBe(2)


        
    })
    it('Si el id enviado existe, deberia eliminarlo de favoritos', async () => {
        const response = await request.delete('/rickandmorty/fav/2')
        expect(response.body.length).toBe(1)
    })

})
})

