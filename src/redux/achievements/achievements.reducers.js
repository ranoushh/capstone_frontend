import achievementActionTypes from "./achievements.types";

export const Initial_State = {
    allAchievements: [],
    singleAchievement: {}
};

//reducer
const achievementReducer = (state=Initial_State, {type, payload}) => {
    console.log("PL", payload);
    // console.log(allAchievements);
    //logs which action is being used
    switch(type){
        case achievementActionTypes.FETCH_ALL_ACHIEVEMENTS:
            //putting payload from fetch into the initial empty array
            console.log(payload);
            return{...state, allAchievements: payload};

        case achievementActionTypes.FETCH_SINGLE_ACHIEVEMENT:
            return { ...state, singleAchievement: payload };
        default:
            return state;
    };
};

export default achievementReducer;