

function increaseAge(user:UserType){
    user.age++
}
type UserType = {
    name:string
    age:number
    address:{title:string}
}
test('test',() => {
    let user = {
        name: 'name',
        age:32,
        address:{
            title:'minsk'
        }
    }
    let user2:UserType={
        name:'sdasd',
        age:31,
        address:user.address
    }
    user2.address.title = 'sochy'
    //в юзер 2 находится ссылка на адрес
    //так как в обьекте используется тайтл из юзера, меняя тайтл с помощью юзера2, меняем тайтл и в юзере

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('sochy')

})
//напрямую изменить исходную переменную нельзя, но другими способами можно(через точку, методом массива)

test('test 2',() => {
    let user = [{
        name: 'name',
        age: 32
    },
        {
            name: 'name',
            age: 32
        }]

    let admin = user
    admin.push({name: 'dsd12', age: 21})


    expect(user[2]).toEqual({name: 'dsd12', age: 21})
})


test('test 3',() => {
    let userCount = 100
    let adminCount = userCount

    adminCount = 101 //  при этом userCount = 100
})



test('test 4',() => {
    const  address={
        title:'minsk'
    }
    let user = {
        name: 'name',
        age:32,
        address:address
    }
    let user2:UserType={
        name:'sdasd',
        age:31,
        address:address
    }
    const users = [user,user2,{name:'raw',age:4, address: address}]

    const admins = [user,user2]
    admins[0].name ='vanya'
    //теперь в юзерс такое же имя, так как мы используем ссылку на обьект

    expect(users[0].name).toBe('vanya')


})

test('test sort',() => {

    const letters = ['c','a','z','e']
    letters.sort()
    //метод сорт изменил первоначальный обьект
    expect(letters).toEqual(['a','c','e','z'])
})

function passport(letters:any){
    const copy = [...letters].sort()
}

test('test sort 2',() => {

    const letters = ['c','a','z','e']
    passport(letters)
    //первончальный массив не измениляс, так как мы работали с копией
    expect(letters).toEqual(['c','a','z','e'])
})


test('test sort 4',() => {

    const letters = ['c','a','z','e']
    passport(letters)
    expect(letters).toEqual(['c','a','z','e'])
})
