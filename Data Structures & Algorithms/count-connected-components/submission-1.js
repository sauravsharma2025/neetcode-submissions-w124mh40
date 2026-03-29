class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph=Array.from({length:n},()=>[])
        for(let [u,v] of edges){
            graph[u].push(v)
            graph[v].push(u)
        }
        const visited=new Set()
        let count=0
        function dfs(node){
            if(visited.has(node))return
            visited.add(node)
            for(let neighbor of graph[node]){
                dfs(neighbor)
            }
        }
        for(let i=0;i<n;i++){
            if(!visited.has(i)){
                dfs(i)
                count++
            }
        }
        return count
    }
}
