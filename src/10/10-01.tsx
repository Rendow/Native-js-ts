

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
export type UserWithBooks = UserType & {
    laptop: LaptopType
    books:Array<string>
}
export type UserWithCompanies = UserType & {
    laptop: LaptopType
    companies:Array<{ id:number, title:string }>
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

export const updateCompanyTitle = (user:UserWithCompanies,
                                   companyID:number,
                                   newTitle:string) => {
    return  {
        ...user,
        companies:user.companies.map
        (c => c.id === companyID ? {...c,title:newTitle} : c)
    }
}
//analog
export const updateCompanyTitleTwo = (user:UserWithCompanies,
                                    companyID:number,
                                    newTitle:string) => {
    const copy:UserWithCompanies = {
        ...user,
        companies:user.companies.map(c => {
            if (c.id === companyID){
                return {...c,title:newTitle}
            } else return c
        })
    }
    return copy
}

export const addNewBooks = (user:UserWithBooks, newBook:string) => {
  return {
       ...user,
   books:[...user.books, newBook]
   }
}
/*
    books:[...user.books, newBook]
 , newBook - аналог пуш (  copy.books.push(newBook)   *)
 /
 */


export const updateBook = (user:UserWithBooks,oldBook:string, newBook:string) => {
    return {
        ...user,
        books:user.books.map(b=>{
            if( b === oldBook){
                return newBook
            }
            return b
        })
    }
}
//analog
export const updateBookTwo = (user:UserWithBooks,oldBook:string, newBook:string) => {
    return {
        ...user,
   books:user.books.map(b=> b === oldBook ? newBook : b)
    }
}

export const deleteBook = (user:UserWithBooks, newBook:string) => {
    return {
        ...user,
        books:user.books.filter(b=> b !== newBook)
    }
}



