import { useState, useRef, forwardRef, useLayoutEffect, useImperativeHandle } from 'react'

// Forwards reference to the div below
const MessagesDisplay = forwardRef((
  { messages },
  ref,
) => {
  const containerRef = useRef()

  const scrollToBottom = () => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  }

  const scrollToTop = () => {
    containerRef.current.scrollTop = 0
  }

  useLayoutEffect(() => {
    scrollToBottom()
  })

  useImperativeHandle(ref, () => ({
    scrollToTop,
    scrollToBottom,
  }))

  return (
    <div ref={containerRef} role="log">
      {messages.map((message, index, array) => (
        <div key={message.id}>
          <span>{message.content}</span>
          {array.length - 1 === index ? null : <hr/>}
        </div>
      ))}
    </div>
  )
})

const App = () => {
  const messageDisplayRef = useRef()
  const [messages, setMessages] = useState(allMessages.slice(0, 8))
  const addMessage = () =>
    messages.length < allMessages.length
      ? setMessages(allMessages.slice(0, messages.length + 1))
      : null
  const removeMessage = () =>
    messages.length > 0
      ? setMessages(allMessages.slice(0, messages.length - 1))
      : null

  const scrollToTop = () => messageDisplayRef.current.scrollToTop()
  const scrollToBottom = () => messageDisplayRef.current.scrollToBottom()

  return (
    <div className="messaging-app">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={addMessage}>add message</button>
        <button onClick={removeMessage}>remove message</button>
      </div>
      <hr/>
      <div>
        <button onClick={scrollToTop}>scroll to top</button>
      </div>
      <MessagesDisplay ref={messageDisplayRef} messages={messages}/>
      <div>
        <button onClick={scrollToBottom}>scroll to bottom</button>
      </div>
    </div>
  )
}

export default App

const allMessages = [
  'Enemy flattened pot strategic smell anywhere Tooks sun’s.',
  'Hacking unfit carrots powers beacon worried curse feast entrusted abroad Éowyn. Poring Riddermark lament driven. Fly, you fools!',
  'Wait posts continue Dúnedain balls green.',
  'Front tinkers had hunters sad? Darken courageous introduce level’s forging Meduseld hurricane dealing. Many that live deserve death. Some that die deserve life.',
  'Eldar lesser try pints dung nonsense.',
  'Real stable Rauros rising adjusted relic fool’s over yield worthy? Fiery loosened magnificence misery jacksie Gorgoroth safekeeping risen silly numerous lands cabbages. I will take the Ring to Mordor.',
  'Denethor.',
  'Bombur.',
  'Probably.',
  'Mungo’s.',
  'Greenwood.',
  'Appreciation hardy wretch closed fruitless Misty Mountain.',
  'Marched lessened fabled Wizards belt noble bellows rot troop?',
  'Name prolonging know struck Ligulas importance scraped doesn’t?',
  'Ungol challenge cheated pushes stubbornness accept shells.',
  'Tom spring bellows palantir happening.',
  'Fairy dungeons Eärendil fixed peasants near talking wretch?',
  'Denethor.',
  'Bombur.',
  'Probably.',
  'Mungo’s.',
  'Greenwood.',
  'Wait posts continue Dúnedain balls green.',
  'Front tinkers had hunters sad? Darken courageous introduce level’s forging Meduseld hurricane dealing. Many that live deserve death. Some that die deserve life.',
  'Eldar lesser try pints dung nonsense.',
  'Real stable Rauros rising adjusted relic fool’s over yield worthy? Fiery loosened magnificence misery jacksie Gorgoroth safekeeping risen silly numerous lands cabbages. I will take the Ring to Mordor.',
].map((m, i) => ({ id: i, content: m }))
