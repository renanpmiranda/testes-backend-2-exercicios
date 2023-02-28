import { UserBusiness } from "../../src/business/UserBusiness"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("deleteUser", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    test("deve retornar uma mensagem de sucesso", async () => {
        const input = {
            id: "id-mock",
            token: "token-mock-normal"
        }

        const response = await userBusiness.deleteUser(input)

        expect(response.message).toBe("User deletado com sucesso")
    })
})