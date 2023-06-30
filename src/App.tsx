import { Button } from "./libs/Button"
import { Heading } from "./libs/Heading"
import { Text } from "./libs/Text"

export const App = () => {
    return (
        <>
            <Text text={"truse"} />
            <Heading tag='h1'>
                見出し
            </Heading>
            <Button onClick={()=>console.log('click!')} title='Button' type="primary" width={96} />
            <Button onClick={()=>console.warn('click!')} title='Button' type="secondary" width={96} />
            <Button onClick={()=>console.error('click!')} title='Button' type="error" width={96} />

            <Heading tag='h1'>
                <span>hello world!</span>
            </Heading>
        </>
    )
  }