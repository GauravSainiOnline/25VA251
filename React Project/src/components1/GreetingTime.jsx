import React from 'react'

function GreetingTime(props) {
  return props.timeOfDay === "morning" ? (
    <div>Good morning!</div>
  ) : (
    <div>Good afternoon!</div>
  );
};
export default GreetingTime;