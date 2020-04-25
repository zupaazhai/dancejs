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

    'Cross_hands': (next) => {
        ...
        
        next('Raise_left_leg')
    },

    'Raise_left_leg': (next, data) => {
        ...

        next('Raise_right_leg', {
            foo: bar
        })
    },

    'Raise_right_leg': (next, data) => {
        ...

        next('End')
    },

    'End': (next) => {
        next('Cross_hands')
    }
})

// Dont forgot to call .letRoll

dance.letRoll('Gangnam_style')

```

## Example

Making function to load user and process user data

```javascript

dance.step('Get_user', {

    'Fetch_from_API': (next) => {

        request.get('http://user.api/users')
            .then(res => {
                next('Filter', res.users)
            })
            .catch(() => {
                next('Display_not_found')
            })
    },

    'Filter': (next, data) => {
        
        let userWhoIsActive = data.filter(user => {
            return user.is_active
        })

        next('Display_to_list', userWhoIsActive)
    },

    'Display_to_list': (next, data) => {

        document.getElementById('ul').innerHTML = data.map(user => `<li>${user.name}</li>`)
        
        next('Push_notify_when_success')
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