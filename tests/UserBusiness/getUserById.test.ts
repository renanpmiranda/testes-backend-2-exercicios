import { USER_ROLES } from './../../src/types';
import { UserBusiness } from "../../src/business/UserBusiness"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("getUserById", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("deve receber um id e retornar um usuário(objeto)", async () => {
        const input = {
            id: "id-mock",
            token: "token-mock-normal"
        }

        const response = await userBusiness.getUserById(input)

        const userExpected = {
            id: "id-mock",
            name: "Normal Mock",
            email: "normal@email.com",
            password: "hash-bananinha",
            createdAt: expect.any(String),
            role: USER_ROLES.NORMAL
        }

        expect(response).toEqual(userExpected)
    })
})