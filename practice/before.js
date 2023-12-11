class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedlist{
    constructor(){
        this.head = null
        this.tail = null
    }
    before(value){
        const node = new Node(value)

        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }
    beforeInsert(indexvalue , value){
        const node = new Node(value)
        if(indexvalue === this.head.value){
            node.next = this.head
            this.head = node
        }
        let current = this.head
        let prev = null

        while(current !== null && current.value !== indexvalue){
            prev = current
            current = current.next
        }
        node.next = current
        prev.next = node
           
        }

        display(){
            let dis = this.head
            while(dis){
                console.log(dis.value)
                dis = dis.next
            }
        }
        

}
const list = new linkedlist()

list.before(10)
list.before(20)
list.before(30)
list.before(40)
list.before(50)

list.beforeInsert(30,100)

list.display()