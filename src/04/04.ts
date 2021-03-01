const ages = [18,20,32,55]

const predicate = (age: number) =>{
    return age > 90;
}

const oldAges = [100]

type CourseType ={
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price:110},
    {title: 'JS', price:200},
    {title: 'REACT', price:150},
]

const cheapPredicate = (props: CourseType) => {
    return props.price < 160;
}

const cheapCourses = [
    {title: 'CSS', price:110},
    {title: 'REACT', price:150},
]