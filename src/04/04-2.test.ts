import {CityType} from "../02/02-02";
import {demolishHousesOnTheStreet, getBuildingWithStaffCountGreaterThen} from "./04-2";


let city: CityType;


beforeEach(() => {
    city = {
        title: 'new york',
        houses: [{
            id:1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'white street'
                }
            }
        },
            {
                id:2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'happy street'
                    }
                }
            }, {
                id:3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'happy street'
                    }
                }
            }],
        governmentBuildings: [{
            type: 'hospital',
            budget: 200000,
            staffCount: 200,
            address: {
                number: 5,
                street: {
                    title: 'central street',
                }
            }
        }, {
            type: "fare-station",
            budget: 500000,
            staffCount: 1000,
            address: {
                number: 5,
                street: {
                    title: 'south street',
                }
            }
        }],
        citizenNumber: 1000000
    }

})


test('houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'happy street')

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);


})

test('building with correct staff count', () => {
     let buildings = getBuildingWithStaffCountGreaterThen(city.governmentBuildings,500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("fare-station");


})

