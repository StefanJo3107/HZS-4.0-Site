import React, {useState, useEffect} from 'react'
import SectionTitle from '../Utilities/SectionTitle'
import VisibilitySensor from "react-visibility-sensor";
import CustomButton from '../Utilities/CustomButton'
import './OProjektu.scss'
import onesAndZeroes2 from "../../Assets/Images/pattern-brojevi.png"

import {motion} from 'framer-motion';

const OProjektu = () => {
    const [oProjektuVisible, setOProjektuVisible] = useState(false)

    useEffect(() => {
        console.log(oProjektuVisible)
    }, [oProjektuVisible])

    return (
        <VisibilitySensor
            onChange={(isVisible) => {
                if (isVisible && !oProjektuVisible) {
                    setOProjektuVisible(true);
                }
                return;
            }}
            delayedCall
        >
            <motion.div className="o-projektu" animate={oProjektuVisible && { x: 0, opacity: 1 }}
            // initial={{
            // x: 100,
            // opacity: 0,
            // }}
            transition={{ duration: 1 }}>
                <div className="bg-image-o-projektu">
                    <img src={onesAndZeroes2} alt="Jedinice i nule" />
                </div>
                <div className="o-projektu-wrapper">
                    <SectionTitle>o projektu</SectionTitle>
                    <div className="o-projektu-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt aspernatur deleniti, perferendis delectus laudantium error. Iusto placeat consequuntur repellat dignissimos, adipisci rem dolore doloribus recusandae nisi doloremque possimus dolores explicabo quidem, rerum ut blanditiis nihil suscipit deleniti id aliquid quaerat illo nam. Atque, iusto!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nam accusamus? Aliquam laborum aut, in laudantium eum ullam voluptatem molestiae deserunt quis esse accusamus a!</p>
                    </div>
                    <CustomButton variant="tamna2">Pravila takmičenja</CustomButton>
                </div>
            </motion.div>
        </VisibilitySensor>
    )
}

export default OProjektu
