class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length!==n-1)return false
        const graph=Array.from({length:n},()=>[])
        for(let [u,v] of edges){
            graph[u].push(v)
            graph[v].push(u)
        }
        const visited=new Set()

        function dfs(node){
            if(visited.has(node))return;
            visited.add(node)
            for(let neighbor of graph[node]){
                dfs(neighbor)
            }
        }
        dfs(0);
        return visited.size===n
    }
}
