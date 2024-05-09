import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {TriangleDownIcon, TriangleUpIcon} from '@radix-ui/react-icons'
import {useState} from 'react'

const StateTutorial = () => {
  const [counter, setCounter] = useState<number>(0)
  const [text, setText] = useState<string>('Hello')
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const onStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className='m-auto flex flex-col justify-center items-center gap-4'>
      <Input
        type='text'
        placeholder='Enter some text'
        className='w-52'
        onChange={onStepChange}
      />
      <Badge>{text}</Badge>
      <div className='flex gap-4 justify-center items-center'>
        <Button size='lg' onClick={increment}>
          <TriangleUpIcon />
        </Button>
        <span className='text-2xl'>{counter}</span>
        <Button size='lg' onClick={decrement}>
          <TriangleDownIcon />
        </Button>
      </div>
    </div>
  )
}

export default StateTutorial
