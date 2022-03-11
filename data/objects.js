var objectsDb = {
	hero1 : {
		w: 90,
		h: 50,
		jumpHeight: 22,
		jumpSpeed: 28,
		speed: 10,
		grav: 1,
		hp:100,
		armor: 10,
		damage: 10,
		freeStat: 10,
		stats: [
			{ number: 10, name: "strength" },
			{ number: 10, name: "dexterity" },
			{ number: 10, name: "vitality"}
		],
		anim: 
			[ 
				{ name: "runR", src: "./img/elf_run.png", frames: 9 },
				{ name: "strikeR", src: "./img/Elf-attack-r.png", frames: 10, speed: 5 },
				{ name: "runL", src: "./img/elf_run_revers.png", frames: 9},
				{ name: "idleR", src: "./img/Elf_IDLE.png", frames: 1},
				{ name: "idleL", src: "./img/Elf_IDLE_revers.png", frames: 1 },
				{ name: "upR", src: "./img/Elf_JUMP.png", frames: 1 },
				{ name: "upL", src: "./img/Elf_JUMP_revers.png", frames: 1 },
				{ name: "downR", src: "./img/Elf_IDLE.png", frames: 1 },
				{ name: "downL", src: "./img/Elf_IDLE_revers.png", frames: 1 }
			]

	},
	hero: {
		w: 80,
		h: 45,
		jumpHeight: 10,
		jumpSpeed: 10,
		speed: 3,
		grav: 1,
		maxHp: 100,
		armor: 10,
		damage: 10,
		freeStat: 10,
		stats: [
			{ number: 1, name: "Strength" },// урон в ближнем бою, обьем выносливости
			{ number: 1, name: "Reaction" },//Снижение урона, скорость атаки
			{ number: 1, name: "Concentration" },//Увеличение урона, скорость каста, увеличение урона в дальнем бою. 
			{ number: 1, name: "Sensibility" },//Количество маны, скорость регена, защита от магии
			{ number: 1, name: "Constitution" },//увеличение хп,реген хп и выносливости. 
			{ number: 1, name: "Will" },//увеличение магического урона, снижение стоимости скилов по воле.
		],
		anim:
			[
				{ name: "runR", src: "./img/Knight_run.png", frames: 8 },
				{ name: "strikeR", src: "./img/Knight_attack.png", frames: 10, speed: 5 },
				{ name: "strikeL", src: "./img/Knight_attack_revers.png", frames: 10, speed: 5 },
				{ name: "runL", src: "./img/Knight_run_revers.png", frames: 8 },
				{ name: "idleR", src: "./img/Knight_idle.png", frames: 10 },
				{ name: "idleL", src: "./img/Knight_idle_revers.png", frames: 10 },
				{ name: "upR", src: "./img/Knight_jump.png", frames: 1 },
				{ name: "upL", src: "./img/Knight_jump_revers.png", frames: 1 },
				{ name: "downR", src: "./img/Knight_idle.png", frames: 10 },
				{ name: "downL", src: "./img/Knight_idle_revers.png", frames: 10 },
				{ name: "hitR", src: "./img/Knight_hurt.png", frames: 10 },
				{ name: "hitL", src: "./img/Knight_hurt_revers.png", frames: 10 }
			]

	},
	23: {
		name:"torch",
		w: 60,
		h: 100,
		state: "idle",
		speed: 50,
		anim:
			[
				{ name: "idle", src: "./img/torch.png", frames: 5 }
			]
	},
	arrow1: {
		w: 90,
		h: 14,
		grav: 0.05,
		speed:30,
		anim: 	
			[
				{name: "idleR", src: "./img/arrowR.png", frames: 1},
				{name: "idleL", src: "./img/arrowL.png", frames: 1}
			]
		// time: 30

	},
	//spear: {
	arrow: {
		w: 50,
		h: 8,
		grav: 0.1,
		speed: 13,
		anim:
			[
				{ name: "idleR", src: "./img/spear.png", frames: 1 },
				{ name: "idleL", src: "./img/spear_revers.png", frames: 1 }
			]
		// time: 30

	},
	cave_texture: {
		w: 850,
		h: 220,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/cave_texture.png", frames: 1 }
			]
	},
	coin: {
		w:20,
		h:20,
		anim: 
			[
				{name: "idle", src: "./img/coin_4.png", frames: 5}
			]
	},
	20: {
		w:20,
		h:20,
		state: "idle",
		block: true,
		action: "pickCoin",
		anim: 
			[
				{name: "idle", src: "./img/coin_4.png", frames: 5}
			]
	},
	// 30: {
	// 	w:150,
	// 	h:150,
	// 	state: "idle",
	// 	anim: 
	// 		[
	// 			{name: "idle", src: "./img/chest_1.png", frames: 1}
	// 		]
	// },
	21: {
		w:40,
		h: 40,
		shift_y: 50,
		shift_x: 50,
		name: "chest",
		state: "idle",
		block: false,
		action: "showUseIcon",
		type: "container",
		loot: [{name: 20, chance: 100}, {name: 22, chance: 70}],
		anim: 
			[
				{ name: "idle", src: "./img/chest_1.png", frames: 1 },
				{ name: "Open", src: "./img/chest_open.png", frames: 6 },
				{ name: "idleOpen", src: "./img/chest_idle_open.png", frames: 1 }
			]
	},
	22: {
		w:30,
		h:30,
		shift_y:70,
		name: "apple",
		state: "idle",
		block: false,
		action: "showUseIcon",
		type: "item",
		anim: 
			[
				{name: "idle", src: "./img/apple.png", frames: 1}
			]
	},
	24: {
		w:20,
		h:20,
		// shift_y:70,
		name: "pick_icon",
		state: "idle",
		block: false,
		// action: "pickItem",
		anim: 
			[
				{name: "idle", src: "./img/e.png", frames: 1}
			]
	},
	strike: {
		w: 140,
		h: 140,
		grav: 0,
		anim: 	
			[
				{name: "idleR", src: "./img/strike_1R.png", frames: 18, speed: 2},
				{name: "idleL", src: "./img/strike_1L.png", frames: 18, speed: 2}
			],
		time: 30

	},
	slime: {
		w: 160,
		h: 120,
		hp: 50,
		// hp: 9999999,
		ai: true,
		speed: 3,
		armor: 10,
		damage: 10,
		attackSpeed: 50,
		direction: "",
		loot: [{name: 20, chance: 100}, {name: 'chest', chance: 70}],
		grav : 1,
			anim: 	
		[
			{name: "idle", src: "./img/slime-2.png", frames: 4, speed: 12},
			{name: "hit", src: "./img/slime-hit.png", frames: 2, speed: 12},
			{name: "strikeR", src: "./img/slime-strike.png", frames: 5, speed: 12},
			{name: "strikeL", src: "./img/slime-strike.png", frames: 5, speed: 12},
			{name: "strike", src: "./img/slime-strike.png", frames: 5, speed: 12}


			// {name: "idleR", src: "./img/strike_1R.png", frames: 18, speed: 2},
			// {name: "idleL", src: "./img/strike_1L.png", frames: 18, speed: 2}
		]

	},
	40: {
		w: 150,
		h: 150,
		hp: 150,
		// hp: 9999999,
		ai: true,
		speed: 4,
		armor: 15,
		damage: 20,
		attackSpeed: 50,
		level: 2,

		stats: [
			{ number: 1, name: "Strength" },// урон в ближнем бою, обьем выносливости
			{ number: 1, name: "Reaction" },//Снижение урона, скорость атаки
			{ number: 1, name: "Concentration" },//Увеличение урона, скорость каста, увеличение урона в дальнем бою. 
			{ number: 1, name: "Sensibility" },//Количество маны, скорость регена, защита от магии
			{ number: 1, name: "Constitution" },//увеличение хп,реген хп и выносливости. 
			{ number: 1, name: "Will" },//увеличение магического урона, снижение стоимости скилов по воле.
		],
		state: "idle",
		direction: "",
		exp: 15,
		actions: {},
		loot: [{ name: 20, chance: 100 }, { name: 'chest', chance: 70 }],
		grav: 1,
		anim:
			[
				{ name: "idle", src: "./img/mobs/Skeleton/Skeleton_Idle.png", frames: 4, speed: 12 },
				{ name: "hit", src: "./img/mobs/Skeleton/Skeleton_Hit.png", frames: 4, speed: 12 },
				{ name: "strikeR", src: "./img/mobs/Skeleton/Skeleton_AttackR.png", frames: 8, speed: 12 },
				{ name: "strikeL", src: "./img/mobs/Skeleton/Skeleton_AttackL.png", frames: 8, speed: 12 },
				{ name: "strike", src: "./img/mobs/Skeleton/Skeleton_Attack.png", frames: 8, speed: 12 }


				// {name: "idleR", src: "./img/strike_1R.png", frames: 18, speed: 2},
				// {name: "idleL", src: "./img/strike_1L.png", frames: 18, speed: 2}
			]

	}, 
		30: {
		w: 50,
		h: 50,
		hp: 50,
		// hp: 9999999,
		ai: true,
		speed: 3,
		armor: 10,
		damage: 10,
		attackSpeed: 100,
		level: 2,
		stats: [
			{ number: 1, name: "Strength" },// урон в ближнем бою, обьем выносливости
			{ number: 1, name: "Reaction" },//Снижение урона, скорость атаки
			{ number: 1, name: "Concentration" },//Увеличение урона, скорость каста, увеличение урона в дальнем бою. 
			{ number: 1, name: "Sensibility" },//Количество маны, скорость регена, защита от магии
			{ number: 1, name: "Constitution" },//увеличение хп,реген хп и выносливости. 
			{ number: 1, name: "Will" },//увеличение магического урона, снижение стоимости скилов по воле.
		],
		
		direction: "",
		exp:20,
		actions: {},
		loot: [{name: 20, chance: 100}, {name: 'chest', chance: 70}],
		grav : 1,
		anim: 	
		[
			{name: "idle", src: "./img/slime-2.png", frames: 4, speed: 12},
			{name: "hit", src: "./img/slime-hit.png", frames: 2, speed: 12},
			{name: "strikeR", src: "./img/slime-strike.png", frames: 5, speed: 12},
			{name: "strikeL", src: "./img/slime-strike.png", frames: 5, speed: 12},
			{name: "strike", src: "./img/slime-strike.png", frames: 5, speed: 12}
		]

	},
		31: {
		w: 64,
		h: 48,
		hp: 50,
		// hp: 9999999,
		ai: true,
		speed: 3,
		armor: 10,
		damage: 10,
		attackSpeed: 100,
		level: 2,
		stats: [
			{ number: 1, name: "Strength" },// урон в ближнем бою, обьем выносливости
			{ number: 1, name: "Reaction" },//Снижение урона, скорость атаки
			{ number: 1, name: "Concentration" },//Увеличение урона, скорость каста, увеличение урона в дальнем бою. 
			{ number: 1, name: "Sensibility" },//Количество маны, скорость регена, защита от магии
			{ number: 1, name: "Constitution" },//увеличение хп,реген хп и выносливости. 
			{ number: 1, name: "Will" },//увеличение магического урона, снижение стоимости скилов по воле.
		],
		state: "idle",
		direction: "",
		exp:10,
		actions: {},
		loot: [{name: 20, chance: 100}, {name: 'chest', chance: 70}],
		grav : 1,
			anim: 	
		[
			{name: "idle", src: "./img/slime-green.png", frames: 4, speed: 12},
			{name: "hit", src: "./img/slime-hit.png", frames: 2, speed: 12},
			{name: "strikeR", src: "./img/slime-strike.png", frames: 5, speed: 12},
			{name: "strikeL", src: "./img/slime-strike.png", frames: 5, speed: 12},
			{name: "strike", src: "./img/slime-strike.png", frames: 5, speed: 12}
		]

	},
	32: {
		w: 64,
		h: 48,
		hp: 50,
		// hp: 9999999,
		ai: true,
		speed: 3,
		armor: 10,
		damage: 10,
		attackSpeed: 100,
		level: 2,
		stats: [
			{ number: 1, name: "Strength" },// урон в ближнем бою, обьем выносливости
			{ number: 1, name: "Reaction" },//Снижение урона, скорость атаки
			{ number: 1, name: "Concentration" },//Увеличение урона, скорость каста, увеличение урона в дальнем бою. 
			{ number: 1, name: "Sensibility" },//Количество маны, скорость регена, защита от магии
			{ number: 1, name: "Constitution" },//увеличение хп,реген хп и выносливости. 
			{ number: 1, name: "Will" },//увеличение магического урона, снижение стоимости скилов по воле.
		],
		state: "idle",
		direction: "",
		exp:5,
		actions: {},
		loot: [{name: 20, chance: 100}, {name: 'chest', chance: 70}],
		grav : 1,
			anim: 	
		[
			{name: "idle", src: "./img/slime-yellow.png", frames: 4, speed: 12},
			{name: "hit", src: "./img/slime-hit.png", frames: 2, speed: 12},
			{name: "strikeR", src: "./img/slime-strike.png", frames: 5, speed: 12},
			{name: "strikeL", src: "./img/slime-strike.png", frames: 5, speed: 12},
			{name: "strike", src: "./img/slime-strike.png", frames: 5, speed: 12}
		]

	},
	33: {
		w: 64,
		h: 48,
		shift_y:30,
		hp: 50,
		// hp: 9999999,
		ai: true,
		speed: 1,
		armor: 10,
		damage: 10,
		attackSpeed: 100,
		level: 2,
		stats: [
			{ number: 1, name: "Strength" },// урон в ближнем бою, обьем выносливости
			{ number: 1, name: "Reaction" },//Снижение урона, скорость атаки
			{ number: 1, name: "Concentration" },//Увеличение урона, скорость каста, увеличение урона в дальнем бою. 
			{ number: 1, name: "Sensibility" },//Количество маны, скорость регена, защита от магии
			{ number: 1, name: "Constitution" },//увеличение хп,реген хп и выносливости. 
			{ number: 1, name: "Will" },//увеличение магического урона, снижение стоимости скилов по воле.
		],
		state: "idle",
		direction: "",
		exp:5,
		actions: {},
		loot: [{name: 20, chance: 100}, {name: 'chest', chance: 70}],
		grav : 1,
			anim: 	
		[
			{name: "idle", src: "./img/slime-red.png", frames: 4, speed: 12},
			{name: "hit", src: "./img/slime-hit.png", frames: 2, speed: 12},
			{name: "strikeR", src: "./img/slime-strike.png", frames: 5, speed: 12},
			{name: "strikeL", src: "./img/slime-strike.png", frames: 5, speed: 12},
			{name: "strike", src: "./img/slime-strike.png", frames: 5, speed: 12}
		]

	},
	ground_m: {
		w: 100,
		h: 100,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Ground_11.png", frames: 1 }
			]
	},
	ground_r: {
		w: 100,
		h: 100,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Ground_12.png", frames: 1 }
			]
	},
	barrel: {
		w: 100,
		h: 100,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Wooden_Barrel.png", frames: 1 }
			]
	},
	bubble: {
		w: 100,
		h: 100,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Bubble.png", frames: 1 }
			]
	},
	1: {
		name:'left_wall', 
		w: 100,
		h: 100,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Ground_13.png", frames: 1 }
			]
	},
	2: {
		name:'floor_m', 
		w: 100,
		h: 100,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Ground_11.png", frames: 1 }
			]
	},
	3: {
		name:'right_wall', 
		w: 100,
		h: 100,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Ground-Additional_01.png", frames: 1 }
			]
	},
	7: {
		name:'floor_right', 
		w: 100,
		h: 100,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Ground_12.png", frames: 1 }
			]
	},
	4: {
		name:'floor_left', 
		w: 100,
		h: 100,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Ground_10.png", frames: 1 }
			]
	},
	5: {
		name:'floor_left_corner', 
		w: 100,
		h: 100,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Ground_07.png", frames: 1 }
			]
	},
	6: {
		name:'full_block', 
		w: 100,
		h: 100,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/platforms/Ground_06.png", frames: 1 }
			]
	},
	10 : {
		name:'grass',
		type:2,
		w:100,
		h:100,
		posY:0,
		posX:0,
		absW:50,
		absH:50,
		destroy: false,
		block: false,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/terrain/Grass.png", frames: 1 }
			]
	},
	11 : {
		name:'grassFlowers',
		type:2,
		w:100,
		h:100,
		posY:140,
		posX:0,
		absW:50,
		absH:50,
		destroy: false,
		block: false,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/terrain/Grass.png", frames: 1 }
			]
	},
		12 : {
		name:'rock',
		type:2,
		w:100,
		h:100,
		posY:140,
		posX:140,
		absW:32,
		absH:32,
		destroy: false,
		block: false,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/terrain/Grass.png", frames: 1 }
			]
	},
		13 : {
		name:'stone',
		type:2,
		w:100,
		h:100,
		posY:96,
		posX:96,
		absW:32,
		absH:32,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/terrain/Stone.png", frames: 1 }
			]
	},
		14 : {
		name:'bush',
		type:2,
		w:70,
		h:70,
		shift_y:30,
		posX:182,
		posY:210,
		absW:60,
		absH:80,
		destroy: false,
		block: true,
		state: "idle",
		anim:
			[
				{ name: "idle", src: "./img/terrain/Plant.png", frames: 1 }
			]
	}

}


