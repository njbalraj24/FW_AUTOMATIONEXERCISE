import { faker, Faker } from "@faker-js/faker";

export class RandomDataUtil
{
    static getName()
    {
        return faker.person.fullName();
    }

    static getEmail()
    {
        return faker.internet.email();
    }

    static getPassword()
    {
        return faker.internet.password();
    }

    static getFirstName()
    {
        return faker.person.firstName();
    }

    static getLastName()
    {
        return faker.person.lastName();
    }

    static getCompany()
    {
        return faker.company.name();
    }

    static getAddress()
    {
        return faker.location.streetAddress();
    }

    static getAddress2()
    {
        return faker.location.secondaryAddress();
    }

    static getState()
    {
        return faker.location.state();
    }

    static getCity()
    {
        return faker.location.city();
    }

    static getZipcode()
    {
        return faker.location.zipCode();
    }

    static getMobileNo()
    {
        return faker.phone.number();
    }

    static getSubject()
    {
        return faker.string.alphanumeric();
    }

    static getYourMessage()
    {
        return faker.string.fromCharacters('Please consider my request to cancel this product')
    }
}