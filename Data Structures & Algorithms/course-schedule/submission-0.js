class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph=new Array(numCourses).fill(0).map(()=>[])
        for(let [a,b] of prerequisites){
            graph[b].push(a)
        }
        const visited=new Array(numCourses).fill(0)
        function dfs(node){
            if(visited[node]===1)return false
            if(visited[node]===2)return true
        
        visited[node]=1
        for(let neighbor of graph[node]){
            if(!dfs(neighbor))return false
        }
        visited[node]=2
        return true
    }
    for(let i=0;i<numCourses;i++){
        if(!dfs(i))return false
    }
    return true
    }
}
