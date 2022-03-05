
const INITIAL_STATE = {
    user_id: null,
    email: "",
    user_role: ""
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("REDUCER ==> Data dari authAction:", action.payload)
            return { ...state, ...action.payload }
        case "LOGOUT":
            // reset ulang data reducer dgn INITIAL_STATE
            return { ...state, ...INITIAL_STATE }
        default:
            return state;
    }

}