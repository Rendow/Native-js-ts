export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrey Ivanov', hair: 33},
    {name: 'Alexander Petrov', hair: 24},
    {name: 'Dmitry Sidorov', hair: 18},
]

function dimychTransformator(man: ManType) {
    return {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
}

const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Andrey', lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', lastName: 'Petrov'
    }

]


//на месте вызова функции появляется то, что ретурнит функции
// devs1 = devs2 = devs3 = devs4

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(dimychTransformator)

const devs4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))

//результат работы map всегда массив

const message = people.map(man => `Hello ${man.name.split(' ')[0]} Welcome abort`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return  people.map(man => `Hello ${man.name.split(' ')[0]} Welcome abort`)

}