class Solution {
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const set = new Set(nums);
        let longest = 0;

        for (let num of set) {

            // check if start of sequence
            if (!set.has(num - 1)) {

                let current = num;
                let length = 1;

                while (set.has(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
