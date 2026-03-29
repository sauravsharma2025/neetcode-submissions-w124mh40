class PrefixTree {
    constructor() {
        this.childern={}
        this.isEnd=false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node=this
        for(let char of word){
            if(!node.childern[char]){
                node.childern[char]=new PrefixTree()
            }
            node=node.childern[char]
        }
        node.isEnd=true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node =this
        for(let char of word){
            if(!node.childern[char]){
                return false
            }
            node=node.childern[char]
        }
        return node.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node=this
        for(let char of prefix){
            if(!node.childern[char]){
                return false
            }
            node=node.childern[char]
        }
        return true
    }
}
