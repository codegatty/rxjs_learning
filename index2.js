import {of} from 'rxjs'


const observable=of([1,2,3,4,5,6,7])//create an observable of data []
console.log(observable)

const observer={
    next:(value)=>{
        console.log('Observer got value '+ value)
    },
    error:(err)=>{
        console.log('Observer got error '+err)
    },
    complete:()=>{
        console.log('Observer got complete')
    }
}

const subscription = observable.subscribe(observer)

setTimeout(()=>{
    subscription.unsubscribe()
},2000)

