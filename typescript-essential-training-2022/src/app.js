// compiler options set to true "allowJs" and "checkJs"
/**
 * 
 * @param {number} contactId 
 * @returns 
 */
async function getContact(contactId) {
    // @ts-ignore
    const res = await $.ajax({
        url: `/contacts/${contactId}`,
        dataType: "json"
    })

    return {
        id: +res.id,
        name: res.name,
        birthDate: new Date(res.birthDate)
    }
}

getContact(1).then((contact) => {
    contact.id = 1234,
    contact.birthDate = new Date("12/12/1990")
})