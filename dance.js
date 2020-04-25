var DanceJs = function () {
    this.stacks = {}
}

DanceJs.prototype = {
    constructor: DanceJs,

    err: function (msg) {
        return console.error(msg)
    },

    step: function (notation, steps) {

        if (!notation) {
            return this.err('Please insert notation name')
        }

        if (typeof notation != 'string') {
            return this.err('Please set notation as string')
        }

        if (!this.stacks[notation]) {
            
            this.stacks[notation] = {
                current: 0,
                steps: {}
            }
        }

        var notationNames = Object.keys(steps)

        for (var i = 0; i < notationNames.length; i++) {
            this.stacks[notation].steps[notationNames[i]] = steps[notationNames[i]]
        }

        return this
    },

    letRoll: function (notation) {
        
        if (!this.stacks[notation]) {
            return this.err('No ' + notation + ' name, please add step by step([step name], [steps])')
        }

        var notationNames = Object.keys(this.stacks[notation].steps)

        var goto = function (targetStep, data) {

            if (typeof this.stacks[notation].steps[targetStep] == 'function') {
                this.stacks[notation].current = notationNames.indexOf(targetStep)
                return this.stacks[notation].steps[targetStep](next, goto, )
            }
            
            return
        }.bind(this)

        var next = function (data) {
            this.stacks[notation].current++
            this.stacks[notation].steps[notationNames[this.stacks[notation].current]](next, goto, data)
        }.bind(this)

        this.stacks[notation].steps[notationNames[0]](next, goto)
    }
}