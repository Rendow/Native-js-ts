import {makeHairStyle, moveUser, UserType, UserWithLaptop} from "./10-01";


test('test hair',() => {
    let user:UserType = {
        name: 'name',
        hair:32,
        address:{
            city:'minsk'
        }
    }

    const cut = makeHairStyle(user,2)

    expect(user.hair).toBe(32)
    expect(cut.hair).toBe(16)

})
test('change address',() => {
    let user:UserWithLaptop = {
        name: 'name',
        hair:32,
        address:{
            city:'minsk',
            house:12
        },
        laptop:{
            title:'asus'
        }
    }

    const movedUser = moveUser(user,'kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)

    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('kiev')

})
