import {governmentBuildings, HouseType} from "../02/02-02";

export function getStreetsTitlesOfGovermentBuildings (buildings: Array<governmentBuildings>) {
return buildings.map( b => b.address.street.title)
}

export function getStreetsTitlesOfHouse (houses: Array<HouseType>) {
    return houses.map( b => b.address.street.title)
}

export function createMessages(houses: Array<HouseType>) {

    return houses.map(h => `hello guys from ${h.address.street.title}`)

}