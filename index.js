import { Observable } from "rxjs"
import {map} from 'rxjs/operators'

const users1={
    data:[
        {
            status:'active',
            age:14
        },
        {
            status:'inActive',
            age:20
        },
        {
            status:'active',
            age:19
        },
        {
            status:'inActive',
            age:17
        },
        {
            status:'active',
            age:32
        },
        {
            status:'active',
            age:18
        },
        {
            status:'inActive',
            age:22
        },
    ]
}

const users2={
    data:[
        {
            status:'active',
            age:14
        },
        {
            status:'inActive',
            age:20
        },
        {
            status:'active',
            age:46
        },
        {
            status:'inActive',
            age:17
        },
        {
            status:'active',
            age:32
        },
        {
            status:'active',
            age:18
        },
        {
            status:'inActive',
            age:22
        },
    ]
}

const observable=new Observable((subscriber)=>{
    subscriber.next(users2)//Observable can emit two data //out put will the value
subscriber.next(users1)//  generates error bcz less than 25
subscriber.complete()//it tells there nothing process next the observable done with data emission
subscriber.next(users1)// it does not emit result bcz above subscribed data generated  error it 

}).pipe(
    map((value)=>{//these are operators that used to manipulate the data emitted from the observable
        console.log("inside the operator-1")
        return value.data
    }),
    map((value)=>{
        console.log("inside the operator-2")
        return value.filter(user=>user.status==='active')
    }),
    map((value)=>{
        console.log("inside the operator-3")
        return value.filter(user=>user.age>=18)
    }),
    map((value)=>{
        console.log("inside the operator-4")
        return (value.reduce((sum,user)=>sum+user.age,0)/value.length);
    }),
    map((value)=>{
        if(value<25)
            throw new Error("Avg age too low !")
        return value
    })

)

const observer={//observer watches for the data emission form the observable until it is unsubscribed
    next:(value)=>{
        console.log("observer got value of "+ JSON.stringify(value))
    },
    error:(err)=>{
        console.log("observer got error "+err)
    },
    complete:()=>{
        console.log("observer got complete")
    }
}

const subscription = observable.subscribe(observer)//this is we are subscribing the observer to get data from the respective observable
setTimeout(()=>{
    subscription.unsubscribe()
},2000)

