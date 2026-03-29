class WordDictionary {
    constructor() {
        this.root={}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node=this.root
        for(let char of word){
            if(!node[char]){
                node[char]={}
            }
            node=node[char]
        }
        node.isEnd=true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs=(index,node)=>{
            if(index===word.length){
                return node.isEnd===true
            }
            let char=word[index]
            if(char==="."){
                for(let child in node){
                    if(child!=="isEnd"){
                        if(dfs(index+1,node[child])){
                            return true
                        }
                    }
                }
                return false
            }
            if(!node[char])return false
            return dfs(index+1,node[char])
        }
        return dfs(0,this.root)
    }
}
