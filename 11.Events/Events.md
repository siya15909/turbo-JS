# Events In JS

##

<h3>The change in the state of an object is known as Event.<br>Events are fired to notify code of "interesting changes" that may affect code execution</h3>
<h4>
  <ul><h3>Events are</h3>
    <li> Mouse (click,double click)
    <li> Keyboard (keypress)
    <li> Form (submit)
    <li> print etc
  </ul>
</h4>
Inline event handling - Handling functions are written inside the html tags as attributes.<br>OR <br> node.event()=>{<br>&emsp;//handle here<br>} <br> OR <br> Event Listeners

##

# Event Objects

##

It is a special object that has the details about the event.

<h3> All event handlers have access to the Event Object's properties and methods.</h3>

node.event = (e) => {<br>&emsp;//handle here<br>}<br> egs=> e.target,e.type,e.clientX

##

# Event Listeners

##

node.addEventListener(event,callback)
node.removeEventListener(event,callback)
