const stats = ["HP", "STR", "MAG", "SKL", "SPD", "LCK", "DEF", "RES", "CON", "MOV"];
const statsfull = ["HP", "Strength", "Magic", "Skill", "Speed", "Luck", "Defense", "Resistance", "Constitution", "Movement"];

const characters = ["Ike", "Titania", "Oscar", "Boyd", "Rhys", "Shinon", "Gatrie", "Soren", "Mia", "Ilyana", "Mist", "Rolf", "Marcia", "Lethe", "Mordecai", "Volke", "Kieran", "Brom", "Nephenee", "Zihark", "Sothe (Base)", "Sothe (Bl+Rand)", "Sothe (Bl+Fix)",
	"Jill", "Astrid", "Makalov", "Tormod", "Muarim", "Stefan", "Devdan", "Tanith", "Reyson", "Janaff", "Ulki", "Calill", "Tauroneo", "Ranulf", "Haar", "Bastian", "Lucia", "Geoffrey", "Largo", "Elincia", "Nasir", "Ena", "Tibarn", "Naesala", "Giffca"];

const charGrowths = new Map([
	["Ike", 		[75, 50, 20, 50, 55, 35, 40, 40, 0, 0]],
	["Titania", 	[80, 45, 25, 60, 50, 45, 40, 45, 0, 0]],
	["Oscar", 		[55, 45, 20, 50, 45, 30, 35, 30, 0, 0]],
	["Boyd", 		[75, 60,  5, 50, 45, 35, 25, 25, 0, 0]],
	["Rhys", 		[40,  4, 60, 50, 40, 50, 25, 55, 0, 0]],
	["Shinon",		[75, 65, 20, 70, 65, 35, 50, 40, 0, 0]],
	["Gatrie", 		[80, 55,  5, 55, 25, 25, 60, 30, 0, 0]],
	["Soren", 		[45,  5, 60, 55, 40, 30, 15, 55, 0, 0]],
	["Mia", 		[50, 40, 30, 45, 60, 45, 20, 25, 0, 0]],
	["Ilyana", 		[45, 25, 50, 45, 30, 45, 15, 50, 0, 0]],
	["Mist", 		[50, 35, 50, 25, 40, 60, 15, 40, 0, 0]],
	["Rolf", 		[60, 40, 20, 45, 50, 40, 30, 25, 0, 0]],
	["Marcia", 		[55, 40, 20, 50, 55, 40, 25, 30, 0, 0]],
	["Lethe", 		[130,50,  5, 65, 70, 50, 40, 25, 0, 0]],
	["Mordecai", 	[150,65,  0, 55, 50, 40, 40, 20, 0, 0]],
	["Volke", 		[65, 50,  0, 55, 50, 40, 40, 20, 0, 0]],
	["Kieran", 		[60, 50, 15, 50, 40, 25, 40, 30, 0, 0]],
	["Brom", 		[75, 45, 10, 50, 25, 20, 55, 25, 0, 0]],
	["Nephenee", 	[55, 40, 20, 55, 55, 25, 35, 25, 0, 0]],
	["Zihark", 		[55, 45, 15, 50, 60, 40, 30, 20, 0, 0]],
	["Sothe (Base)", 	[60,    55,    10,    70,    65,    55,    35,    30,    0, 0]],
	["Sothe (Bl+Rand)", [84,    79.75, 19,    91,    87.75, 79.75, 57.75, 51,    0, 0]],
	["Sothe (Bl+Fix)", 	[600/9, 550/9, 100/9, 700/9, 650/9, 550/9, 350/9, 300/9, 0, 0]],
	["Jill", 		[60, 40, 30, 45, 45, 25, 35, 30, 0, 0]],
	["Astrid", 		[45, 40, 20, 55, 50, 40, 30, 25, 0, 0]],
	["Makalov", 	[60, 55,  5, 45, 50, 25, 45, 20, 0, 0]],
	["Tormod", 		[50, 20, 45, 40, 45, 35, 25, 45, 0, 0]],
	["Muarim", 		[145,70,  5, 70, 55, 35, 60, 45, 0, 0]],
	["Stefan", 		[70, 50, 20, 40, 55, 25, 35, 30, 0, 0]],
	["Devdan", 		[75, 60, 30, 40, 35, 40, 45, 25, 0, 0]],
	["Tanith", 		[60, 40, 35, 70, 40, 30, 25, 30, 0, 0]],
	["Reyson", 		[65,  5, 40, 50, 50, 60, 15, 50, 0, 0]],
	["Janaff", 		[130,55, 10, 70, 65, 40, 30, 25, 0, 0]],
	["Ulki", 		[140,60, 10, 65, 60, 35, 35, 25, 0, 0]],
	["Calill", 		[50, 25, 45, 45, 45, 30, 40, 35, 0, 0]],
	["Tauroneo", 	[60, 55,  5, 50, 30, 15, 60, 40, 0, 0]],
	["Ranulf", 		[130,50,  0, 55, 55, 35, 35, 20, 0, 0]],
	["Haar", 		[65, 60,  5, 60, 35, 15, 45, 20, 0, 0]],
	["Bastian", 	[55, 40, 65, 65, 55, 30, 35, 50, 0, 0]],
	["Lucia", 		[70, 50, 30, 70, 65, 50, 40, 40, 0, 0]],
	["Geoffrey", 	[65, 50, 25, 55, 55, 20, 45, 45, 0, 0]],
	["Largo", 		[80, 70,  5, 45, 45, 30, 25, 20, 0, 0]],
	["Elincia", 	[60, 30, 80, 45, 40, 60, 25, 35, 0, 0]],
	["Nasir", 		[150,50, 10, 55, 45, 35, 60, 25, 0, 0]],
	["Ena", 		[145,35,  5, 50, 60, 40, 40, 30, 0, 0]],
	["Tibarn", 		[145,70,  5, 70, 65, 50, 60, 25, 0, 0]],
	["Naesala", 	[135,60, 40, 70, 75, 20, 55, 35, 0, 0]],
	["Giffca", 		[160,75,  5, 70, 60, 40, 50, 30, 0, 0]]
]);

const genders = new Map([
	["Ike", 		"M"],
	["Titania", 	"F"],
	["Oscar", 		"M"],
	["Boyd", 		"M"],
	["Rhys", 		"M"],
	["Shinon",		"M"],
	["Gatrie", 		"M"],
	["Soren", 		"M"],
	["Mia", 		"F"],
	["Ilyana", 		"F"],
	["Mist", 		"F"],
	["Rolf", 		"M"],
	["Marcia", 		"F"],
	["Lethe", 		"F"],
	["Mordecai", 	"M"],
	["Volke", 		"M"],
	["Kieran", 		"M"],
	["Brom", 		"M"],
	["Nephenee", 	"F"],
	["Zihark", 		"M"],
	["Sothe", 		"M"],
	["Jill", 		"F"],
	["Astrid", 		"F"],
	["Makalov", 	"M"],
	["Tormod", 		"M"],
	["Muarim", 		"M"],
	["Stefan", 		"M"],
	["Devdan", 		"M"],
	["Tanith", 		"F"],
	["Reyson", 		"M"],
	["Janaff", 		"M"],
	["Ulki", 		"M"],
	["Calill", 		"F"],
	["Tauroneo", 	"M"],
	["Ranulf", 		"M"],
	["Haar", 		"M"],
	["Bastian", 	"M"],
	["Lucia", 		"F"],
	["Geoffrey", 	"M"],
	["Largo", 		"M"],
	["Elincia", 	"F"],
	["Nasir", 		"M"],
	["Ena", 		"F"],
	["Tibarn", 		"M"],
	["Naesala", 	"M"],
	["Giffca", 		"M"]
]);

const promotions = new Map([
	["Ike", 			"N"],
	["Titania", 		"P"],
	["Oscar", 			"N"],
	["Boyd", 			"N"],
	["Rhys", 			"N"],
	["Shinon",			"P"],
	["Gatrie", 			"N"],
	["Soren", 			"N"],
	["Mia", 			"N"],
	["Ilyana", 			"N"],
	["Mist", 			"N"],
	["Rolf", 			"N"],
	["Marcia", 			"N"],
	["Lethe", 			"B"],
	["Mordecai", 		"B"],
	["Volke", 			"N"],
	["Kieran", 			"N"],
	["Brom", 			"N"],
	["Nephenee", 		"N"],
	["Zihark", 			"N"],
	["Sothe (Base)", 	"P"],
	["Sothe (Bl+Rand)", "P"],
	["Sothe (Bl+Fix)", 	"P"],
	["Jill", 			"N"],
	["Astrid", 			"N"],
	["Makalov", 		"N"],
	["Tormod", 			"N"],
	["Muarim", 			"B"],
	["Stefan", 			"P"],
	["Devdan", 			"P"],
	["Tanith", 			"P"],
	["Reyson", 			"B"],
	["Janaff", 			"B"],
	["Ulki", 			"B"],
	["Calill", 			"P"],
	["Tauroneo", 		"P"],
	["Ranulf", 			"B"],
	["Haar", 			"P"],
	["Bastian", 		"P"],
	["Lucia", 			"P"],
	["Geoffrey", 		"P"],
	["Largo", 			"P"],
	["Elincia", 		"P"],
	["Nasir", 			"B"],
	["Ena", 			"B"],
	["Tibarn", 			"B"],
	["Naesala", 		"B"],
	["Giffca", 			"B"]
]);

const charBases = new Map([
	["Ike", 			[ 1, 19,  5,  1,  6,  7,  6,  5,  0,  9,  6]],
	["Titania", 		[ 1, 33, 12,  4, 13, 14, 11, 11,  7,  8,  9]],
	["Oscar", 			[ 3, 26,  6,  1,  6,  7,  5,  8,  0, 10,  8]],
	["Boyd", 			[ 2, 30,  7,  9,  4,  6,  4,  5,  0, 10,  6]],
	["Rhys", 			[ 4, 22,  0, 10,  8,  5,  8,  0, 14,  8,  5]],
	["Shinon",			[ 1, 32,  9,  6, 15, 13,  9,  9,  6,  9,  7]],
	["Gatrie", 			[ 9, 31, 12,  0,  6,  5,  5, 14,  0, 12,  5]],
	["Soren", 			[ 1, 18,  0,  6,  8,  8,  5,  2,  7,  6,  5]],
	["Mia", 			[ 6, 21,  7,  0, 10, 13,  6,  7,  2,  6,  6]],
	["Ilyana", 			[ 6, 20,  1,  8, 10,  9,  6,  3, 10,  5,  5]],
	["Mist", 			[ 1, 16,  1,  4,  4,  7,  6,  2,  7,  5,  5]],
	["Rolf", 			[ 1, 18,  5,  0,  8,  6,  4,  6,  2,  4,  6]],
	["Marcia", 			[ 5, 20,  8,  0,  7, 11,  4,  8,  6,  6,  8]],
	["Lethe", 			[ 3, 34, 12,  4, 10, 12,  1,  9,  7,  6,  7]],
	["Mordecai", 		[ 2, 41, 15,  2,  8,  8, 10, 13,  4, 18,  7]],
	["Volke", 			[10, 25, 12,  0, 13, 13,  7,  7,  3, 11,  7]],
	["Kieran", 			[12, 30, 11,  1, 10, 12,  8, 10,  1, 10,  8]],
	["Brom", 			[ 8, 28, 10,  1,  9,  7,  4, 13,  2, 13,  5]],
	["Nephenee", 		[ 7, 22,  8,  2, 10, 11,  6,  9,  3,  8,  8]],
	["Zihark", 			[10, 25, 10,  1, 13, 15,  6,  7,  0,  9,  6]],
	["Jill", 			[ 8, 24, 11,  0, 10,  9,  6, 11,  2,  7,  8]],
	["Sothe (Base)", 	[ 1, 20,  5,  1,  7, 11,  5,  4,  0,  6,  7]],
	["Sothe (Bl+Rand)", [ 1, 20,  5,  1,  7, 11,  5,  4,  0,  6,  7]],
	["Sothe (Bl+Fix)",	[ 1, 20,  5,  1,  7, 11,  5,  4,  0,  6,  7]],
	["Astrid", 			[ 1, 20,  6,  2,  6,  7,  3,  5,  4,  7,  8]],
	["Makalov", 		[10, 30,  9,  2,  7, 10,  8, 10,  2, 10,  8]],
	["Tormod", 			[ 7, 20,  2, 10,  9,  9,  8,  4,  9,  6,  5]],
	["Muarim", 			[ 9, 45, 16,  4, 13, 15, 11, 12,  5, 14,  7]],
	["Stefan", 			[ 8, 38, 19,  8, 27, 25,  5, 12,  9, 13,  7]],
	["Devdan", 			[ 4, 36, 14,  7, 15, 13, 16, 11, 10, 12,  7]],
	["Tanith", 			[10, 32, 16, 10, 18, 24, 18, 15, 13,  8,  9]],
	["Reyson", 			[ 3, 22,  1, 10, 11, 14, 15,  2, 20,  8,  5]],
	["Janaff", 			[ 8, 39, 13,  5, 15, 17, 16, 11, 10,  6,  6]],
	["Ulki", 			[ 7, 14, 15,  4, 14, 12, 10, 14,  9, 10,  6]],
	["Calill", 			[ 6, 32,  8, 19, 18, 18, 16,  8, 17,  7,  6]],
	["Tauroneo", 		[14, 48, 22, 11, 18, 13, 14, 22, 14, 10,  6]],
	["Ranulf", 			[ 9, 46, 19,  4, 17, 17, 13, 17, 6,   9,  7]],
	["Haar", 			[11, 47, 21,  8, 19, 17, 12, 20, 10, 13,  9]],
	["Bastian", 		[13, 35, 12, 19, 21, 16, 15, 12, 20, 10,  6]],
	["Lucia", 			[12, 36, 15, 12, 21, 23, 16, 10,  8,  8,  7]],
	["Geoffrey", 		[11, 43, 18,  9, 17, 19, 12, 21,  9, 11,  9]],
	["Largo", 			[ 7, 52, 21,  4, 21, 20, 12, 10,  3, 15,  7]],
	["Elincia", 		[ 1, 27,  9, 12, 16, 18, 15, 11, 15,  6,  9]],
	["Nasir", 			[18, 56, 20, 11, 23, 22, 17, 24, 27, 12,  5]],
	["Ena", 			[10, 52, 20,  9, 17, 15, 14, 23, 21,  6,  5]],
	["Tibarn", 			[18, 63, 30, 11, 31, 24, 24, 26, 19, 14,  6]],
	["Naesala", 		[17, 57, 25, 15, 26, 31, 19, 21, 16, 11,  6]],
	["Giffca", 			[20, 68, 32, 10, 28, 25, 22, 25, 16, 17,  7]]
]);

const unpromotedCaps = new Map([
	["Ike", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Oscar", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Boyd", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Rhys", 			[40, 15, 20, 20, 20, 40, 20, 20]],
	["Gatrie", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Soren", 			[40, 10, 20, 20, 20, 40, 10, 20]],
	["Mia", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Ilyana", 			[40, 10, 20, 20, 20, 40, 10, 20]],
	["Mist", 			[40, 15, 20, 20, 20, 40, 20, 20]],
	["Rolf", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Marcia", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Volke", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Kieran", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Brom", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Nephenee", 		[40, 20, 15, 20, 20, 40, 20, 20]],
	["Zihark", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Jill", 			[40, 20, 15, 20, 20, 40, 20, 20]],
	["Astrid",			[40, 20, 15, 20, 20, 40, 20, 15]],
	["Makalov", 		[40, 20, 15, 20, 20, 40, 20, 20]],
	["Tormod", 			[40, 10, 20, 20, 20, 40, 10, 20]]
]);

const promotedCaps = new Map([
	["Ike", 			[60, 26, 20, 27, 28, 40, 24, 22]],
	["Titania", 		[60, 25, 20, 26, 27, 40, 27, 26]],
	["Oscar", 			[60, 26, 20, 26, 27, 40, 27, 25]],
	["Boyd", 			[60, 30, 20, 28, 27, 40, 25, 20]],
	["Rhys", 			[60, 15, 29, 22, 25, 40, 20, 30]],
	["Shinon",			[60, 25, 20, 30, 28, 40, 25, 23]],
	["Gatrie", 			[60, 29, 20, 27, 24, 40, 30, 25]],
	["Soren", 			[60, 15, 30, 28, 28, 40, 20, 28]],
	["Mia", 			[60, 22, 20, 29, 30, 40, 22, 25]],
	["Ilyana", 			[60, 15, 30, 28, 28, 40, 20, 28]],
	["Mist", 			[60, 20, 26, 24, 26, 40, 20, 29]],
	["Rolf", 			[60, 25, 20, 30, 28, 40, 25, 23]],
	["Marcia", 			[60, 23, 20, 26, 28, 40, 24, 27]],
	["Lethe", 			[70, 32, 20, 38, 39, 40, 32, 30]],
	["Mordecai", 		[75, 37, 20, 37, 37, 40, 35, 27]],
	["Volke", 			[60, 23, 20, 30, 30, 40, 22, 20]],
	["Kieran", 			[60, 26, 20, 26, 27, 40, 27, 25]],
	["Brom", 			[60, 29, 20, 27, 24, 40, 30, 25]],
	["Nephenee", 		[60, 25, 20, 28, 26, 40, 28, 25]],
	["Zihark", 			[60, 24, 20, 29, 30, 40, 24, 22]],
	["Jill", 			[60, 27, 20, 26, 27, 40, 27, 25]],
	["Sothe (Base)", 	[40, 20, 15, 20, 20, 40, 20, 20]],
	["Sothe (Bl+Rand)", [40, 20, 15, 20, 20, 40, 20, 20]],
	["Sothe (Bl+Fix)",	[40, 20, 15, 20, 20, 40, 20, 20]],
	["Astrid", 			[60, 25, 20, 26, 27, 40, 27, 26]],
	["Makalov", 		[60, 26, 20, 26, 27, 40, 27, 25]],
	["Tormod", 			[60, 15, 30, 28, 28, 40, 20, 28]],
	["Muarim", 			[75, 37, 20, 37, 37, 40, 35, 27]],
	["Stefan", 			[60, 24, 20, 29, 30, 40, 24, 22]],
	["Devdan", 			[60, 25, 20, 28, 26, 40, 28, 25]],
	["Tanith", 			[60, 23, 20, 26, 28, 40, 24, 27]],
	["Reyson", 			[60, 10, 20, 17, 26, 40, 15, 35]],
	["Janaff", 			[65, 26, 20, 35, 36, 40, 26, 26]],
	["Ulki", 			[65, 26, 20, 35, 36, 40, 26, 26]],
	["Calill", 			[60, 15, 30, 28, 28, 40, 20, 28]],
	["Tauroneo", 		[60, 29, 20, 27, 24, 40, 30, 25]],
	["Ranulf", 			[70, 35, 20, 38, 38, 40, 35, 27]],
	["Haar", 			[60, 29, 20, 28, 26, 40, 29, 22]],
	["Bastian", 		[60, 15, 30, 28, 28, 40, 20, 28]],
	["Lucia", 			[60, 22, 20, 29, 30, 40, 22, 25]],
	["Geoffrey", 		[60, 25, 20, 25, 27, 40, 27, 26]],
	["Largo", 			[60, 30, 20, 24, 28, 40, 26, 20]],
	["Elincia", 		[60, 20, 25, 26, 28, 40, 24, 27]],
	["Nasir", 			[80, 30, 25, 30, 32, 40, 35, 35]],
	["Ena", 			[75, 35, 20, 31, 31, 40, 36, 30]],
	["Tibarn", 			[75, 40, 20, 40, 39, 40, 35, 30]],
	["Naesala", 		[70, 35, 25, 38, 40, 40, 30, 35]],
	["Giffca", 			[80, 32, 20, 35, 33, 40, 35, 27]]
]);

const promotionGains = new Map([
	["Ike", 			[4, 3, 2, 2, 2, 0, 3, 2, 1, 1]],
	["Oscar", 			[3, 2, 2, 2, 2, 0, 2, 3, 1, 1]],
	["Boyd", 			[6, 2, 1, 2, 1, 0, 2, 2, 1, 1]],
	["Rhys", 			[3, 1, 3, 2, 2, 0, 2, 3, 1, 1]],
	["Gatrie", 			[3, 3, 2, 2, 2, 0, 1, 3, 1, 1]],
	["Soren", 			[4, 2, 1, 2, 2, 0, 2, 2, 1, 1]],
	["Mia", 			[4, 1, 2, 2, 2, 0, 2, 2, 1, 1]],
	["Ilyana", 			[4, 2, 1, 2, 2, 0, 2, 2, 1, 2]],
	["Mist", 			[3, 2, 4, 1, 3, 0, 3, 2, 3, 1]],
	["Rolf", 			[3, 3, 2, 2, 2, 0, 2, 2, 1, 1]],
	["Marcia", 			[4, 2, 2, 2, 1, 0, 2, 3, 1, 1]],
	["Volke", 			[2, 2, 1, 3, 2, 0, 2, 2, 0, 1]],
	["Kieran", 			[3, 2, 2, 2, 2, 0, 2, 3, 1, 1]],
	["Brom", 			[3, 3, 2, 2, 2, 0, 1, 3, 1, 1]],
	["Nephenee", 		[4, 2, 1, 2, 2, 0, 2, 2, 1, 1]],
	["Zihark", 			[4, 1, 2, 2, 2, 0, 2, 2, 1, 1]],
	["Jill", 			[5, 2, 1, 2, 2, 0, 2, 1, 1, 1]],
	["Astrid",			[5, 2, 2, 2, 1, 0, 3, 2, 1, 1]],
	["Makalov", 		[3, 2, 2, 2, 2, 0, 2, 3, 1, 1]],
	["Tormod", 			[4, 2, 1, 2, 2, 0, 2, 2, 1, 1]],
]);

const transformations = new Map([
	["Lethe", 		[0, 6, 0, 4, 3, 0, 5, 3, 15, 2]],
	["Mordecai", 	[0, 7, 0, 4, 3, 0, 3, 3, 15, 2]],
	["Muarim", 		[0, 7, 0, 4, 3, 0, 3, 3, 15, 2]],
	["Reyson", 		[0, 0, 5, 3, 4, 0, 1, 5,  6, 2]],
	["Janaff", 		[0, 6, 0, 5, 3, 0, 4, 2, 10, 2]],
	["Ulki", 		[0, 6, 0, 5, 3, 0, 4, 2, 10, 2]],
	["Ranulf", 		[0, 6, 0, 4, 3, 0, 5, 3, 15, 2]],
	["Nasir", 		[0,10, 0, 5, 3, 0, 5, 5, 24, 1]],
	["Ena", 		[0, 5, 4, 4, 4, 0, 5, 5, 12, 1]],
	["Tibarn", 		[0, 7, 1, 5, 3, 0, 3, 1,  8, 2]],
	["Naesala", 	[0, 6, 2, 4, 3, 0, 3, 3,  7, 2]],
	["Giffca", 		[0, 8, 0, 4, 4, 0, 5, 3, 15, 2]]
]);


function updateHit(){
	trueHitRate = ((displayedHit.value * (2 * displayedHit.value + 1) - (Math.abs(displayedHit.value - 50.5) / (displayedHit.value - 50.5) + 1) * ((displayedHit.value - 50) * (2 * displayedHit.value - 99))) / 100).toString() + "%";
	spaces = 1.75*(6 - trueHitRate.length);
	if (displayedHit.value == 100){
		spaces -= 1;
	}
	for (let i = 0; i < spaces; i++){
		trueHitRate += "&nbsp";
	}
	trueHit.innerHTML = trueHitRate;
}

function updateEXP(){
	let levelDifference = enemyLevel.value - playerLevel.value;
	let bonus = 25 - difficulty.selectedIndex * 5;
	if (difficulty.selectedIndex == 0){
		bonus += 5;
	}
	let expGain = Math.floor((21 + levelDifference) / 2);
	if (difficulty.selectedIndex == 0){
		expGain += 5;
	}
	expGain = Math.max(expGain, 1);
	if (killEXP.checked){
		expGain += Math.max(levelDifference + bonus + bossEXP.checked * (bonus + 10) + thiefEXP.checked * 20, 0);
	}
	if (expGrowth.selectedIndex == 1){
		expGain = Math.floor(expGain * 2 / 3);
	}
	else if (expGrowth.selectedIndex == 2){
		expGain *= 2;
	}
	expGain = Math.min(expGain, 100);
	exp.innerHTML = expGain + " EXP";
}

function updateCharAverage(){
	if (charAverage.value != "Ike"){
		while(promoLevelAverage.options.length > 11){
			promoLevelAverage.remove(11);
		}
	}
	else{
		for (let i = 9; i >= 1; i--) {
			promoLevelAverage.options[20-i] = new Option(i);
		}
	}
	if (charAverage.value == "Reyson"){
		if(transformation.options.length > 2){
			transformation.remove(2);
		}
	}
	else{
		transformation.options[2] = new Option("Demi Band");
	}
	updateAverageTable();
}

function updateAverageTable(){
	char = charAverage.value;
	if (char.includes("'")) {
		char = char.replaceAll("'", "")
	}
	var averageGrowths = document.getElementById("averageGrowths");
	while (averageGrowths.rows.length > 2){
		averageGrowths.deleteRow(1);
	}
	row = averageGrowths.insertRow(1);
	level = row.insertCell(0);
	hp = row.insertCell(1);
	str = row.insertCell(2);
	mag = row.insertCell(3);
	skl = row.insertCell(4);
	spd = row.insertCell(5);
	lck = row.insertCell(6);
	def = row.insertCell(7);
	res = row.insertCell(8);
	con = row.insertCell(9);
	mov = row.insertCell(10);
	level.innerHTML = "<b>Base stats</b>";
	hp.innerHTML = "<span id=\"aBaseHP\"></span>";
	str.innerHTML = "<span id=\"aBaseSTR\"></span>";
	mag.innerHTML = "<span id=\"aBaseMAG\"></span>";
	skl.innerHTML = "<span id=\"aBaseSKL\"></span>";
	spd.innerHTML = "<span id=\"aBaseSPD\"></span>";
	lck.innerHTML = "<span id=\"aBaseLCK\"></span>";
	def.innerHTML = "<span id=\"aBaseDEF\"></span>";
	res.innerHTML = "<span id=\"aBaseRES\"></span>";
	con.innerHTML = "<span id=\"aBaseCON\"></span>";
	mov.innerHTML = "<span id=\"aBaseMOV\"></span>";
	for (let i = 0; i < 10; i++){
		let stat = charBases.get(char)[i+1];
		if (promotions.get(char) == "B" && transformation.value == "Transformed"){
			stat += transformations.get(char)[i];
		}
		else if (promotions.get(char) == "B" && transformation.value == "Demi Band"){
			stat += Math.ceil(transformations.get(char)[i] / 2);
		}
		this["aBase"+(stats[i])].innerHTML = stat;
	}
	currentHP = charBases.get(char)[1];
	currentSTR = charBases.get(char)[2];
	currentMAG = charBases.get(char)[3];
	currentSKL = charBases.get(char)[4];
	currentSPD = charBases.get(char)[5];
	currentLCK = charBases.get(char)[6];
	currentDEF = charBases.get(char)[7];
	currentRES = charBases.get(char)[8];
	currentCON = charBases.get(char)[9];
	currentMOV = charBases.get(char)[10];
	if(promotions.get(char) == "N"){
		let baseLevel = charBases.get(char)[0];
		for (let i = baseLevel-1; i < promoLevelAverage.value - 1; i++){
			row = averageGrowths.insertRow(averageGrowths.rows.length - 1);
			let level = row.insertCell(0);
			let hp = row.insertCell(1);
			let str = row.insertCell(2);
			let mag = row.insertCell(3);
			let skl = row.insertCell(4);
			let spd = row.insertCell(5);
			let lck = row.insertCell(6);
			let def = row.insertCell(7);
			let res = row.insertCell(8);
			let con = row.insertCell(9);
			let mov = row.insertCell(10);
			level.innerHTML = (i+1).toString() + " → " + (i+2).toString();
			hp.innerHTML = "<span id=\"level"+(i+2).toString()+"HPavg\"></span>";
			str.innerHTML = "<span id=\"level"+(i+2).toString()+"STRavg\"></span>";
			mag.innerHTML = "<span id=\"level"+(i+2).toString()+"MAGavg\"></span>";
			skl.innerHTML = "<span id=\"level"+(i+2).toString()+"SKLavg\"></span>";
			spd.innerHTML = "<span id=\"level"+(i+2).toString()+"SPDavg\"></span>";
			lck.innerHTML = "<span id=\"level"+(i+2).toString()+"LCKavg\"></span>";
			def.innerHTML = "<span id=\"level"+(i+2).toString()+"DEFavg\"></span>";
			res.innerHTML = "<span id=\"level"+(i+2).toString()+"RESavg\"></span>";
			con.innerHTML = "<span id=\"level"+(i+2).toString()+"CONavg\"></span>";
			mov.innerHTML = "<span id=\"level"+(i+2).toString()+"MOVavg\"></span>";
			for (let j = 0; j < 10; j++){
				this["current"+stats[j]] += charGrowths.get(char)[j] / 100;
				this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;

				if (this["current"+stats[j]] >= unpromotedCaps.get(char)[j]){
					this["current"+stats[j]] = unpromotedCaps.get(char)[j];
					this["level"+(i+2).toString()+stats[j]+"avg"].innerHTML = "<b>"+this["current"+stats[j]]+"</b>";
				}
				else{
					this["level"+(i+2).toString()+stats[j]+"avg"].innerHTML = this["current"+stats[j]];
				}
			}
		}
		row = averageGrowths.insertRow(averageGrowths.rows.length - 1);
		let level = row.insertCell(0);
		let hp = row.insertCell(1);
		let str = row.insertCell(2);
		let mag = row.insertCell(3);
		let skl = row.insertCell(4);
		let spd = row.insertCell(5);
		let lck = row.insertCell(6);
		let def = row.insertCell(7);
		let res = row.insertCell(8);
		let con = row.insertCell(9);
		let mov = row.insertCell(10);
		level.innerHTML = "<b>Promotion</b>";
		currentHP += promotionGains.get(char)[0];
		currentSTR += promotionGains.get(char)[1];
		currentMAG += promotionGains.get(char)[2];
		currentSKL += promotionGains.get(char)[3];
		currentSPD += promotionGains.get(char)[4];
		currentLCK += promotionGains.get(char)[5];
		currentDEF += promotionGains.get(char)[6];
		currentRES += promotionGains.get(char)[7];
		currentCON += promotionGains.get(char)[8];
		currentMOV += promotionGains.get(char)[9];
		hp.innerHTML = "<b>"+Math.round(currentHP * 100) / 100+"</b>";
		str.innerHTML = "<b>"+Math.round(currentSTR * 100) / 100+"</b>";
		mag.innerHTML = "<b>"+Math.round(currentMAG * 100) / 100+"</b>";
		skl.innerHTML = "<b>"+Math.round(currentSKL * 100) / 100+"</b>";
		spd.innerHTML = "<b>"+Math.round(currentSPD * 100) / 100+"</b>";
		lck.innerHTML = "<b>"+Math.round(currentLCK * 100) / 100+"</b>";
		def.innerHTML = "<b>"+Math.round(currentDEF * 100) / 100+"</b>";
		res.innerHTML = "<b>"+Math.round(currentRES * 100) / 100+"</b>";
		con.innerHTML = "<b>"+Math.round(currentCON * 100) / 100+"</b>";
		mov.innerHTML = "<b>"+Math.round(currentMOV * 100) / 100+"</b>";
	}
	let baseLevel = 1;
	if(promotions.get(char) != "N"){
		baseLevel = charBases.get(char)[0];
	}
	for (let i = baseLevel-1; i < 19; i++){
		row = averageGrowths.insertRow(averageGrowths.rows.length - 1);
		let level = row.insertCell(0);
		let hp = row.insertCell(1);
		let str = row.insertCell(2);
		let mag = row.insertCell(3);
		let skl = row.insertCell(4);
		let spd = row.insertCell(5);
		let lck = row.insertCell(6);
		let def = row.insertCell(7);
		let res = row.insertCell(8);
		let con = row.insertCell(9);
		let mov = row.insertCell(10);
		level.innerHTML = (i+1).toString() + " → " + (i+2).toString();
		hp.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"HPavg\"></span>";
		str.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"STRavg\"></span>";
		mag.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"MAGavg\"></span>";
		skl.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"SKLavg\"></span>";
		spd.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"SPDavg\"></span>";
		lck.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"LCKavg\"></span>";
		def.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"DEFavg\"></span>";
		res.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"RESavg\"></span>";
		con.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"CONavg\"></span>";
		mov.innerHTML = "<span id=\"Plevel"+(i+2).toString()+"MOVavg\"></span>";
		for (let j = 0; j < 10; j++){
			this["current"+stats[j]] += charGrowths.get(char)[j] / 100;
			this["current"+stats[j]] = Math.round(this["current"+stats[j]] * 100) / 100;
			if (this["current"+stats[j]] >= promotedCaps.get(char)[j]){
				this["current"+stats[j]] = promotedCaps.get(char)[j];
			}
			let stat = this["current"+stats[j]];
			if (promotions.get(char) == "B" && transformation.value == "Transformed"){
				stat += transformations.get(char)[j];
			}
			else if (promotions.get(char) == "B" && transformation.value == "Demi Band"){
				stat += Math.ceil(transformations.get(char)[j] / 2);
			}
			if (this["current"+stats[j]] == promotedCaps.get(char)[j]){
				this["Plevel"+(i+2).toString()+stats[j]+"avg"].innerHTML = "<b>"+stat+"</b>";
			}
			else{
				this["Plevel"+(i+2).toString()+stats[j]+"avg"].innerHTML = stat;
			}
		}
	}
}

var displayedHit = document.getElementById("displayedHit");
var trueHit = document.getElementById("trueHit");
for (let i = 0; i <= 100; i++){
	displayedHit.options[i] = new Option(100-i);
}
displayedHit.selectedIndex = 25;
updateHit();

var playerLevel = document.getElementById("playerLevel");
var enemyLevel = document.getElementById("enemyLevel");
var killEXP = document.getElementById("killEXP");
var bossEXP = document.getElementById("bossEXP");
var thiefEXP = document.getElementById("thiefEXP");
var expGrowth = document.getElementById("expGrowth");
var difficulty = document.getElementById("difficulty");
var exp = document.getElementById("exp");
for (let i = 0; i < 40; i++){
	playerLevel.options[i] = new Option(40-i);
	enemyLevel.options[i] = new Option(40-i);
}
playerLevel.selectedIndex = 20;
enemyLevel.selectedIndex = 20;
killEXP.checked = true;
bossEXP.checked = false;
thiefEXP.checked = false;
expGrowth.selectedIndex = 0;
difficulty.selectedIndex = 2;
updateEXP();

var charAverage = document.getElementById("charAverage");
var promoLevelAverage = document.getElementById("promoLevelAverage");
var transformation = document.getElementById("transformation");
transformation.selectedIndex = 0;
for (let i = 0; i < characters.length; i++) {
	charAverage.options[i] = new Option(characters[i]);
}
for (let i = 20; i >= 1; i--) {
	promoLevelAverage.options[20-i] = new Option(i);
}
updateAverageTable();