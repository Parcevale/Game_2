var home_loc = {
	// roomOne: {
		enemies: [
			{id: 33, count: 20},
			{id: 31, count: 10},
			{id: 30, count: 40}
		],
		enemy: [],
		w:64,
		h:64,
		mainTiles: [10,10,10,11,11,12],
		obstacles: [
		],
		fragments: [
			{
				x: 1,
				y: 1,
				name: "first",
				map: [
					[11,11,11,11,[11,14]],
					[11,13,13,13,11],
					[11,13,[12,21],[33,12,33,33,33],11],
					[11,13,13,13,11],
					[11,11,11,11,11]
				]
			},
			{
				x: 7,
				y: 5,
				name: "second",
				map: [
					[[11,14],[11],12,[11,14],[11,14]],
					[11,[11],12,[11],11],
					[12,12,[12,21],12,12],
					[11,[11],12,[11],11],
					[[11,14],[11,14],12,[11,14],[11,14]]
				]
			}
		]
		// map: [
		// 	[13,10,10,11,11,10,11,10,10,10,11,11,10,11,10,10,10,11,11,10,13]
		// 	// [13,10,10,11,11,10,11,10,10,10,11,11,10,11,10,10,10,11,11,10,13],
		// 	// [13,10,10,11,11,10,11,10,10,10,11,11,10,11,10,10,10,11,11,10,11],
		// 	// [13,12,12,12,12,10,12,12,12,12,12,12,32,12,12,12,12,12,12,10,13],
		// 	// [13,10,10,11,11,10,11,33,10,10,11,11,10,11,10,10,10,11,11,10,11],
		// 	// [13,10,10,11,11,10,11,13,10,10,11,11,10,11,10,10,10,11,11,10,11],
		// 	// [13,10,10,11,11,10,11,10,10,10,11,11,10,11,10,10,10,11,11,10,11]
		// ]

	// }
}