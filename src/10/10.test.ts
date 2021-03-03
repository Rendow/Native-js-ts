
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
