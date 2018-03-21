var day = 0; //дней прошло 0-6, 7,8,9
var that; //ссылка на внутренний this

//строки турнирных таблиц - this.grA1 ...
var tA = [];
var tB = []; 

//запоминаем объекты глобального объекта teams в порядке формирования ТТ первого дня
var tA1 = [];
var tB1 = [];

//запоминаем объекты teams в конце 7 дня (первые четыре из каждой группы)
var tA7 = [];
var tB7 = [];

//строки в играх по дням - this.gnA1...
var gameDayA = [];
var gameDayB = [];

//отсортированные команды по grpos;
var arr_grpos_A = [];
var arr_grpos_B = [];


//ежедневное расписание - команды согласно расположению в tA1(B1) 
var r1 = [0, 7, 1, 6, 2, 5, 3, 4];
var r2 = [0, 5, 1, 4, 2, 3, 6, 7];
var r3 = [0, 3, 1, 2, 4, 6, 5, 7];
var r4 = [0, 6, 1, 7, 2, 4, 3, 5];
var r5 = [0, 4, 1, 3, 2, 7, 5, 6];
var r6 = [0, 2, 1, 5, 3, 6, 4, 7];
var r7 = [0, 1, 2, 6, 3, 7, 4, 5];

//массив названий массивов расписания 
var r = [r1, r2, r3, r4, r5, r6, r7];

//функция размещения команд (5 кадр) в игровом дне согласно расписания дня. НО ЭТО ТОЛЬКО для Первого дня?
function gameDay() {
		for (var i = 0; i < 4; i++) {
			//название 1 команды = выбираем из массива расписаний
			gameDayA[i].team1.text = tA1[r[day][i*2]].name;
			//ссылка на объект-команду
			gameDayA[i].obj1 = tA1[r[day][i*2]];
			gameDayA[i].team2.text = tA1[r[day][i*2+1]].name;
			gameDayA[i].obj2 = tA1[r[day][i*2+1]];
			gameDayB[i].team1.text = tB1[r[day][i*2]].name;
			gameDayB[i].obj1 = tB1[r[day][i*2]];
			gameDayB[i].team2.text = tB1[r[day][i*2+1]].name;
			gameDayB[i].obj2 = tB1[r[day][i*2+1]];
			
			gameDayA[i].goals1.text = 0;
			gameDayA[i].goals2.text = 0;
			gameDayB[i].goals1.text = 0;
			gameDayB[i].goals2.text = 0;
			
			gameDayA[i].att1 = tA1[r[day][i*2]].att; //запоминаем показатель аттаки первой команды
			gameDayA[i].def1 = tA1[r[day][i*2]].def;
			gameDayA[i].att2 = tA1[r[day][i*2+1]].att; //второй
			gameDayA[i].def2 = tA1[r[day][i*2+1]].def; 
			gameDayB[i].att1 = tB1[r[day][i*2]].att; //запоминаем показатель аттаки первой команды
			gameDayB[i].def1 = tB1[r[day][i*2]].def;
			gameDayB[i].att2 = tB1[r[day][i*2+1]].att; //второй
			gameDayB[i].def2 = tB1[r[day][i*2+1]].def;
		}

	day++;
}


//функция мгновенного определения исхода матча (5 кадр) в свойства score и время забития голов заносим в массив
//подсчет всех параметров кроме grpos
function saveAllGoalsDay() {
	for (var i = 0; i < 4; i++) {
		//вычисляем количество голов
		gameDayA[i].score1 = getScore(gameDayA[i].att1, gameDayA[i].def2);
		gameDayA[i].score2 = getScore(gameDayA[i].att2, gameDayA[i].def1);
		gameDayB[i].score1 = getScore(gameDayB[i].att1, gameDayB[i].def2);
		gameDayB[i].score2 = getScore(gameDayB[i].att2, gameDayB[i].def1);
		
		//увеличиваем на гол при ничье
		if (gameDayA[i].score1 == gameDayA[i].score2) {
			if(gameDayA[i].att1 > gameDayA[i].att2){
				gameDayA[i].score1++;
				gameDayA[i].obj1.ot = true; //ОТ или буллиты
			} else {
				gameDayA[i].score2++;
				gameDayA[i].obj2.ot = true;
			}
		}
		if (gameDayB[i].score1 == gameDayB[i].score2) {
			if(gameDayB[i].att1 > gameDayB[i].att2){
				gameDayB[i].score1++;
				gameDayB[i].obj1.ot = true;
			} else {
				gameDayB[i].score2++;
				gameDayB[i].obj2.ot = true;
			}
		}
	
		//получаем массив минут голов
		gameDayA[i].score1Time = addRandomTime(gameDayA[i].score1);
		gameDayA[i].score2Time = addRandomTime(gameDayA[i].score2);
		gameDayB[i].score1Time = addRandomTime(gameDayB[i].score1);
		gameDayB[i].score2Time = addRandomTime(gameDayB[i].score2);
		
		//разница голов команд 1 и 2
		gameDayA[i].delta = gameDayA[i].score1 - gameDayA[i].score2;
		gameDayB[i].delta = gameDayB[i].score1 - gameDayB[i].score2;
		
		// расчитываем очки победы, заполняем столбкик победы и поражения
		if (gameDayA[i].delta>0){
			if (gameDayA[i].obj1.ot) {
				gameDayA[i].obj1.points += 1;
			} else {
				gameDayA[i].obj1.points += 2;
			}	
			gameDayA[i].obj1.pk.push(gameDayA[i].obj2.pos); //добавляем в массив побежденных команд информацию позицию
			gameDayA[i].obj1.pob ++;
			gameDayA[i].obj2.por ++;
		} else if(gameDayA[i].delta<0){
			if (gameDayA[i].obj2.ot) {
				gameDayA[i].obj2.points += 1;
			} else {
				gameDayA[i].obj2.points += 2;
			}
			gameDayA[i].obj2.pk.push(gameDayA[i].obj1.pos);
			gameDayA[i].obj2.pob ++;
			gameDayA[i].obj1.por ++;
		}
		
		if (gameDayB[i].delta>0){
			if (gameDayB[i].obj1.ot) {
				gameDayB[i].obj1.points += 1;
			} else {
				gameDayB[i].obj1.points += 2;
			}
			gameDayB[i].obj1.pk.push(gameDayB[i].obj2.pos);
			gameDayB[i].obj1.pob ++;
			gameDayB[i].obj2.por ++;
		} else if(gameDayB[i].delta<0) {
			if (gameDayB[i].obj2.ot) {
				gameDayB[i].obj2.points += 1;
			} else {
				gameDayB[i].obj2.points += 2;
			}
			gameDayB[i].obj2.pk.push(gameDayB[i].obj1.pos);
			gameDayB[i].obj2.pob ++;
			gameDayB[i].obj1.por ++;
		}		
		
		//заполняем голы			
		gameDayA[i].obj1.goals1 += gameDayA[i].score1;
		gameDayA[i].obj1.goals2 += gameDayA[i].score2;
		gameDayA[i].obj2.goals1 += gameDayA[i].score2;
		gameDayA[i].obj2.goals2 += gameDayA[i].score1;
		gameDayB[i].obj1.goals1 += gameDayB[i].score1;
		gameDayB[i].obj1.goals2 += gameDayB[i].score2;
		gameDayB[i].obj2.goals1 += gameDayB[i].score2;
		gameDayB[i].obj2.goals2 += gameDayB[i].score1;
	}
}

//РАССТАНОВКА КОМАНД ПО ПОЗИЦИЯ В ГРУППЕ СОГЛАСНО POINTS И ЛИЧНЫМ ВСТРЕЧАМ
function getGrpos() {
	arr_grpos_A = tA1.slice();  //копируем массив объектов, сортируем объекты по поинт
	arr_grpos_B = tB1.slice();
	
	arr_grpos_A.sort(set_grpos); //сортируем массив по функции
	arr_grpos_B.sort(set_grpos);

	//в объекты массивов внесем grpos согласно позиции в массиве!
	for (var i = 0; i < 8; i++) {
		arr_grpos_A[i].grpos = (i+1);
		arr_grpos_B[i].grpos = (i+1);
	}
	//testArray(arr_grpos_A); //ТЕСТИРУЕМ МАССИВ
	//testArray(arr_grpos_B);
	
	
	//grpos как место в массиве в зависимости от личной встречи(?) разницы голов и очков
	for (team in teams){
		if (teams[team].group == 'A') {					
			tA[teams[team].grpos-1].tf_name.text = teams[team].name;
			tA[teams[team].grpos-1].tf_games.text = day;
			tA[teams[team].grpos-1].tf_pob.text = teams[team].pob;
			tA[teams[team].grpos-1].tf_por.text = teams[team].por;
			tA[teams[team].grpos-1].tf_goals1.text = teams[team].goals1;
			tA[teams[team].grpos-1].tf_goals2.text = teams[team].goals2;
			tA[teams[team].grpos-1].tf_points.text = teams[team].points;
		} else {
			tB[teams[team].grpos-1].tf_name.text = teams[team].name;
			tB[teams[team].grpos-1].tf_games.text = day;
			tB[teams[team].grpos-1].tf_pob.text = teams[team].pob;
			tB[teams[team].grpos-1].tf_por.text = teams[team].por;
			tB[teams[team].grpos-1].tf_goals1.text = teams[team].goals1;
			tB[teams[team].grpos-1].tf_goals2.text = teams[team].goals2;
			tB[teams[team].grpos-1].tf_points.text = teams[team].points;
		}
	}
	
}

function gameBlock(that) {
	that.block_1.team1.text = tA7[0].name;
	that.block_1.team2.text = tB7[3].name;
	
	that.block_2.team1.text = tA7[1].name;
	that.block_2.team2.text = tB7[2].name;
	
	that.block_3.team1.text = tA7[2].name;
	that.block_3.team2.text = tB7[1].name;
	
	that.block_4.team1.text = tA7[3].name;
	that.block_4.team2.text = tB7[0].name;
	
	//проставляем нолики
	that.block_1.goals1.text = 0;
	that.block_1.goals2.text = 0;
	
	that.block_2.goals1.text = 0;
	that.block_2.goals2.text = 0;
	
	that.block_3.goals1.text = 0;
	that.block_3.goals2.text = 0;
	
	that.block_4.goals1.text = 0;
	that.block_4.goals2.text = 0;

}



function set_grpos(obj_a,obj_b){
	if (obj_a.points == obj_b.points) {
	
	//console.log("показатели равны");
	//УЧЕТ ЛИЧНЫХ ВСТРЕЧ - ПРОВЕРИТЬ ПОЗДНЕЕ ПРИ ПЕРЕХОДЕ К НЕСКОЛЬКИМ ДНЯМ//проверил плохо работает
	//если личных встреч не было, то сортирвка по разнице шайб	
		for (var i = 0; i < obj_a.pk.length; i++) {
			if(obj_a.pk[i] == obj_b.pos) return -1; 
		}
		
		for (var i = 0; i < obj_b.pk.length; i++) {
			if(obj_b.pk[i] == obj_a.pos) return 1; 
		}
		
		//у кого больше разница шайб
		return ((obj_b.goals1-obj_b.goals2)-(obj_a.goals1-obj_a.goals2));
		
	} else {
		return (obj_b.points - obj_a.points);//т.к. обратный порядок
	}
}

//подставляем показатель атаки первой команды (88) и показатель обороны второй (74) - получаем сколько голов забьет 1 команда
function getScore (v1, v2) {
	return Math.round(0.3 + 7.4*((Math.random()+0.15)*v1*(100-Math.random()*v2)/10000));
}

//функция тест массива объектов -  имена объектов
function testArray(arr){
	for (var i = 0; i < arr.length; i++) {
		console.log("arr[" + i + "].name = " + arr[i].name);
	}
}

//функция получение случайного(ых) чисел в пределах от 1 до 60. возвращает массив
function addRandomTime (num) {
	var arr = [];	
	for (var i = 0; i < num; i++) {
		arr.push(Math.ceil(Math.random() * 58) + 2);
	}
	//по возрастанию отсортировать
	arr.sort(function(a, b) {
		return a - b;
	});
	
	//исключить повторяющиеся элементы
	for (var j = 0; j < (arr.length-1); j++) {
		if(arr[j] == arr[j+1]) arr[j] --;
	}
	
	return arr;
}


var teams = {
Canada: 		{pos: 1,att: 95,def: 89,form: 86,mor: 92,name:'Канада',grpos: 1, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Russia: 		{pos: 2,att: 94,def: 88,form: 84,mor: 92,name:'Россия',grpos: 1, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Sweden: 		{pos: 3,att: 85,def: 83,form: 82,mor: 86,name:'Швеция',grpos: 2, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Finland: 		{pos: 4,att: 84,def: 84,form: 84,mor: 86,name:'Финляндия',grpos: 2, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Czech: 			{pos: 5,att: 79,def: 77,form: 76,mor: 80,name:'Чехия',grpos: 3, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Usa: 			{pos: 6,att: 80,def: 78,form: 84,mor: 84,name:'США',grpos: 3, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Germany: 		{pos: 7,att: 74,def: 73,form: 72,mor: 70,name:'Германия',grpos: 4, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Switzerland: 	{pos: 8,att: 70,def: 71,form: 74,mor: 76,name:'Швейцария',grpos: 4, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Norway: 		{pos: 9,att: 65,def: 62,form: 68,mor: 70,name:'Норвегия',grpos: 5, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Slovakia: 		{pos:10,att: 64,def: 58,form: 66,mor: 68,name:'Словакия',grpos: 5, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Belarus: 		{pos:11,att: 63,def: 60,form: 70,mor: 68,name:'Беларусь',grpos: 6, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
France: 		{pos:12,att: 59,def: 57,form: 66,mor: 64,name:'Франция',grpos: 6, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Latvia: 		{pos:13,att: 57,def: 53,form: 64,mor: 66,name:'Латвия',grpos: 7, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Denmark: 		{pos:14,att: 52,def: 52,form: 62,mor: 62,name:'Дания',grpos: 7, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Slovenia: 		{pos:15,att: 54,def: 55,form: 66,mor: 60,name:'Словения',grpos: 8, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]},
Kazakhstan: 	{pos:16,att: 48,def: 49,form: 62,mor: 56,name:'Казахстан',grpos: 8, pob: 0, por: 0, goals1: 0, goals2: 0, points:0, group: '', pk:[]}
}
//pk - массив побежденных команд записываем pos



/*
1.
*/