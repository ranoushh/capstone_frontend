import achievementActionTypes from "./achievements.types";

export const Initial_State = {
    allAchievements: [],
    singleAchievement: {}
};

//reducer
const achievementReducer = (state=Initial_State, {type, payload}) => {
    // console.log(allAchievements);
    //logs which action is being used
    switch(type){
        case achievementActionTypes.fetch_all_achievements:
            //putting payload from fetch into the initial empty array
            console.log(payload);
            return{...state, allAchievements: payload};

        case achievementActionTypes.fetch_single_achievement:
            return { ...state, singleAchievement: payload };
        default:
            return state;
    };
};

export default achievementReducer;