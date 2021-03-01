


type UsersType = {
    [key:string]: { id: number, name: string}
}

let users: UsersType



beforeEach(() => {

    users = {
        '0':{id:111,name: 'name1'},
        '123':{id:211,name: 'name2'},
        '2213':{id:131,name: 'name3'},
        '42':{id:141,name: 'name4'},
    }
})

test(' delete', () => {
    delete users['42']

    expect(users['42']).toBeUndefined()
})

test('  rename', () => {
    users['42'].name = 'georg'

    expect(users['42']).toEqual({id:141, name:'georg' })
})