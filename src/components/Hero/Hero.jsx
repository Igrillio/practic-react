import Button from "components/Button/Button"
import style from './hero.module.css'
b
export default function Hero() {
    return(
        <>
            <h1>Introduce Your Product Quickly {`&`} Effectively</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sit debitis aut tenetur eligendi id alias est itaque, dolores vel ipsam eius sunt quam quos
             voluptatibus consectetur consequuntur mollitia quia?
            </p>
            <div style={{display: 'flex', gap:'30px'}}>
                <Button/>
            </div>
        </>
    )
}

