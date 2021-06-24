/* Greedy Algorithm
There are some spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates don't matter, and hence the x-coordinates of start and end of the diameter suffice. The start is always smaller than the end.

An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with xstart and xend bursts by an arrow shot at x if xstart ≤ x ≤ xend. There is no limit to the number of arrows that can be shot. An arrow once shot keeps traveling up infinitely.

Given an array points where points[i] = [xstart, xend], return the minimum number of arrows that must be shot to burst all balloons.


Example:

Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).

Greedy problems usually look like "Find minimum number of something to do something" or "Find maximum number of something to fit in some conditions", and typically propose an unsorted input.

O(NlogN)*/

const points = [[10,16],[2,8],[1,6],[7,12]];

var findMinArrowShots = function(points) {
    const _points = points.sort((a,b)=>a[1]-b[1]);
    let first_end = _points[0][1], arrows = 1;
    
    _points.forEach((element)=>{
        if(element[0] > first_end) {
            arrows += 1;
            first_end = element[1];
        }
    })
    
    return arrows;
};

