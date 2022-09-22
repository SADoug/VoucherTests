import { jest } from "@jest/globals"
import * as VoucherRepo from "../../src/repositories/voucherRepository"
import * as VoucherService from "../../src/services/voucherService"
import { conflictError } from "../../src/utils/errorUtils";


    let code: "12345678"
    let discount: 10
    it("given a task with duplicate title it should return 409", async () => {
        jest.spyOn(VoucherRepo, 'createVoucher').mockResolvedValueOnce({
            id: 1,
            code,
            discount,
            used: false
        }
        )

        try {
            const result = await VoucherService.createVoucher(
                code,
                discount
            )
        } catch (error) {
            console.log(error)
            expect(error).toEqual(conflictError("Voucher already exist."));
        }
    });

