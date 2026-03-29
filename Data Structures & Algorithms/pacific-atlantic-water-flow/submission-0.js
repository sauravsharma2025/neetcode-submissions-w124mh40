class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if(!heights.length)return []
        const m=heights.length
        const n=heights[0].length
        const pacific=Array.from({length:m},()=>Array(n).fill(false))
        const atlantic=Array.from({length:m},()=>Array(n).fill(false))
        const directions=[[1,0],[-1,0],[0,1],[0,-1]]

        const dfs=(r,c,visited)=>{
            visited[r][c]=true
            for(let [dr,dc] of directions){
               const nr=r+dr
               const nc=c+dc

               if(nr>=0 && nc>=0 && nr<m && nc <n &&
               !visited[nr][nc] &&
               heights[nr][nc]>=heights[r][c]){
                dfs(nr,nc,visited)
               }
            }
        }
        for(let j=0;j<m;j++){
            dfs(j,0,pacific)
            dfs(j,n-1,atlantic)
        }
        for(let j=0;j<n;j++){
            dfs(0,j,pacific)
            dfs(m-1,j,atlantic)
        }
        const result=[]
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(pacific[i][j]&& atlantic[i][j]){
                    result.push([i,j])
                }
            }
        }
        return result
    }
}
