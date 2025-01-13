import { Observable } from "rxjs";


const observable=new Observable((subscriber)=>{
    setTimeout(()=>{
        subscriber.next("setTimeout - 1 expired !")
        // subscriber.complete();
    },3000),
    setTimeout(()=>{
        subscriber.next("setTimeout - 2 expired !")
        // subscriber.complete();
    },3000),
    setTimeout(()=>{
        subscriber.next("setTimeout - 0 expired !")
        // subscriber.complete();
    },1000)
})

const observer={
    next:(value)=>{
        console.log("Observer got value of "+ value)
    },
    error:(err)=>{
        console.log(err)
    },
    complete:()=>{
        console.log("Observer got complete")
    }
}

const subscription=observable.subscribe(observer)
// setTimeout(()=>{
//     subscription.unsubscribe()
// },5000)

