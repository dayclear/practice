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