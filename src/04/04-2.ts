import {CityType, governmentBuildings} from "../02/02-02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
city.houses = city.houses.filter(h => h.address.street.title !== street )
}

//создает массив, описание улицы которого не равно 'happy street'


export function getBuildingWithStaffCountGreaterThen(buildings: Array<governmentBuildings>, number: number) {
    return buildings.filter(b => b.staffCount > number)
}

//в функцию приходит массив governmentBuildings с двумя обьектами, из них отфильтровывается обьект с staffCount > 500