import { useEffect, useRef, useState } from 'react'

export function useTypingEffect(phrases, typeSpeed = 70, deleteSpeed = 40, pauseEnd = 2000, pauseStart = 400) {
    const [text, setText] = useState('')
    const phraseIndex = useRef(0)
    const charIndex = useRef(0)
    const isDeleting = useRef(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        function tick() {
            const current = phrases[phraseIndex.current]
            if (isDeleting.current) {
                setText(current.substring(0, charIndex.current--))
            } else {
                setText(current.substring(0, charIndex.current++))
            }

            let speed = isDeleting.current ? deleteSpeed : typeSpeed

            if (!isDeleting.current && charIndex.current > current.length) {
                speed = pauseEnd
                isDeleting.current = true
            } else if (isDeleting.current && charIndex.current < 0) {
                isDeleting.current = false
                phraseIndex.current = (phraseIndex.current + 1) % phrases.length
                speed = pauseStart
            }

            timeoutRef.current = setTimeout(tick, speed)
        }

        tick()
        return () => clearTimeout(timeoutRef.current)
    }, [phrases, typeSpeed, deleteSpeed, pauseEnd, pauseStart])

    return text
}
