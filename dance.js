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
                steps: {}
            }
        }

        var notationNames = Object.keys(steps)

        for (var i = 0; i < notationNames.length; i++) {
            this.stacks[notation].steps[notationNames[i]] = steps[notationNames[i]]
        }

        return this
    },

    letRoll: function (notation, firstRun) {
        
        if (!this.stacks[notation]) {
            return this.err('No ' + notation + ' name, please add step by step([step name], [steps])')
        }

        var notationNames = Object.keys(this.stacks[notation].steps)

        var next = function (nextStepName, data) {

            var nextStep = this.stacks[notation].steps[nextStepName]

            if (typeof nextStep !== 'function') {
                return
            }

            this.stacks[notation].steps[nextStepName](next, data)
        }.bind(this)

        if (this.stacks[notation].steps[firstRun] == 'string') {
            return this.stacks[notation].steps[firstRun](next)
        }

        this.stacks[notation].steps[notationNames[0]](next)
    }
}