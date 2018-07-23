This is a simple bubble sorting algorithm written by me, Robert Thompson. It is the first attempt I have ever made at an algorithm like this, so I wanted to try a bubble sorter due to it's simplicity. The algorithm works by looping through an array and comparing two index positions. If the first index is larger then the second, the two are swapped and the loop moves back a position. If not, then the loop moves onto the next index. This will cause larger numbers to "bubble" towards the end of the array and smaller numbers to come up towards the front, eventually leaving the entire array properly sorted. It even works for words, sorting them lexically. I made this algorithm using vanilla Javascript and the Mocha testing library.

Bubble Sorting has O(n) operational complexity, meaning that it's speed scales linearly with how much data it is given. My friend Brian Henze did some additional testing on this, specifically testing to see how the algorithm performed when given significantly larger data sets. It performed pretty much exactly as expected. Around a million units in the array and my computer just sort of stopped wanting to work, but that's what we expected. Overall, bubble sorting is not particularly fast, but it is a great introductory point to learning about sorting alogrithms in general!