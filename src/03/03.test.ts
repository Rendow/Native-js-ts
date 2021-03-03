import {StudentType} from "../02/02";
import {addSkill, doesStudentLive, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'olga',
        hair: 32,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'html'
            },
            {
                id: 2,
                title: 'css'
            },
            {
                id: 3,
                title: 'js'
            },
        ]
    }

})


test('new skill add', () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'js');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('js');
    expect(student.technologies[3].id).toBeDefined();

//запуск теста - npm test

})

test('student should be active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);




})



test('does student live is city?', () => {
    expect(student.isActive).toBe(false);

    doesStudentLive(student, 'Moscow');
let result1  = doesStudentLive(student, 'Moscow');
let result2  = doesStudentLive(student, 'Minsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);

})