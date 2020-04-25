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
        ...

        next({
            foo: bar
        })
    },

    'Raise_right_leg': (next, goto, data) => {
        ...

        next()
    },

    'End': (next, goto) => {
        goto('Cross_hands')
    }
})

// Dont forgot to call .letRoll

dance.letRoll('Gangnam_style')

```

## Example

Making function to load user and process user data

```javascript

dance.step('Get_user', {
    'Load': (next) => {
        request.get('http://user.api/users')
            .then(res => {
                next(res.users)
            })
    },

    'Filter': (next, goto, data) => {
        
        let userWhoIsActive = data.filter(user => {
            return user.is_active
        })

        next(userWhoIsActive)
    },

    'Display_to_list': (next, goto, data) {
        
        document.getElementById('ul').innerHTML = data.map(user => `<li>${user.name}</li>`)
    }
})
```