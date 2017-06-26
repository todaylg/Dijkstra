/*
* License:  The MIT License (MIT) Andrew Hayward,todaylg
*/

class Dijkstra {
    constructor(map) {
        this.map = map;
    }

    *findShortestPath(start,end,map=this.map){
        let costs = {},
            tempList = {'0':[start]},
            predecessors = {},
            nodes = [],
            tempEnd = end,
            mapArr=[],
            ListArr=[];
        for (let key in map) {
           mapArr.push(key);
        }
        costs[start]=0;
        console.log('起始节点： '+start)
        while(tempList){
            let keys=[],
                List='';
            for (let key in tempList) {
                Object.prototype.hasOwnProperty.call(tempList,key) && keys.push(key);
                 List+=(' '+tempList[key]+'(消耗为'+key+')');
            }
            if(List!='')
            console.log('List中现有：'+List);
            if(!keys.length) break;
            keys.sort((a,b)=>a-b);

            let first = keys[0],
                bucket = tempList[first],
                node = bucket.shift(),
                currentCost = parseFloat(first),
                adjacentNodes = map[node] || {};
                if(ListArr.indexOf(node)!=-1) continue;//如果是已经添加的节点就直接跳过
                console.log('找到其中消耗最小的节点：'+node)
                ListArr.push(node);

                console.log(ListArr);
                  yield;
                if(ListArr.length==mapArr.length) break;//判断所有节点都被加入来作为结束条件
                if (!bucket.length) delete tempList[first];
                for (let key in tempList) {
                    console.log('List中还剩： '+tempList[key]+'(消耗为'+key+')');
                }
                console.log(node+'节点到其他节点的关系为： ')
            for (let vertex in adjacentNodes) {
                if (Object.prototype.hasOwnProperty.call(adjacentNodes, vertex)) {
                    var cost = adjacentNodes[vertex],
                        totalCost = cost + currentCost,
                        vertexCost = costs[vertex];//取得当前节点之前保存的最小消耗

                    if ((vertexCost === undefined) || (vertexCost > totalCost)) {//需要更新
                        console.log('到'+vertex+'节点的最小消耗更新为'+totalCost);
                        costs[vertex] = totalCost;
                        if (!tempList[''+totalCost]) tempList[''+totalCost] = [];
                        tempList[''+totalCost].push(vertex);//
                        predecessors[vertex] = node;//记录前一个节点
                    }else{
                        console.log('从'+node+'到'+vertex+'的最小总消耗为'+totalCost+'。比之前保存的最短路径值'+vertexCost+'大，所以不用更改')
                    }
                }
            }
        }
        console.log('从'+start+'开始,到各点的最短距离为：');
        console.log(costs);
        while (tempEnd!== undefined) {
            nodes.push(tempEnd);
            tempEnd = predecessors[tempEnd];
        }
        nodes.reverse();//得到路径
        console.log('从'+start+'开始到'+end+'的最短路径为'+nodes.join('=>'));

    }

}
