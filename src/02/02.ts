
// типизируем изнутри наружу

export type LocalCityType = {
    title: string
    countryTitle: string
}
export type AddressType = {
    streetTitle: string
    city:LocalCityType
}
export type TechType = {
    id:number
    title:string
}
export type StudentType = {
    id: number
    name:string
    age: number
    isActive:boolean
    address:AddressType
    technologies: Array<TechType>
}



export const students: StudentType = {
    id:1,
    name:'olga',
    age:32,
    isActive: false,
    address: {
       streetTitle: 'Surganova 2',
       city: {
           title:'Minsk',
           countryTitle: 'belarus'
       }
    },
    technologies: [
        {
            id:1,
            title: 'html'
        },
        {
            id:2,
            title: 'css'
        },
        {
            id:3,
            title: 'js'
        },
    ]
}
