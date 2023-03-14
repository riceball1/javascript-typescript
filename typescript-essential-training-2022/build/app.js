"use strict";
// compiler options set to true "allowJs" and "checkJs"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getContact(contactId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield $.ajax({
            url: `/contacts/${contactId}`,
            dataType: "json"
        });
        return {
            id: +res.id,
            name: res.name,
            birthDate: new Date(res.birthDate)
        };
    });
}
getContact(1).then((contact) => {
    contact.id = 1234,
        contact.birthDate = new Date("12/12/1990");
});
//# sourceMappingURL=app.js.map