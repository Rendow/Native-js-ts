test('should teake old men older then 90', () => {
    const ages = [18,20,32,55,90,100]



    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);


    }

)

test('should teake courses cheaper 160', () => {


    const courses = [
        {title: 'CSS', price:110},
        {title: 'JS', price:200},
        {title: 'REACT', price:150},
    ]



    const cheapCourses = courses.filter(сourse => сourse.price < 160);

        expect(cheapCourses.length).toBe(2);
        expect(cheapCourses[0].title).toBe('CSS');
        expect(cheapCourses[1].title).toBe('REACT');


    }

)


test('get only completed tasks', () => {
const tasks = [
    {id:1, title: 'Bread', isDone: false},
    {id:2, title: 'Milk', isDone: true},
    {id:3, title: 'Salt', isDone: false},
    {id:4, title: 'Sugar', isDone: true},
]
    const completedTasks = tasks.filter( task => task.isDone) //isDone уже имеет булевое значение, фильтр выбирает со значение тру
 // аналогичная запись
  // const completedTasks = tasks.filter( function (task) {
  //    return  task.isDone
  //  } )

})

test('get only uncompleted tasks', () => {
const tasks = [
    {id:1, title: 'Bread', isDone: false},
    {id:2, title: 'Milk', isDone: true},
    {id:3, title: 'Salt', isDone: false},
    {id:4, title: 'Sugar', isDone: true},
]
    const unCompletedTasks = tasks.filter( task => task.isDone === false) //isDone уже имеет булевое значение, фильтр выбирает со значение тру

    expect(unCompletedTasks.length).toBe(2);
    expect(unCompletedTasks[0].id).toBe(1);
    expect(unCompletedTasks[1].id).toBe(3);
})









