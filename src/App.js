import { useState } from "react"
import "./styles.css"

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
]

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  )
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null)
  return (
    <div className="accordion">
      {data.map((da, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={da.title}
        >
          {da.text}
          <span> 👋🏻 </span>
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={332}
        title="I Love React"
      >
        If you want to succeed in web dev, learn React!!
        <span> 👋🏻 </span>
      </AccordionItem>
    </div>
  )
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  // const [isOpen, setIsOpen] = useState(false)

  const isOpen = num === curOpen

  function handleClick() {
    // setIsOpen(!isOpen)
    onOpen(isOpen ? null : num)
  }

  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      {isOpen ? <div className="content-box ">{children}</div> : <></>}
    </div>
  )
}
