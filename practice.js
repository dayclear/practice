// 1.投票
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
var line;
while(line1=read_line()){
	var n=parseInt(line1);
	var line2=read_line();
	line2=line2.split(" ");
	var ticket=0;
	for (var i = 0; i < line2.length; i++) {
		line2[i]=parseInt(line2[i]);
	}
	while(n>1){
		line2.sort(function(a,b){
			return a-b;
		})
		var index=line2.indexOf(dong);
		if(n-index==1){
			break;
		}else{
			dong++;
			line2[n-1]--;
			line2[index]=dong;
			ticket++;
		}
	}
	print(ticket);
}

// var n;
// while(n =  read_line()){  	
// 	var arr = read_line().split(' ');
// 	fn1(n,arr);
// }
// function fn1(n,arr) {
//     var dong = arr[0];
//     var index = 0;
//     var i = 0;
//     while(n>1){
//         arr.sort(compare);
//         index = arr.indexOf(dong);
//         if(n - index === 1){
//             break;
//         }
//         dong++;
//         i++;
//         arr[index] = dong;
//         arr[n-1]--;
//     }
//     print(i);
// }
// function compare(a,b) {
//     return a-b;
// }