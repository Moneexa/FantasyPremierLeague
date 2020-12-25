import { StoreProvider, createStore, action, thunk } from 'easy-peasy';

export const store = createStore({
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
        para: "",
        myLeagues: [
            {
                id: "1",
                gameWeakLeague: "Game Weak 10",
                leagueNo: "2171",
                yourRank: "1337",
                stake: "$100"
            },
            {
                id: "2",
                gameWeakLeague: "Game Weak 09",
                leagueNo: "1927",
                yourRank: "2365",
                stake: "$100"

            },
            {
                id: "3",
                gameWeakLeague: "Game Weak 08",
                leagueNo: "1246",
                yourRank: "1985",
                stake: "$100"

            },

            {
                id: "4",
                gameWeakLeague: "Game Weak 07",
                leagueNo: "2896",
                yourRank: "5638",
                stake: "$100"

            },

            {
                id: "5",
                gameWeakLeague: "Game Weak 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },

            {
                id: "5",
                gameWeakLeague: "Game Weak 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },

            {
                id: "5",
                gameWeakLeague: "Game Weak 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },
            {
                id: "5",
                gameWeakLeague: "Game Weak 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },


        ],
        paymentHistory: [
            {
                transType: "cardDeposit",
                amount: "-17.5",
                date:"18, Dec,2020",
                currency: "USD"


            },
            {
                transType: "paypalDeposit",
                amount: "220",
                date:"18, Dec,2020",
                currency: "USD"

            },
            {
                transType:"withdraw",
                amount:"-330",
                date:"18, Dec,2020",
                currency: "USD"




            },
            {
                transType: "cancel",
                amount:"0",
                date:"18, Dec,2020",
                currency: "USD"


            }
        ],
        currentBalance: 15750,
        changeHeading: action((state, payload) => {
            state.heading = payload
        }),
        changePara: action((state, payload) => {
            state.para = payload

        }),
        changeCurrentBalance: action((state, payload) => {
            if (payload.type === "withdraw") {
                state.currentBalance = state.currentBalance - payload.value
            }
            else {
                state.currentBalance = state.changeCurrentBalance + payload.value
            }
            state.currentBalance = payload
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
        changeParaRed: thunk((actions, payload) => {
            actions.changePara(payload)
        }),
        submitEmail: thunk((actions, payload) => {
            console.log(payload)
        }),
        depositMoney: thunk((actions, payload) => {
            const obj = {
                type: "deposit",
                value: payload
            }
            actions.changeCurrentBalance(obj)
        }),
        withdrawMoney: thunk((actions, payload) => {
            const obj = {
                type: "withdraw",
                value: payload
            }
            actions.changeCurrentBalance(obj)
        })


    }

})