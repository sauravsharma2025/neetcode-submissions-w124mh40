class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
         let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;

        maxWater = Math.max(maxWater, area);

        // move the smaller height pointer
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
    }
}
