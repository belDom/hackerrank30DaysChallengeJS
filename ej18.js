// Day 18: Queues and Stacks
function Solution() {
    this.queue = [];
    this.stack = [];

    /**
     * Pushes a character onto a stack.
     */
    this.pushCharacter = ch => {
        this.stack.push(ch);
    }

    /**
     * Enqueues a character in the queue
     */
    this.enqueueCharacter = ch => {
        this.queue.push(ch);
    }

    /**
     * Pops and returns the character at the top of the stack
     */
    this.popCharacter = () => {
        return this.stack.pop();
    }

    /**
     * Dequeues and returns the first character in the queue
     */
    this.dequeueCharacter = () => {
        return this.queue.shift();
    }
}

Solution()


function main() {
    // read the string s
    var s = 'racecar';
    var len = s.length;
    // create the Solution class object p
    var obj = new Solution();
    //push/enqueue all the characters of string s to stack
    for (var i = 0; i < len; i++) {
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }

    var isPalindrome = true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for (var i = 0; i < len / 2; i++) {
        if (obj.popCharacter() != obj.dequeueCharacter()) {
            isPalindrome = false;
            break;
        }
    }
    //finally print whether string s is palindrome or not

    if (isPalindrome)
        console.log("The word, " + s + ", is a palindrome.");
    else
        console.log("The word, " + s + ", is not a palindrome.");
}

main();
