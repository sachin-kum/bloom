import axios from "axios"

const profileData = {
    Profile: []
}
const ProfileStore = (state = profileData, action) => {
    if (action.type === 'USER_PROFILE') {
        return ({ Profile: action.payload })
    }
    return state
}
export default ProfileStore