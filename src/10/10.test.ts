import {
    addNewBooks,
    deleteBook,
    makeHairStyle,
    moveUser, updateBook,
    updateCompanyTitle,
    UserType,
    UserWithBooks,
    UserWithCompanies,
    UserWithLaptop
} from "./10-01";


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

test('change company',() => {
    let user:UserWithCompanies = {
        name: 'name',
        hair:32,
        address:{
            city:'minsk',
            house:12
        },
        laptop:{
            title:'asus'
        },
        companies:[{id:1, title:'Епам'},{id:2, title: 'it-incubator'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithCompanies


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)

    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')

})
test('add new book',() => {
    let user:UserWithBooks = {
        name: 'name',
        hair:32,
        address:{
            city:'minsk',
            house:12
        },
        laptop:{
            title:'asus'
        },
        books: ['css','js','react']
    }

    const userCopy = addNewBooks(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)

    expect(user.books).not.toBe(userCopy.books)
    expect(user.books.length).toBe(3)

})

test('update book',() => {
    let user:UserWithBooks = {
        name: 'name',
        hair:32,
        address:{
            city:'minsk',
            house:12
        },
        laptop:{
            title:'asus'
        },
        books: ['css','js','react']
    }

    const userCopy = updateBook(user,'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[1]).toBe('ts')

    expect(user.books).not.toBe(userCopy.books)
    expect(user.books.length).toBe(3)

})

test('delete book',() => {
    let user:UserWithBooks = {
        name: 'name',
        hair:32,
        address:{
            city:'minsk',
            house:12
        },
        laptop:{
            title:'asus'
        },
        books: ['css','js','react']
    }

    const userCopy = deleteBook(user,'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)

    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(2)

})