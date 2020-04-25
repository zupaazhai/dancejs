## DanceJS

DanceJS :dancer: is alternative pattern to handle callback Javascript, make your code is easy to read and organize to your mind for coding.

## How to install

call `dance.js` in your code

```
<script src="dance.js">
```

then let rooool!!! :microphone: :notes:

## How to use

```
var dance = new Dance

dance.step('Gangnam_style', {
    'Cross_hands': function (next, goto) {
        ...
        
        next()
    },

    'Raise_left_leg': function (next, goto, data) {
        
        next({
            foo: bar
        })
    },

    'Raise_right_leg': function (next, goto, data) {

        next()
    },

    'End': function (next, goto) {
        goto('Cross_hands')
    }
})

```