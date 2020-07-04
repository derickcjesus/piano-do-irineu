const keys = document.querySelectorAll(".key")   

        function playNote(event){
            var audioKeyCode = getKeyCode(event)

            const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

            const cantFoundAnyKey = !key

            if(cantFoundAnyKey){
                return
            }

            playAudio(audioKeyCode)

        }


        function getKeyCode(event){
            var keyCode;
            const isKeyboard = event.type === "keydown"

            if(isKeyboard){
                keyCode = event.keyCode
            }else{
                keyCode = event.target.dataset.key
            }

            return keyCode;
        }

        function playAudio(audioKeyCode){
            const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
            audio.currentTime = 0
            audio.play()
        }

        window.addEventListener("keydown", playNote)

        keys.forEach( function(key){ 
            key.addEventListener("click", playNote)
        })
