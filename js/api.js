function users (request, response) {
    const dynamicUsers = new users();

    response.json({
        user : dynamicUsers.toGMTString()
    })
}



export default users;