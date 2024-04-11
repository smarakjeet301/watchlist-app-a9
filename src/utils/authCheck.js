function authCheck() {
    const isUserExists = JSON.parse(localStorage.getItem("userEmail"))
    return isUserExists
}

export default authCheck