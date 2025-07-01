//stack은 LIFO
//브라우저 뒤로 가기, 함수 호출 등에 이용
//배열의 push, pop을 이용해 구현

class Stack {
    constructor() { //생성자 함수
        this.element = [];
    }

    push(element) {
        this.element.push(element);
        console.log('push : ' + element); 
    }

    pop() {
        if (this.isEmpty()) {
            console.log('Empty!');
            return;
        }
        console.log('pop : ' + this.element.pop());
    }

    isEmpty() {
        return this.element.length === 0;
    }

    peek() {
        console.log('top element :' + this.element[this.element.length - 1]); //배열 인덱스 0부터 시작이라 -1, this.element.length 자체는 값이 아닌 인덱스라 this.element[]으로 묶어줘야 함
    }

    clear() {
        this.element = [];
    }

    print() {
        console.log('stack : ' + this.element.join(', '));
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
stack.pop();
stack.peek();
stack.pop();
stack.peek();
stack.pop();
stack.peek();
stack.pop();
stack.print();

