
export type UserType = {
    name:string
    hair:number
    address:{title:string}
}

function makeHairStyle(u:UserType, power:number){
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //порядок имеет значение, если снять копию потом, она перезатрет пред-щие записи
        //copy.hair =u.hair / power


    return copy
}




test('test',() => {
    let user = {
        name: 'name',
        hair:32,
        address:{
            title:'minsk'
        }
    }

    const cut = makeHairStyle(user,2)

    user = cut

    expect(user.hair).toBe(32)
    expect(cut.hair).toBe(16)
    expect(cut.address).toBe(user.address)


})

test('change address',() => {
    let user = {
        name: 'name',
        hair:32,
        address:{
            title:'minsk'
        }
    }

    const cut = moveUser(user,'kiev')

    user.address.title = 'kiev'

    expect(user.hair).toBe(32)
    expect(cut.hair).toBe(16)
    expect(cut.address).toBe(user.address)


})
