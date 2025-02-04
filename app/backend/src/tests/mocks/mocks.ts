const homeMatchMock = [
	{
		"id": 1,
		"homeTeam": 16,
		"homeTeamGoals": 1,
		"awayTeam": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 16,
			"teamName": "São Paulo"
		},
		"teamAway": {
			"id": 8,
			"teamName": "Grêmio"
		}
	},
	{
		"id": 2,
		"homeTeam": 9,
		"homeTeamGoals": 1,
		"awayTeam": 14,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 9,
			"teamName": "Internacional"
		},
		"teamAway": {
			"id": 14,
			"teamName": "Santos"
		}
	},
	{
		"id": 3,
		"homeTeam": 4,
		"homeTeamGoals": 3,
		"awayTeam": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 4,
			"teamName": "Corinthians"
		},
		"teamAway": {
			"id": 11,
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 4,
		"homeTeam": 3,
		"homeTeamGoals": 0,
		"awayTeam": 2,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 3,
			"teamName": "Botafogo"
		},
		"teamAway": {
			"id": 2,
			"teamName": "Bahia"
		}
	},
	{
		"id": 5,
		"homeTeam": 7,
		"homeTeamGoals": 1,
		"awayTeam": 10,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 7,
			"teamName": "Flamengo"
		},
		"teamAway": {
			"id": 10,
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 6,
		"homeTeam": 5,
		"homeTeamGoals": 1,
		"awayTeam": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 5,
			"teamName": "Cruzeiro"
		},
		"teamAway": {
			"id": 13,
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 7,
		"homeTeam": 12,
		"homeTeamGoals": 2,
		"awayTeam": 6,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 12,
			"teamName": "Palmeiras"
		},
		"teamAway": {
			"id": 6,
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 8,
		"homeTeam": 15,
		"homeTeamGoals": 0,
		"awayTeam": 1,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 15,
			"teamName": "São José-SP"
		},
		"teamAway": {
			"id": 1,
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 9,
		"homeTeam": 1,
		"homeTeamGoals": 0,
		"awayTeam": 12,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"id": 1,
			"teamName": "Avaí/Kindermann"
		},
		"teamAway": {
			"id": 12,
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 10,
		"homeTeam": 2,
		"homeTeamGoals": 0,
		"awayTeam": 9,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 2,
			"teamName": "Bahia"
		},
		"teamAway": {
			"id": 9,
			"teamName": "Internacional"
		}
	},
	{
		"id": 11,
		"homeTeam": 13,
		"homeTeamGoals": 1,
		"awayTeam": 3,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 13,
			"teamName": "Real Brasília"
		},
		"teamAway": {
			"id": 3,
			"teamName": "Botafogo"
		}
	},
	{
		"id": 12,
		"homeTeam": 6,
		"homeTeamGoals": 0,
		"awayTeam": 4,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 6,
			"teamName": "Ferroviária"
		},
		"teamAway": {
			"id": 4,
			"teamName": "Corinthians"
		}
	},
	{
		"id": 13,
		"homeTeam": 8,
		"homeTeamGoals": 2,
		"awayTeam": 5,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 8,
			"teamName": "Grêmio"
		},
		"teamAway": {
			"id": 5,
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 14,
		"homeTeam": 14,
		"homeTeamGoals": 2,
		"awayTeam": 16,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 14,
			"teamName": "Santos"
		},
		"teamAway": {
			"id": 16,
			"teamName": "São Paulo"
		}
	},
	{
		"id": 15,
		"homeTeam": 10,
		"homeTeamGoals": 0,
		"awayTeam": 15,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 10,
			"teamName": "Minas Brasília"
		},
		"teamAway": {
			"id": 15,
			"teamName": "São José-SP"
		}
	},
	{
		"id": 16,
		"homeTeam": 11,
		"homeTeamGoals": 0,
		"awayTeam": 7,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 11,
			"teamName": "Napoli-SC"
		},
		"teamAway": {
			"id": 7,
			"teamName": "Flamengo"
		}
	},
	{
		"id": 17,
		"homeTeam": 1,
		"homeTeamGoals": 2,
		"awayTeam": 8,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"id": 1,
			"teamName": "Avaí/Kindermann"
		},
		"teamAway": {
			"id": 8,
			"teamName": "Grêmio"
		}
	},
	{
		"id": 18,
		"homeTeam": 12,
		"homeTeamGoals": 4,
		"awayTeam": 5,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 12,
			"teamName": "Palmeiras"
		},
		"teamAway": {
			"id": 5,
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 19,
		"homeTeam": 11,
		"homeTeamGoals": 2,
		"awayTeam": 2,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 11,
			"teamName": "Napoli-SC"
		},
		"teamAway": {
			"id": 2,
			"teamName": "Bahia"
		}
	},
	{
		"id": 20,
		"homeTeam": 7,
		"homeTeamGoals": 0,
		"awayTeam": 9,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 7,
			"teamName": "Flamengo"
		},
		"teamAway": {
			"id": 9,
			"teamName": "Internacional"
		}
	},
	{
		"id": 21,
		"homeTeam": 6,
		"homeTeamGoals": 3,
		"awayTeam": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 6,
			"teamName": "Ferroviária"
		},
		"teamAway": {
			"id": 13,
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 22,
		"homeTeam": 4,
		"homeTeamGoals": 3,
		"awayTeam": 3,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 4,
			"teamName": "Corinthians"
		},
		"teamAway": {
			"id": 3,
			"teamName": "Botafogo"
		}
	},
	{
		"id": 23,
		"homeTeam": 15,
		"homeTeamGoals": 2,
		"awayTeam": 16,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"id": 15,
			"teamName": "São José-SP"
		},
		"teamAway": {
			"id": 16,
			"teamName": "São Paulo"
		}
	},
	{
		"id": 24,
		"homeTeam": 10,
		"homeTeamGoals": 2,
		"awayTeam": 14,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 10,
			"teamName": "Minas Brasília"
		},
		"teamAway": {
			"id": 14,
			"teamName": "Santos"
		}
	},
	{
		"id": 25,
		"homeTeam": 2,
		"homeTeamGoals": 0,
		"awayTeam": 6,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 2,
			"teamName": "Bahia"
		},
		"teamAway": {
			"id": 6,
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 26,
		"homeTeam": 13,
		"homeTeamGoals": 1,
		"awayTeam": 1,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 13,
			"teamName": "Real Brasília"
		},
		"teamAway": {
			"id": 1,
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 27,
		"homeTeam": 5,
		"homeTeamGoals": 1,
		"awayTeam": 15,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 5,
			"teamName": "Cruzeiro"
		},
		"teamAway": {
			"id": 15,
			"teamName": "São José-SP"
		}
	},
	{
		"id": 28,
		"homeTeam": 16,
		"homeTeamGoals": 3,
		"awayTeam": 7,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 16,
			"teamName": "São Paulo"
		},
		"teamAway": {
			"id": 7,
			"teamName": "Flamengo"
		}
	},
	{
		"id": 29,
		"homeTeam": 9,
		"homeTeamGoals": 0,
		"awayTeam": 4,
		"awayTeamGoals": 4,
		"inProgress": false,
		"teamHome": {
			"id": 9,
			"teamName": "Internacional"
		},
		"teamAway": {
			"id": 4,
			"teamName": "Corinthians"
		}
	},
	{
		"id": 30,
		"homeTeam": 3,
		"homeTeamGoals": 0,
		"awayTeam": 12,
		"awayTeamGoals": 4,
		"inProgress": false,
		"teamHome": {
			"id": 3,
			"teamName": "Botafogo"
		},
		"teamAway": {
			"id": 12,
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 31,
		"homeTeam": 8,
		"homeTeamGoals": 2,
		"awayTeam": 10,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 8,
			"teamName": "Grêmio"
		},
		"teamAway": {
			"id": 10,
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 32,
		"homeTeam": 14,
		"homeTeamGoals": 5,
		"awayTeam": 11,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 14,
			"teamName": "Santos"
		},
		"teamAway": {
			"id": 11,
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 33,
		"homeTeam": 1,
		"homeTeamGoals": 1,
		"awayTeam": 16,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 1,
			"teamName": "Avaí/Kindermann"
		},
		"teamAway": {
			"id": 16,
			"teamName": "São Paulo"
		}
	},
	{
		"id": 34,
		"homeTeam": 9,
		"homeTeamGoals": 3,
		"awayTeam": 6,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 9,
			"teamName": "Internacional"
		},
		"teamAway": {
			"id": 6,
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 35,
		"homeTeam": 10,
		"homeTeamGoals": 1,
		"awayTeam": 5,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"id": 10,
			"teamName": "Minas Brasília"
		},
		"teamAway": {
			"id": 5,
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 36,
		"homeTeam": 2,
		"homeTeamGoals": 0,
		"awayTeam": 7,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 2,
			"teamName": "Bahia"
		},
		"teamAway": {
			"id": 7,
			"teamName": "Flamengo"
		}
	},
	{
		"id": 37,
		"homeTeam": 15,
		"homeTeamGoals": 0,
		"awayTeam": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 15,
			"teamName": "São José-SP"
		},
		"teamAway": {
			"id": 13,
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 38,
		"homeTeam": 14,
		"homeTeamGoals": 2,
		"awayTeam": 4,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 14,
			"teamName": "Santos"
		},
		"teamAway": {
			"id": 4,
			"teamName": "Corinthians"
		}
	},
	{
		"id": 39,
		"homeTeam": 3,
		"homeTeamGoals": 2,
		"awayTeam": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 3,
			"teamName": "Botafogo"
		},
		"teamAway": {
			"id": 11,
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 40,
		"homeTeam": 12,
		"homeTeamGoals": 4,
		"awayTeam": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 12,
			"teamName": "Palmeiras"
		},
		"teamAway": {
			"id": 8,
			"teamName": "Grêmio"
		}
	}
];

const sortedHomeTeamMock = [
	{
		"name": "Santos",
		"totalPoints": 9,
		"totalGames": 3,
		"totalVictories": 3,
		"totalLosses": 0,
		"totalDraws": 0,
		"goalsFavor": 9,
		"goalsOwn": 3,
		"goalsBalance": 6,
		"efficiency": 100
	},
	{
		"name": "Palmeiras",
		"totalPoints": 7,
		"totalGames": 3,
		"totalVictories": 2,
		"totalLosses": 0,
		"totalDraws": 1,
		"goalsFavor": 10,
		"goalsOwn": 5,
		"goalsBalance": 5,
		"efficiency": 77.78
	},
	{
		"name": "Corinthians",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalLosses": 0,
		"totalDraws": 0,
		"goalsFavor": 6,
		"goalsOwn": 1,
		"goalsBalance": 5,
		"efficiency": 100
	},
	{
		"name": "Grêmio",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalLosses": 0,
		"totalDraws": 0,
		"goalsFavor": 4,
		"goalsOwn": 1,
		"goalsBalance": 3,
		"efficiency": 100
	},
	{
		"name": "Real Brasília",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalLosses": 0,
		"totalDraws": 0,
		"goalsFavor": 2,
		"goalsOwn": 0,
		"goalsBalance": 2,
		"efficiency": 100
	},
	{
		"name": "São Paulo",
		"totalPoints": 4,
		"totalGames": 2,
		"totalVictories": 1,
		"totalLosses": 0,
		"totalDraws": 1,
		"goalsFavor": 4,
		"goalsOwn": 1,
		"goalsBalance": 3,
		"efficiency": 66.67
	},
	{
		"name": "Internacional",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 4,
		"goalsOwn": 6,
		"goalsBalance": -2,
		"efficiency": 44.44
	},
	{
		"name": "Botafogo",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 2,
		"goalsOwn": 4,
		"goalsBalance": -2,
		"efficiency": 44.44
	},
	{
		"name": "Ferroviária",
		"totalPoints": 3,
		"totalGames": 2,
		"totalVictories": 1,
		"totalLosses": 1,
		"totalDraws": 0,
		"goalsFavor": 3,
		"goalsOwn": 2,
		"goalsBalance": 1,
		"efficiency": 50
	},
	{
		"name": "Napoli-SC",
		"totalPoints": 2,
		"totalGames": 2,
		"totalVictories": 0,
		"totalLosses": 0,
		"totalDraws": 2,
		"goalsFavor": 2,
		"goalsOwn": 2,
		"goalsBalance": 0,
		"efficiency": 33.33
	},
	{
		"name": "Cruzeiro",
		"totalPoints": 1,
		"totalGames": 2,
		"totalVictories": 0,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 2,
		"goalsOwn": 3,
		"goalsBalance": -1,
		"efficiency": 16.67
	},
	{
		"name": "Flamengo",
		"totalPoints": 1,
		"totalGames": 2,
		"totalVictories": 0,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 1,
		"goalsOwn": 2,
		"goalsBalance": -1,
		"efficiency": 16.67
	},
	{
		"name": "Minas Brasília",
		"totalPoints": 1,
		"totalGames": 3,
		"totalVictories": 0,
		"totalLosses": 2,
		"totalDraws": 1,
		"goalsFavor": 3,
		"goalsOwn": 6,
		"goalsBalance": -3,
		"efficiency": 11.11
	},
	{
		"name": "Avaí/Kindermann",
		"totalPoints": 1,
		"totalGames": 3,
		"totalVictories": 0,
		"totalLosses": 2,
		"totalDraws": 1,
		"goalsFavor": 3,
		"goalsOwn": 7,
		"goalsBalance": -4,
		"efficiency": 11.11
	},
	{
		"name": "São José-SP",
		"totalPoints": 0,
		"totalGames": 3,
		"totalVictories": 0,
		"totalLosses": 3,
		"totalDraws": 0,
		"goalsFavor": 2,
		"goalsOwn": 5,
		"goalsBalance": -3,
		"efficiency": 0
	},
	{
		"name": "Bahia",
		"totalPoints": 0,
		"totalGames": 3,
		"totalVictories": 0,
		"totalLosses": 3,
		"totalDraws": 0,
		"goalsFavor": 0,
		"goalsOwn": 4,
		"goalsBalance": -4,
		"efficiency": 0
	}
];

const awayMatchMock = [
	{
		"id": 1,
		"homeTeam": 16,
		"homeTeamGoals": 1,
		"awayTeam": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 16,
			"teamName": "São Paulo"
		},
		"teamAway": {
			"id": 8,
			"teamName": "Grêmio"
		}
	},
	{
		"id": 2,
		"homeTeam": 9,
		"homeTeamGoals": 1,
		"awayTeam": 14,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 9,
			"teamName": "Internacional"
		},
		"teamAway": {
			"id": 14,
			"teamName": "Santos"
		}
	},
	{
		"id": 3,
		"homeTeam": 4,
		"homeTeamGoals": 3,
		"awayTeam": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 4,
			"teamName": "Corinthians"
		},
		"teamAway": {
			"id": 11,
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 4,
		"homeTeam": 3,
		"homeTeamGoals": 0,
		"awayTeam": 2,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 3,
			"teamName": "Botafogo"
		},
		"teamAway": {
			"id": 2,
			"teamName": "Bahia"
		}
	},
	{
		"id": 5,
		"homeTeam": 7,
		"homeTeamGoals": 1,
		"awayTeam": 10,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 7,
			"teamName": "Flamengo"
		},
		"teamAway": {
			"id": 10,
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 6,
		"homeTeam": 5,
		"homeTeamGoals": 1,
		"awayTeam": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 5,
			"teamName": "Cruzeiro"
		},
		"teamAway": {
			"id": 13,
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 7,
		"homeTeam": 12,
		"homeTeamGoals": 2,
		"awayTeam": 6,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 12,
			"teamName": "Palmeiras"
		},
		"teamAway": {
			"id": 6,
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 8,
		"homeTeam": 15,
		"homeTeamGoals": 0,
		"awayTeam": 1,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 15,
			"teamName": "São José-SP"
		},
		"teamAway": {
			"id": 1,
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 9,
		"homeTeam": 1,
		"homeTeamGoals": 0,
		"awayTeam": 12,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"id": 1,
			"teamName": "Avaí/Kindermann"
		},
		"teamAway": {
			"id": 12,
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 10,
		"homeTeam": 2,
		"homeTeamGoals": 0,
		"awayTeam": 9,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 2,
			"teamName": "Bahia"
		},
		"teamAway": {
			"id": 9,
			"teamName": "Internacional"
		}
	},
	{
		"id": 11,
		"homeTeam": 13,
		"homeTeamGoals": 1,
		"awayTeam": 3,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 13,
			"teamName": "Real Brasília"
		},
		"teamAway": {
			"id": 3,
			"teamName": "Botafogo"
		}
	},
	{
		"id": 12,
		"homeTeam": 6,
		"homeTeamGoals": 0,
		"awayTeam": 4,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 6,
			"teamName": "Ferroviária"
		},
		"teamAway": {
			"id": 4,
			"teamName": "Corinthians"
		}
	},
	{
		"id": 13,
		"homeTeam": 8,
		"homeTeamGoals": 2,
		"awayTeam": 5,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 8,
			"teamName": "Grêmio"
		},
		"teamAway": {
			"id": 5,
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 14,
		"homeTeam": 14,
		"homeTeamGoals": 2,
		"awayTeam": 16,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 14,
			"teamName": "Santos"
		},
		"teamAway": {
			"id": 16,
			"teamName": "São Paulo"
		}
	},
	{
		"id": 15,
		"homeTeam": 10,
		"homeTeamGoals": 0,
		"awayTeam": 15,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 10,
			"teamName": "Minas Brasília"
		},
		"teamAway": {
			"id": 15,
			"teamName": "São José-SP"
		}
	},
	{
		"id": 16,
		"homeTeam": 11,
		"homeTeamGoals": 0,
		"awayTeam": 7,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 11,
			"teamName": "Napoli-SC"
		},
		"teamAway": {
			"id": 7,
			"teamName": "Flamengo"
		}
	},
	{
		"id": 17,
		"homeTeam": 1,
		"homeTeamGoals": 2,
		"awayTeam": 8,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"id": 1,
			"teamName": "Avaí/Kindermann"
		},
		"teamAway": {
			"id": 8,
			"teamName": "Grêmio"
		}
	},
	{
		"id": 18,
		"homeTeam": 12,
		"homeTeamGoals": 4,
		"awayTeam": 5,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 12,
			"teamName": "Palmeiras"
		},
		"teamAway": {
			"id": 5,
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 19,
		"homeTeam": 11,
		"homeTeamGoals": 2,
		"awayTeam": 2,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 11,
			"teamName": "Napoli-SC"
		},
		"teamAway": {
			"id": 2,
			"teamName": "Bahia"
		}
	},
	{
		"id": 20,
		"homeTeam": 7,
		"homeTeamGoals": 0,
		"awayTeam": 9,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 7,
			"teamName": "Flamengo"
		},
		"teamAway": {
			"id": 9,
			"teamName": "Internacional"
		}
	},
	{
		"id": 21,
		"homeTeam": 6,
		"homeTeamGoals": 3,
		"awayTeam": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 6,
			"teamName": "Ferroviária"
		},
		"teamAway": {
			"id": 13,
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 22,
		"homeTeam": 4,
		"homeTeamGoals": 3,
		"awayTeam": 3,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 4,
			"teamName": "Corinthians"
		},
		"teamAway": {
			"id": 3,
			"teamName": "Botafogo"
		}
	},
	{
		"id": 23,
		"homeTeam": 15,
		"homeTeamGoals": 2,
		"awayTeam": 16,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"id": 15,
			"teamName": "São José-SP"
		},
		"teamAway": {
			"id": 16,
			"teamName": "São Paulo"
		}
	},
	{
		"id": 24,
		"homeTeam": 10,
		"homeTeamGoals": 2,
		"awayTeam": 14,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 10,
			"teamName": "Minas Brasília"
		},
		"teamAway": {
			"id": 14,
			"teamName": "Santos"
		}
	},
	{
		"id": 25,
		"homeTeam": 2,
		"homeTeamGoals": 0,
		"awayTeam": 6,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 2,
			"teamName": "Bahia"
		},
		"teamAway": {
			"id": 6,
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 26,
		"homeTeam": 13,
		"homeTeamGoals": 1,
		"awayTeam": 1,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 13,
			"teamName": "Real Brasília"
		},
		"teamAway": {
			"id": 1,
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 27,
		"homeTeam": 5,
		"homeTeamGoals": 1,
		"awayTeam": 15,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"id": 5,
			"teamName": "Cruzeiro"
		},
		"teamAway": {
			"id": 15,
			"teamName": "São José-SP"
		}
	},
	{
		"id": 28,
		"homeTeam": 16,
		"homeTeamGoals": 3,
		"awayTeam": 7,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 16,
			"teamName": "São Paulo"
		},
		"teamAway": {
			"id": 7,
			"teamName": "Flamengo"
		}
	},
	{
		"id": 29,
		"homeTeam": 9,
		"homeTeamGoals": 0,
		"awayTeam": 4,
		"awayTeamGoals": 4,
		"inProgress": false,
		"teamHome": {
			"id": 9,
			"teamName": "Internacional"
		},
		"teamAway": {
			"id": 4,
			"teamName": "Corinthians"
		}
	},
	{
		"id": 30,
		"homeTeam": 3,
		"homeTeamGoals": 0,
		"awayTeam": 12,
		"awayTeamGoals": 4,
		"inProgress": false,
		"teamHome": {
			"id": 3,
			"teamName": "Botafogo"
		},
		"teamAway": {
			"id": 12,
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 31,
		"homeTeam": 8,
		"homeTeamGoals": 2,
		"awayTeam": 10,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 8,
			"teamName": "Grêmio"
		},
		"teamAway": {
			"id": 10,
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 32,
		"homeTeam": 14,
		"homeTeamGoals": 5,
		"awayTeam": 11,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 14,
			"teamName": "Santos"
		},
		"teamAway": {
			"id": 11,
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 33,
		"homeTeam": 1,
		"homeTeamGoals": 1,
		"awayTeam": 16,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 1,
			"teamName": "Avaí/Kindermann"
		},
		"teamAway": {
			"id": 16,
			"teamName": "São Paulo"
		}
	},
	{
		"id": 34,
		"homeTeam": 9,
		"homeTeamGoals": 3,
		"awayTeam": 6,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 9,
			"teamName": "Internacional"
		},
		"teamAway": {
			"id": 6,
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 35,
		"homeTeam": 10,
		"homeTeamGoals": 1,
		"awayTeam": 5,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"id": 10,
			"teamName": "Minas Brasília"
		},
		"teamAway": {
			"id": 5,
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 36,
		"homeTeam": 2,
		"homeTeamGoals": 0,
		"awayTeam": 7,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 2,
			"teamName": "Bahia"
		},
		"teamAway": {
			"id": 7,
			"teamName": "Flamengo"
		}
	},
	{
		"id": 37,
		"homeTeam": 15,
		"homeTeamGoals": 0,
		"awayTeam": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 15,
			"teamName": "São José-SP"
		},
		"teamAway": {
			"id": 13,
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 38,
		"homeTeam": 14,
		"homeTeamGoals": 2,
		"awayTeam": 4,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 14,
			"teamName": "Santos"
		},
		"teamAway": {
			"id": 4,
			"teamName": "Corinthians"
		}
	},
	{
		"id": 39,
		"homeTeam": 3,
		"homeTeamGoals": 2,
		"awayTeam": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"id": 3,
			"teamName": "Botafogo"
		},
		"teamAway": {
			"id": 11,
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 40,
		"homeTeam": 12,
		"homeTeamGoals": 4,
		"awayTeam": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"id": 12,
			"teamName": "Palmeiras"
		},
		"teamAway": {
			"id": 8,
			"teamName": "Grêmio"
		}
	}
];

const sortedAwayMock = [
	{
		"name": "Palmeiras",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalLosses": 0,
		"totalDraws": 0,
		"goalsFavor": 7,
		"goalsOwn": 0,
		"goalsBalance": 7,
		"efficiency": 100
	},
	{
		"name": "Corinthians",
		"totalPoints": 6,
		"totalGames": 3,
		"totalVictories": 2,
		"totalLosses": 1,
		"totalDraws": 0,
		"goalsFavor": 6,
		"goalsOwn": 2,
		"goalsBalance": 4,
		"efficiency": 66.67
	},
	{
		"name": "Internacional",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalLosses": 0,
		"totalDraws": 0,
		"goalsFavor": 3,
		"goalsOwn": 0,
		"goalsBalance": 3,
		"efficiency": 100
	},
	{
		"name": "São José-SP",
		"totalPoints": 6,
		"totalGames": 2,
		"totalVictories": 2,
		"totalLosses": 0,
		"totalDraws": 0,
		"goalsFavor": 3,
		"goalsOwn": 1,
		"goalsBalance": 2,
		"efficiency": 100
	},
	{
		"name": "São Paulo",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 5,
		"goalsOwn": 5,
		"goalsBalance": 0,
		"efficiency": 44.44
	},
	{
		"name": "Ferroviária",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 4,
		"goalsOwn": 5,
		"goalsBalance": -1,
		"efficiency": 44.44
	},
	{
		"name": "Real Brasília",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 3,
		"goalsOwn": 4,
		"goalsBalance": -1,
		"efficiency": 44.44
	},
	{
		"name": "Grêmio",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 5,
		"goalsOwn": 7,
		"goalsBalance": -2,
		"efficiency": 44.44
	},
	{
		"name": "Flamengo",
		"totalPoints": 4,
		"totalGames": 3,
		"totalVictories": 1,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 1,
		"goalsOwn": 3,
		"goalsBalance": -2,
		"efficiency": 44.44
	},
	{
		"name": "Avaí/Kindermann",
		"totalPoints": 3,
		"totalGames": 2,
		"totalVictories": 1,
		"totalLosses": 1,
		"totalDraws": 0,
		"goalsFavor": 1,
		"goalsOwn": 1,
		"goalsBalance": 0,
		"efficiency": 50
	},
	{
		"name": "Cruzeiro",
		"totalPoints": 3,
		"totalGames": 3,
		"totalVictories": 1,
		"totalLosses": 2,
		"totalDraws": 0,
		"goalsFavor": 6,
		"goalsOwn": 7,
		"goalsBalance": -1,
		"efficiency": 33.33
	},
	{
		"name": "Santos",
		"totalPoints": 2,
		"totalGames": 2,
		"totalVictories": 0,
		"totalLosses": 0,
		"totalDraws": 2,
		"goalsFavor": 3,
		"goalsOwn": 3,
		"goalsBalance": 0,
		"efficiency": 33.33
	},
	{
		"name": "Bahia",
		"totalPoints": 2,
		"totalGames": 2,
		"totalVictories": 0,
		"totalLosses": 0,
		"totalDraws": 2,
		"goalsFavor": 2,
		"goalsOwn": 2,
		"goalsBalance": 0,
		"efficiency": 33.33
	},
	{
		"name": "Minas Brasília",
		"totalPoints": 1,
		"totalGames": 2,
		"totalVictories": 0,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 1,
		"goalsOwn": 3,
		"goalsBalance": -2,
		"efficiency": 16.67
	},
	{
		"name": "Botafogo",
		"totalPoints": 0,
		"totalGames": 2,
		"totalVictories": 0,
		"totalLosses": 2,
		"totalDraws": 0,
		"goalsFavor": 1,
		"goalsOwn": 4,
		"goalsBalance": -3,
		"efficiency": 0
	},
	{
		"name": "Napoli-SC",
		"totalPoints": 0,
		"totalGames": 3,
		"totalVictories": 0,
		"totalLosses": 3,
		"totalDraws": 0,
		"goalsFavor": 1,
		"goalsOwn": 10,
		"goalsBalance": -9,
		"efficiency": 0
	}
];

const fullLeaderboardMock = [
	{
		"name": "Santos",
		"totalPoints": 11,
		"totalGames": 5,
		"totalVictories": 3,
		"totalLosses": 0,
		"totalDraws": 2,
		"goalsFavor": 12,
		"goalsOwn": 6,
		"goalsBalance": 6,
		"efficiency": 73.33333333333333
	},
	{
		"name": "Palmeiras",
		"totalPoints": 13,
		"totalGames": 5,
		"totalVictories": 4,
		"totalLosses": 0,
		"totalDraws": 1,
		"goalsFavor": 17,
		"goalsOwn": 5,
		"goalsBalance": 12,
		"efficiency": 86.66666666666667
	},
	{
		"name": "Corinthians",
		"totalPoints": 12,
		"totalGames": 5,
		"totalVictories": 4,
		"totalLosses": 1,
		"totalDraws": 0,
		"goalsFavor": 12,
		"goalsOwn": 3,
		"goalsBalance": 9,
		"efficiency": 80
	},
	{
		"name": "Grêmio",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 9,
		"goalsOwn": 8,
		"goalsBalance": 1,
		"efficiency": 66.66666666666666
	},
	{
		"name": "Real Brasília",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 5,
		"goalsOwn": 4,
		"goalsBalance": 1,
		"efficiency": 66.66666666666666
	},
	{
		"name": "São Paulo",
		"totalPoints": 8,
		"totalGames": 5,
		"totalVictories": 2,
		"totalLosses": 1,
		"totalDraws": 2,
		"goalsFavor": 9,
		"goalsOwn": 6,
		"goalsBalance": 3,
		"efficiency": 53.333333333333336
	},
	{
		"name": "Internacional",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 7,
		"goalsOwn": 6,
		"goalsBalance": 1,
		"efficiency": 66.66666666666666
	},
	{
		"name": "Botafogo",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalLosses": 3,
		"totalDraws": 1,
		"goalsFavor": 3,
		"goalsOwn": 8,
		"goalsBalance": -5,
		"efficiency": 26.666666666666668
	},
	{
		"name": "Ferroviária",
		"totalPoints": 7,
		"totalGames": 5,
		"totalVictories": 2,
		"totalLosses": 2,
		"totalDraws": 1,
		"goalsFavor": 7,
		"goalsOwn": 7,
		"goalsBalance": 0,
		"efficiency": 46.666666666666664
	},
	{
		"name": "Napoli-SC",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalLosses": 3,
		"totalDraws": 2,
		"goalsFavor": 3,
		"goalsOwn": 12,
		"goalsBalance": -9,
		"efficiency": 13.333333333333334
	},
	{
		"name": "Cruzeiro",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalLosses": 3,
		"totalDraws": 1,
		"goalsFavor": 8,
		"goalsOwn": 10,
		"goalsBalance": -2,
		"efficiency": 26.666666666666668
	},
	{
		"name": "Flamengo",
		"totalPoints": 5,
		"totalGames": 5,
		"totalVictories": 1,
		"totalLosses": 2,
		"totalDraws": 2,
		"goalsFavor": 2,
		"goalsOwn": 5,
		"goalsBalance": -3,
		"efficiency": 33.33333333333333
	},
	{
		"name": "Minas Brasília",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalLosses": 3,
		"totalDraws": 2,
		"goalsFavor": 4,
		"goalsOwn": 9,
		"goalsBalance": -5,
		"efficiency": 13.333333333333334
	},
	{
		"name": "Avaí/Kindermann",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalLosses": 3,
		"totalDraws": 1,
		"goalsFavor": 4,
		"goalsOwn": 8,
		"goalsBalance": -4,
		"efficiency": 26.666666666666668
	},
	{
		"name": "São José-SP",
		"totalPoints": 6,
		"totalGames": 5,
		"totalVictories": 2,
		"totalLosses": 3,
		"totalDraws": 0,
		"goalsFavor": 5,
		"goalsOwn": 6,
		"goalsBalance": -1,
		"efficiency": 40
	},
	{
		"name": "Bahia",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalLosses": 3,
		"totalDraws": 2,
		"goalsFavor": 2,
		"goalsOwn": 6,
		"goalsBalance": -4,
		"efficiency": 13.333333333333334
	}
]

const fullLeaderboardSortedMock = [
	{
		"name": "Palmeiras",
		"totalPoints": 13,
		"totalGames": 5,
		"totalVictories": 4,
		"totalLosses": 0,
		"totalDraws": 1,
		"goalsFavor": 17,
		"goalsOwn": 5,
		"goalsBalance": 12,
		"efficiency": 86.66666666666667
	},
	{
		"name": "Corinthians",
		"totalPoints": 12,
		"totalGames": 5,
		"totalVictories": 4,
		"totalLosses": 1,
		"totalDraws": 0,
		"goalsFavor": 12,
		"goalsOwn": 3,
		"goalsBalance": 9,
		"efficiency": 80
	},
	{
		"name": "Santos",
		"totalPoints": 11,
		"totalGames": 5,
		"totalVictories": 3,
		"totalLosses": 0,
		"totalDraws": 2,
		"goalsFavor": 12,
		"goalsOwn": 6,
		"goalsBalance": 6,
		"efficiency": 73.33333333333333
	},
	{
		"name": "Grêmio",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 9,
		"goalsOwn": 8,
		"goalsBalance": 1,
		"efficiency": 66.66666666666666
	},
	{
		"name": "Internacional",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 7,
		"goalsOwn": 6,
		"goalsBalance": 1,
		"efficiency": 66.66666666666666
	},
	{
		"name": "Real Brasília",
		"totalPoints": 10,
		"totalGames": 5,
		"totalVictories": 3,
		"totalLosses": 1,
		"totalDraws": 1,
		"goalsFavor": 5,
		"goalsOwn": 4,
		"goalsBalance": 1,
		"efficiency": 66.66666666666666
	},
	{
		"name": "São Paulo",
		"totalPoints": 8,
		"totalGames": 5,
		"totalVictories": 2,
		"totalLosses": 1,
		"totalDraws": 2,
		"goalsFavor": 9,
		"goalsOwn": 6,
		"goalsBalance": 3,
		"efficiency": 53.333333333333336
	},
	{
		"name": "Ferroviária",
		"totalPoints": 7,
		"totalGames": 5,
		"totalVictories": 2,
		"totalLosses": 2,
		"totalDraws": 1,
		"goalsFavor": 7,
		"goalsOwn": 7,
		"goalsBalance": 0,
		"efficiency": 46.666666666666664
	},
	{
		"name": "São José-SP",
		"totalPoints": 6,
		"totalGames": 5,
		"totalVictories": 2,
		"totalLosses": 3,
		"totalDraws": 0,
		"goalsFavor": 5,
		"goalsOwn": 6,
		"goalsBalance": -1,
		"efficiency": 40
	},
	{
		"name": "Flamengo",
		"totalPoints": 5,
		"totalGames": 5,
		"totalVictories": 1,
		"totalLosses": 2,
		"totalDraws": 2,
		"goalsFavor": 2,
		"goalsOwn": 5,
		"goalsBalance": -3,
		"efficiency": 33.33333333333333
	},
	{
		"name": "Cruzeiro",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalLosses": 3,
		"totalDraws": 1,
		"goalsFavor": 8,
		"goalsOwn": 10,
		"goalsBalance": -2,
		"efficiency": 26.666666666666668
	},
	{
		"name": "Avaí/Kindermann",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalLosses": 3,
		"totalDraws": 1,
		"goalsFavor": 4,
		"goalsOwn": 8,
		"goalsBalance": -4,
		"efficiency": 26.666666666666668
	},
	{
		"name": "Botafogo",
		"totalPoints": 4,
		"totalGames": 5,
		"totalVictories": 1,
		"totalLosses": 3,
		"totalDraws": 1,
		"goalsFavor": 3,
		"goalsOwn": 8,
		"goalsBalance": -5,
		"efficiency": 26.666666666666668
	},
	{
		"name": "Bahia",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalLosses": 3,
		"totalDraws": 2,
		"goalsFavor": 2,
		"goalsOwn": 6,
		"goalsBalance": -4,
		"efficiency": 13.333333333333334
	},
	{
		"name": "Minas Brasília",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalLosses": 3,
		"totalDraws": 2,
		"goalsFavor": 4,
		"goalsOwn": 9,
		"goalsBalance": -5,
		"efficiency": 13.333333333333334
	},
	{
		"name": "Napoli-SC",
		"totalPoints": 2,
		"totalGames": 5,
		"totalVictories": 0,
		"totalLosses": 3,
		"totalDraws": 2,
		"goalsFavor": 3,
		"goalsOwn": 12,
		"goalsBalance": -9,
		"efficiency": 13.333333333333334
	}
]

const mocks = {
    homeMatchMock,
    sortedHomeTeamMock,
    awayMatchMock,
    sortedAwayMock,
    fullLeaderboardMock,
    fullLeaderboardSortedMock,
}

export default mocks;