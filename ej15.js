// Day 15: Linked List

function insert(head, data) {
    let tmp = {
        data: data,
        next: null
    }

    if (head) {
        let actual = head;
        while (!!actual & !!actual.next) {
            actual = actual.next;
        }

        actual.next = tmp;

        return head;
    }

    return tmp;
}

var head = insert(null, 2);
console.log(head)
insert(head, 3);
insert(head, 4);
insert(head, 1);
