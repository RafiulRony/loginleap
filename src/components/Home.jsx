import React from 'react'
import { Link } from 'react-router-dom'
import useWindowWidth from './Hooks/useWindowWidth'


export default function Home() {
  const onSmallScreen = useWindowWidth()

  var numbers = [1,2,3,4,5,6,7];

  // var st = `[${String(numbers)}]`;
  var st = [String(numbers)]
  console.log(st);
  var sum = numbers.reduce((previousValue, currentValue)=>{
    return previousValue+currentValue;
  }, 0)
  console.log(sum);

  function myDisplayer(some){
    console.log(some);
  }
  function myCalculator(num1, num2, myCallback){
    var result = num1 + num2;
    myCallback(result);
  }
  myCalculator(3,4,myDisplayer)

  setInterval(function() {hello()}, 4000);

  function hello() {
    let d = new Date();
  var Time=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
  console.log(Time);
  }
  

  return (
    <>
    <h2>Home Page</h2>
    <Link to="/signup" 
        className='rounded-full w-20 mb-5 border text-base bg-sky-600 text-center ml-5'
        >
        Sign up
    </Link>
    <h2>browsing on {onSmallScreen? 'small' : 'large'} device</h2>
    </>
  )
}
