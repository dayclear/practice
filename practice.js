// 1.投票(jd)
// 小东和其他小朋友正在玩一个关于选举的游戏。选举是通过投票的
//方式进行的，得票最多的人将获胜。
// 小东是编号为1的候选者，此外还有其他的候选者参加选举。
//根据初步的调查情况，所有准备投票的小朋友都有一定的投票倾向
//性，小东如果要获得胜利，必须争取部分准备为其他候选人投票的
//小朋友。由于小东的资源较为有限，她希望用最小的代价赢得
//胜利，请你帮忙计算她最少需要争取的选票数。
// 输入有若干组，每组包含两行，第一行为一个正整数n（2<=n<=100）
// 表示候选者的数量，第二行为每个候选人预期得到的选票数，
// 以空格分开，每人的预期得票数在1到1000之间（包含1和1000）。
// 经过小东的争取后，可能出现候选人得票数为0或超过1000的情况。
// var line;
// while(line1=read_line()){
// 	var n=parseInt(line1);
// 	var line2=read_line();
// 	line2=line2.split(" ");
//   	var dong=line2[0];
// 	var ticket=0;
// 	while(n>1){
// 		line2.sort(compare);
// 		var index=line2.indexOf(dong);
// 		if(n-index==1){
// 			break;
// 		}else{
// 			dong++;
// 			line2[n-1]--;
// 			line2[index]=dong;
// 			ticket++;
// 		}
// 	}
// 	print(ticket);
// }
// function compare(a,b){
// 	return a-b;
// }

// 2.股票清单(jd)
// 输入有若干组，每组的第一行为两个正整数n和s（1<=n<=1000，
// 1<=s<=50），分别表示委托数和最抢手的清单数，接下来的n行为
// 具体的委托信息，每行包含3部分，第一部分为一个字母‘B’或‘S’，
// 表示买入或卖出，后两部分为两个整数p和q，表示报价和数量。
// 任何卖出委托的报价都比买入委托的报价高。
// 6 2
// B 10 3
// S 50 2
// S 40 1
// S 50 6
// B 20 4
// B 25 10
// 输出不超过2s行合并委托清单，格式与输入相同。 
// S 50 8
// S 40 1
// B 25 10
// B 20 4

// var line1=0;
// while(line1=read_line()){
// 	line1=line1.split(" ");
// 	var n=line1[0];
// 	var s=line1[1];
// 	var sale={};
// 	var buy={};
// 	for (var i = 0; i < n; i++) {
// 		var line2=read_line().split(" ");
// 		var type=line2[0];
// 		var p=+line2[1];
// 		var q=+line2[2];
// 		if(type=="S"){
// 			if(!sale[p]){
// 				sale[p]=q;
// 			}else{
// 				sale[p]+=q;
// 			}
// 		}else{
// 			if(!buy[p]){
// 				buy[p]=q;
// 			}else{
// 				buy[p]+=q;
// 			}
// 		}
// 	}
// 	var salek=[];
// 	for(var k in sale){
// 		salek.push(k);
// 	}
// 	salek.sort(compare);
// 	if(salek.length>=s*2){
// 		for (var i = 0; i < s*2; i++) {
// 			print("S "+salek[i]+" "+sale[salek[i]]);
// 		}
// 	}else{
// 		for (var i = 0; i < salek.length; i++) {
// 			print("S "+salek[i]+" "+sale[salek[i]]);
// 		}
// 		var buyk=[];
// 		for(var k in buy){
// 		buyk.push(k);
// 		}
// 		buyk.sort(compare);
// 		if(buyk.length>=s*2-salek.length){
// 			for (var i = 0; i < s*2-salek.length; i++) {
// 				print("B "+buyk[i]+" "+buy[buyk[i]]);
// 			}
// 		}else{
// 			for (var i = 0; i < buyk.length; i++) {
// 				print("B "+buyk[i]+" "+buy[buyk[i]]);
// 			}
// 		}
// 	}
// }
// function compare(a,b){
// 	return b-a;
// }

// 3.路径规划
// 每次移动方向可以用“L, R, U, D, LU, LD, RU, RD”之一表达，
// 分别表示向“左、右、上、下、左上、左下、右上、右下”移动一步。 
// var line1;
// while(line1=read_line()){
// 	line1=line1.split("");
// 	var sAlp=parseInt(line1[0],16);
// 	var sNum=line1[1];
// 	var line2=read_line().split("");
// 	var aAlp=parseInt(line2[0],16);
// 	var aNum=line2[1];
// 	var res=[];
// 	while(sAlp!=aAlp || sNum!=aNum){
// 		var step="";
// 		if(sAlp>aAlp){
// 			step+="L";
// 			sAlp--;
// 		}else if(sAlp<aAlp){
// 			step+="R"
// 			sAlp++;
// 		}

// 		if(sNum>aNum){
// 			step+="D";
// 			sNum--;
// 		}else if(sNum<aNum){
// 			step+="U";
// 			sNum++;
// 		}

// 		res.push(step);
// 	}
// 	print(res.length);
// 	for (var i = 0; i < res.length; i++) {
// 		print(res[i]);
// 	}
// }

// 4.备考
// 输入中有多组测试数据。每组测试数据的第一行包含两个整数d和
// sumTime，1<=d<=30, 0<=sumTime<=240，分别表示小东复习的天数
// 以及每天用于复习的时间之和。紧随其后的d行中，每行包含两个
// 空格分隔的整数，为小东父亲要求小东在这一天用于复习时间的
// 范围iminTime和imaxTime，0<=iminTime<=imaxTime<=8。

// var line1;
// while(line1=read_line()){
// 	line1=line1.split(" ");
// 	var d=line1[0];
// 	var sumTime=+line1[1];
// 	var times=[];
// 	var sumMin=0;
// 	var sumMax=0;
// 	for (var i = 0; i < d; i++) {
// 		var line=read_line().split(" ");
// 		var min=+line[0];
// 		var max=+line[1];
//       	var diff=max-min;
// 		times.push({
// 			"min":min,
// 			"max":max,
// 			"diff":diff
// 		});
// 		sumMin+=min;
// 		sumMax+=max;
// 	}
// 	var result=[];
// 	if(sumMin<=sumTime && sumMax>=sumTime){
// 		var sur=sumTime-sumMin;
// 		print("Yes")
// 		for (var i = 0; i < times.length; i++) {
// 			if(sur!=0){
// 				if(sur>=times[i].diff){
// 					result.push(times[i].max);
// 					sur-=times[i].diff;
// 				}else{
// 					result.push(times[i].min+sur)
// 					sur=0;
// 				}
// 			}else{
// 				result.push(times[i].min);
// 			}
// 		}
// 		print(result.join(" "))
// 	}else{
// 		print("No");
// 	}
// }

// 4.棋
// 游戏在一个3X3的棋盘上进行，每个棋盘格单元处于空白、画叉或
// 画圈状态中的一种，你的任务是确定下一轮由谁下棋:
// 1：轮到先手下棋；
// 2：轮到后手下棋；
// 或者是判定游戏的状态：
// x：给定的棋局不是合法的棋局；
// 1 won：先手获胜；
// 2 won：后手获胜；
// Draw：平局；
// 输入中有多组测试数据。每组测试数据包含三行，每行均由字母“.”、
// “X”、“0”构成，“.”代表空白、“X”代表画叉、“0”代表画圈。
// 对每组测试数据，在单独的一行中输出六种评判结果之一：
// 1, 2, x, 1 won, 2 won, draw。 

// var line1;
// var os=0,xs=0,dots=0;
// while(line1=read_line()){
// 	os=0;xs=0;dots=0;
// 	var chess=[];
// 	chess[0]=[];
// 	chess[1]=[];
// 	chess[2]=[];
// 	line1=line1.split("");
// 	for (var i = 0; i < line1.length; i++) {	
// 		chess[0].push(line1[i]);
// 		judge(line1[i]);
// 	}
// 	var line2=read_line().split("");
// 	for (var i = 0; i < line2.length; i++) {
// 		chess[1].push(line2[i]);
// 		judge(line2[i]);
// 	}
// 	var line3=read_line().split("");
// 	for (var i = 0; i < line3.length; i++) {
// 		chess[2].push(line3[i]);
// 		judge(line3[i]);
// 	}
// 	var won1=false;
// 	var won2=false;
// 	if(os-xs>0 || os-xs<-1){
// 		print("x");
// 	}else{
// 		won1=judge2(chess,"X");
// 		won2=judge2(chess,"0");
// 		if(won1==true && won2==true){
// 			print("x");
// 		}else if(won1==true && xs-os==1){
// 			print("1 won");
// 		}else if(won1==true && xs-os==0){
// 			print("x");
// 		}else if(won2==true && xs-os==0){
// 			print("2 won");
// 		}else if(won2==true && xs-os==1){
// 			print("x");
// 		}else if(os+xs==9){
// 			print("draw");
// 		}else if(os==xs){
// 			print("1");
// 		}else{
// 			print("2");
// 		}
// 	}
// }

// function judge(ele){
// 	if(ele=="0"){
// 		os++;
// 	}else if(ele=="X"){
// 		xs++;
// 	}else{
// 		dots++;
// 	}
// }

// function judge2(chess,ele){
// 	var b=false;

// 	for (var i = 0; i < 3; i++) {
// 		if ((chess[i][0] == chess[i][1] &&
// 				chess[i][1] == chess[i][2] &&
// 				chess[i][2] == ele)||
// 				(chess[1][i] == chess[2][i] &&
// 				chess[2][i] == chess[0][i] &&
// 				chess[2][i] == ele)){
// 			b=true;
// 		}
// 	}
// 	if((chess[0][0] == chess[1][1] &&
// 			chess[1][1] == chess[2][2] &&
// 			chess[2][2] == ele) ||
// 			(chess[0][2] == chess[1][1] &&
// 			chess[2][0] == chess[1][1] &&
// 			chess[2][0] == ele)){
// 		b=true;
// 	}
// 	return b;
// }

//排列
function permutate(array, permutatedArray) {
	if (!permutatedArray) {
		permutatedArray = [];
	}
	if (array.length > 1) {
		var elementCur = array.shift();
		permutate(array, permutatedArray);
		var permutatedArrayLen = permutatedArray.length;
		for (var j = 0; j < permutatedArrayLen; j++) {
			var p = permutatedArray.shift();
			for (var i = 0; i <= p.length; i++) {
				var r = p.slice(0);
				r.splice(i, 0, elementCur);
				permutatedArray.push(r)
			}
		}
	} else {
		permutatedArray.push([array[0]]);
	}
	return permutatedArray;
}

//组合
function choose(arr, size) {
	var allResult = [];
	(function(arr, size, result) {
		var arrLen = arr.length;
		if (size > arrLen) {
			return;
		}
		if (size == arrLen) {
			allResult.push([].concat(result, arr))
		} else {
			for (var i = 0; i < arrLen; i++) {
				var newResult = [].concat(result);
				newResult.push(arr[i]);

				if (size == 1) {
					allResult.push(newResult);
				} else {
					var newArr = [].concat(arr);
					newArr.splice(0, i + 1);
					arguments.callee(newArr, size - 1, newResult);
				}
			}
		}
	})(arr, size, []);
	return allResult;
}
