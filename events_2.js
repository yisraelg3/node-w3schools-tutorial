import events from 'events'

const eventEmitter = new events.EventEmitter()

const myEvenetHandler = () => {
    console.log('I hear a scream')
}

eventEmitter.on('scream', myEvenetHandler)

eventEmitter.emit('scream')