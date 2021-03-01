import {CityType} from "../02/02-02";
import {demolishHousesOnTheStreet, getBuildingWithStaffCountGreaterThen} from "../04/04-2";
import {createMessages, getStreetsTitlesOfGovermentBuildings, getStreetsTitlesOfHouse} from "./05-02";


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

test('list of streets titles of goverments buildings', () => {
   let streetsNames = getStreetsTitlesOfGovermentBuildings(city.governmentBuildings)

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('central street');
    expect(streetsNames[1]).toBe('south street');



})

test('list of streets title', () => {
    let streetsNames = getStreetsTitlesOfHouse(city.houses)


    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe('white street');
    expect(streetsNames[1]).toBe('happy street');
    expect(streetsNames[1]).toBe('happy street');

})


test('create greeting messages for streets', () => {
    let messages = createMessages(city.houses)


    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('hello guys from white street');
    expect(messages[1]).toBe('hello guys from happy street');
    expect(messages[2]).toBe('hello guys from happy street');

})
