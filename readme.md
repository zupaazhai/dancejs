## DanceJS

DanceJS :dancer: is alternative pattern to handle callback in Javascript, make your code is easy to read and organize your mind for coding.

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

    'Fetch_from_API': (next, goto) => {

        request.get('http://user.api/users')
            .then(res => {
                goto('Filter', res.users)
            })
            .catch(() => {
                goto('Display_not_found')
            })
    },

    'Filter': (next, goto, data) => {
        
        let userWhoIsActive = data.filter(user => {
            return user.is_active
        })

        goto('Display_to_list', userWhoIsActive)
    },

    'Display_to_list': (next, goto, data) => {

        document.getElementById('ul').innerHTML = data.map(user => `<li>${user.name}</li>`)
        
        goto('Push_notify_when_success')
    },

    'Display_not_found': () => {

        document.getElementById('output').innerText = 'Sorry, user not found'
    }
})

// We can push extra step by call define same step name,
// then new step will push to previous defined step

dance.step('Get_user', {
    'Push_notify_when_success': () => {
        alert('Done')
    }
})

// Dont forgot to call .letRoll

dance.letRoll('Get_user')
```

see more example, at `/demo`