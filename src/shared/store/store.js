import { StoreProvider, createStore, action, thunk } from 'easy-peasy';
import { Link } from 'react-router-dom'
export const store = createStore({
    obj: {
        heading: "",
        loggedIn: false,
        sync: false,
        faqList: [{
            subHeading: "How do I play?",
            description: "Sign in with your Fantasy.premierleague.com account, Choose the weekly or monthly option and enroll in an amount of your choosing. Once enrolled, we will place you in a league and try to get you to compete with players who have a similar Overall Rank. We are however, limited to Overall Rank matching based on the number of players who sign up"
        }, {
            subHeading: "How do I transfer money?",
            description: "We have partnered with Dwolla and you can transfer money in and out, hassle free, from your bank account. At this time, we are only accepting Bank transfers and credit card / debit card transactions are not supported"
        }, {
            subHeading: "How much money can I win?",
            description: "We award players who come in 1st, 2nd or 3rd within any league. To see the complete breakdown of winnings by league,click here"
        }, {
            subHeading: "What does compete based on Overall Rank mean?",
            description: "Overall rank is the criteria on which we assign you to leagues. Depending on the number of players who sign up, we try to sort users with as closely matched Overall Rank to each other, as possible, to make it a fair competition. This however depends on the number of players that sign up for a said league and cannot guarantee that you would be placed in a league with someone with a similar matched OR"
        }, {
            subHeading: "Can I join multiple leagues?",
            description: "Yes, you can join a maximum of five weekly or five monthly leagues of the same denomination (dollar amount). We reserve the right to prioritize users that have joined a single league and will try our best to place you in a league"
        }, {
            subHeading: "Will I be placed in the same league twice if I join multiple times?",
            description: "We attempt to create as many unique leagues as doable, but may have to place you in the same league twice in case there are not enough players"
        },

        {
            subHeading: "How many players in each league?",
            description: "There will be a maximum of twenty players in every league, and a minimum of eighteen. If we cannot place you in a league, then the monies will be refunded to your account"
        },
        {
            subHeading: "When do you publish the leagues?",
            description: "The deadline to sign up for the monthly or weekly league is twelve hours prior to the first game of the game week. We then sort the players and will publish it before the game week starts"
        },
        {
            subHeading: "Why do you not publish the leagues immediately?",
            description: "We wait till the deadline to ensure that we can create the most competitive league based on Overall Rank and to match similarly ranked players."
        },
        {
            subHeading: "How soon can I withdraw my winnings?",
            description: "It takes us a minimum of a day and a maximum of three days after the final match to certify the standings and then credit it to your account if you’ve won. Once credited, you can withdraw the money immediately, hold it in your wallet on the website or enroll in competitions for the next week"
        },
        {
            subHeading: "Who gets preference in league standings. Players with or without hits?",
            description: "We deem the net score as the identifying criteria of rank. If a player has taken (-4 / -8) point hit and has the same net score as someone who hasn’t, we consider that as a tie. Hits are taken for a multitude of reasons, and we only look at the net score (weekly score minus hits) as a gauge of standing rather than promoting / demoting a player based on hits"
        },
        {
            subHeading: "Is this legal across the United States?",
            description: "Daily Fantasy laws (DFS) are not standardized across the country. Each state has their own laws, and we are working with several state governments to get approval. For now, we are live in New Jersey, ___, ___ and users from the states of Wyoming, ___ are not eligible to play. We implement geo-targeting and users from those regions would not be allowed to compete. Here is a link to see the DFS laws by states.For the states we are live in, we have the license, permits and legal obligation under DFS statutory law to operate and enroll users"
        },
        {
            subHeading: "Why do you need me to sign in with my Fantasy premier league account?",
            description: "To ensure that a player is using their own fantasy teams, we ask users to sign in with their Fantasy premier league accounts. We do not store your username or password. We just need it to authenticate that a user is using their own team"
        },
        {
            subHeading: "Will I have to pay taxes on if I win?",
            description: "Yes, it is the individual’s responsibility to pay taxes on any winnings. If requested by the government or any of it’s agencies to disclose user data regarding tax fraud or tax withheld, FPL Play LLC will comply with the regulatory laws and share information where deemed necessary"
        }
        ],
        para: "",
        myLeagues: [
            {
                id: "1",
                gameWeakLeague: "Gameweek 10",
                leagueNo: "2171",
                yourRank: "1337",
                stake: "$100"
            },
            {
                id: "2",
                gameWeakLeague: "Gameweek 09",
                leagueNo: "1927",
                yourRank: "2365",
                stake: "$100"

            },
            {
                id: "3",
                gameWeakLeague: "Gameweek 08",
                leagueNo: "1246",
                yourRank: "1985",
                stake: "$100"

            },

            {
                id: "4",
                gameWeakLeague: "Gameweek 07",
                leagueNo: "2896",
                yourRank: "5638",
                stake: "$100"

            },

            {
                id: "5",
                gameWeakLeague: "Gameweek 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },

            {
                id: "5",
                gameWeakLeague: "Gameweek 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },

            {
                id: "5",
                gameWeakLeague: "Gameweek 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },
            {
                id: "5",
                gameWeakLeague: "Gameweek 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },
            {
                id: "5",
                gameWeakLeague: "Gameweek 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },
            {
                id: "5",
                gameWeakLeague: "Gameweek 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },
            {
                id: "5",
                gameWeakLeague: "Gameweek 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },
            {
                id: "5",
                gameWeakLeague: "Gameweek 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },
            {
                id: "5",
                gameWeakLeague: "Gameweek 06",
                leagueNo: "1522",
                yourRank: "2997",
                stake: "$100",
            },

        ],
        paymentHistory: [
            {
                transType: "cardDeposit",
                amount: "-17.5",
                date: "18, Dec,2020",
                currency: "USD"


            },
            {
                transType: "paypalDeposit",
                amount: "220",
                date: "18, Dec,2020",
                currency: "USD"

            },
            {
                transType: "withdraw",
                amount: "-330",
                date: "18, Dec,2020",
                currency: "USD"




            },
            {
                transType: "cancel",
                amount: "0",
                date: "18, Dec,2020",
                currency: "USD"


            }
        ],
        stake: [
            {
                start: "$1",
                prize: { "1st Prize": "$10", "2nd Prize": "$5", "3rd Prize": "$3" }
            }, {
                start: "$10",
                prize: { "1st Prize": "$100", "2nd Prize": "$50", "3rd Prize": "$30" }
            }, {
                start: "$20",
                prize: { "1st Prize": "$200", "2nd Prize": "$100", "3rd Prize": "$60" }
            }, {
                start: "$50",
                prize: { "1st Prize": "$500", "2nd Prize": "$250", "3rd Prize": "$150" }
            }, {
                start: "$100",
                prize: { "1st Prize": "$1,000", "2nd Prize": "$500", "3rd Prize": "$300" }

            }, {
                start: "$200",
                prize: { "1st Prize": "$2,000", "2nd Prize": "$1000", "3rd Prize": "$600" }

            }, {
                start: "$1000", prize: { "1st Prize": "$10,000", "2nd Prize": "$5,000", "3rd Prize": "$3,000" }

            }
        ],
        selectedStake: {},
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
        changeSync: action((state, payload) => {
            state.sync = payload
        }),
        changeLogging: action((state, payload) => {
            state.loggedIn = payload
        }),
        changeSelectedStake: action((state, payload) => {
            state.selectedStake = payload
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
        }),
        payStake: thunk((actions, payload) => {
            actions.changeSelectedStake(payload)
        }),
        updateSync: thunk((actions, payload) => {
            actions.changeSync(payload)
        })


    }

})