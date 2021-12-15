export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    // REMOVE AFTER COMPLETION
    // token: 'BQDVr3yR73iwyuHpoNIsWac8rKPNk7vxdr5vIkZ8jmicFBHxE_YlXrubwYFvDiguDMigR6wRGBy6jlpet2y2RaKixRYXKxG9Z0b00AR39DKcxyKPfh46OHoGVogNNrU2Giw2JuG7OD7cVIMbXWMPG5LRlm-EUGuc4VcgdzJvyo_JIprL'
}

const reducer = (state, action) =>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            };
        default:
            return state;
    }
}

export default reducer;