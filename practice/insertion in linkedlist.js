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
        this.size = 0
    }
    listig(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    insert(value , index){
        const node = new Node(value) 
         if(index<0 || index > this.size){
            return
         }
         if(index===0){
            node.next = this.head
            this.head = node
            
         }else{
            let prev = this.head
            for(let i=0;i< index-1;i++){
                prev= prev.next
            }

            node.next = prev.next
            prev.next = node
         }
        this.size++
    }
    display(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
    
}

const list = new linkedlist()


list.listig(10)
list.listig(20)
list.listig(30)
list.listig(40)
list.listig(50)
list.listig(60)
list.insert(100000 ,4)

list.display()