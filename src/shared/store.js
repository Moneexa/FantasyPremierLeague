import { StoreProvider, createStore, action, thunk } from 'easy-peasy';

export  const store = createStore({
    obj: {
        heading: "",
        loggedIn: false,
        faqList: [{
            subHeading: "What league will I play in?",
            description: "We put you up in a league based on the number of players who have signed up.We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }, {
            subHeading: "Why do you not publish the leagues immediately?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }, {
            subHeading: "How many players are in my league?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }, {
            subHeading: "How soon can I withdraw my winnings?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }, {
            subHeading: "Can I join multiple leagues?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }, {
            subHeading: "How do I deposit the money?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        },
        
        {
            subHeading: "How do I deposit the money?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        },
        ],

    changeHeading: action((state, payload) => {
        state.heading = payload
    }),
    changeLogging: action((state, payload) => {
        state.loggedIn = payload
    }),

    changeHeadingRed: thunk((actions, payload) => {
        actions.changeHeading(payload)
    }),
    changeLoggingRed: thunk((actions, payload) => {
        actions.changeLogging(payload)
    }),
    submitEmail: thunk((actions, payload)=>{
        console.log(payload)
    })

    }

})