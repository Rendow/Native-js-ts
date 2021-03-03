

export type UserType = {
    name:string
    hair:number
    address:{city:string, house?:number}
}
export type LaptopType = {
    title:string
}
export type UserWithLaptop = UserType & {
    laptop: LaptopType
}
//аналогичная запись
/*export type UserWithLaptop = {
    laptop: LaptopType
    name:string
    hair:number
    address:{title:string}

}*/


export function makeHairStyle(u:UserType, power:number){
    const copy ={
        ...u,
        hair:u.hair / power
    }
    return copy
}
export function moveUser(u:UserType, city:string){
    const copy ={
        ...u,
    }

    copy.address =  {
        ...copy.address,
        city: city
    }
    return copy
}