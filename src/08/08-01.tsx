let user = {
    name:'oleg',
    hair:13,
    address: {
        city: {
            title: 'minsk'
        }
    }
}

//аналогичные записи
user.address.city.title // = 'minsk'
user['address']['city']['title'] // = 'minsk'


let usersUssual = ['oleg','oleg2','oleg3','oleg4']
//ассоциативный массив
let usersObj = {
    '0':'oleg',
    '1':'oleg1',
    '2':'oleg2',
    '3':'oleg3',
}

//usersObj[0] = 'oleg'
//usersObj['0'] = 'oleg'

usersObj['hello'] = 'gooood'

// теперь массив выглядит так: {0: "oleg", 1: "oleg1", 2: "oleg2", 3: "oleg3", hello: "gooood"}

Object.keys(usersObj) //выдаст массив цифр обьекта
Object.values(usersObj) //выдаст массив имен обьекта


//ассоциативный массив
 const users = {
    '0':{id:111,name: 'name1'},
    '123':{id:211,name: 'name2'},
    '2213':{id:131,name: 'name3'},
    '42':{id:141,name: 'name4'},
}

users[123] //выдаст второй обьект. В отличие от, например, файнд по ид, обьект не ищется, а выдается сразу

//поиск по ид в обычном массиве
 const usersDef = [
    {id:111, name: 'name1'},
     {id:211,name: 'name2'},
    {id:131,name: 'name3'},
     {id:141,name: 'name4'},
]

usersDef.find(u => u.id === 1)

//добавление элементов
let user2 = {id:1231, name: 'oll'}

users[user2.id] = user2 //добавили в ассоц. массив

let usersDefCopy = [...usersDef,user2] //добавили в обычн. массив - снимаем копию со старого массива и добавляем новый обьект

//удаление

delete users[user2.id]

let usersDef = usersDef.filter( u => u.id !== user2.id) // фильтруем обьекты, ид которых не равно той, которую нужно удалить



