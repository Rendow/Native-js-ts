import {createGreetingMessage, ManType} from "./05-01";


let people: Array<ManType> = []

beforeEach( () => {
people =[
    { name: 'Andrey Ivanov', hair: 33},
    { name: 'Alexander Petrov', hair: 24},
    { name: 'Dmitry Sidorov', hair: 18},
]
})

test('should get array of greeting messages', () =>{
    const message = createGreetingMessage(people)

    expect(message.length).toBe(3);
    expect(message[0]).toBe("Hello Andrey Welcome abort");
    expect(message[1]).toBe("Hello Alexander Welcome abort");
    expect(message[2]).toBe("Hello Dmitry Welcome abort");
})