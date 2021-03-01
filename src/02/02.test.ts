import {CityType} from "./02-02";


let city: CityType;


beforeEach(() => {
    city = {
        title: 'new york',
        houses: [{
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
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'happy street'
                    }
                }
            }, {
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


test.skip('test city should contain 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('white street');

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('happy street');

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe('happy street');

})

test.skip('test city should contain hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('hospital');
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe('central street');

    expect(city.governmentBuildings[1].type).toBe('fare-station');
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe('south street');


})