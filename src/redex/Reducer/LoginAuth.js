const inVal = {
    token: ''
}
const LogIn = (state = inVal, action) => {
    if (action.type === 'LOGIN') {
        return ({ ...action.payload })
    }
    return state
}
export default LogIn