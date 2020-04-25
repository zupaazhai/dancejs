## DanceJS

DanceJS :dancer: is alternative pattern to handle callback Javascript, make your code is easy to read and organize to your mind for coding.

## How to install

include `dance.js` in your code

```
<script src="dance.js">
```

then let rooool!!! :microphone: :notes:

## How to use

```javascript
var dance = new Dance

dance.step('Gangnam_style', {

    'Cross_hands': (next, goto) => {
        ...
        
        next()
    },

    'Raise_left_leg': (next, goto, data) => {
        
        next({
            foo: bar
        })
    },

    'Raise_right_leg': (next, goto, data) => {

        next()
    },

    'End': (next, goto) => {
        goto('Cross_hands')
    }
})

// Dont forgot to call .letRoll

dance.letRoll('Gangnam_style')

```