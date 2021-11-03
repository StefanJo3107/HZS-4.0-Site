import React, { useEffect, useState } from "react";
import "./Timer.scss";
import Clock from "./Clock";
import Watch from "./Watch";

const Timer = (props) => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("Nov 18, 2021").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (60 * 60 * 1000)) / (1000 * 60)
            );

            if (distance < 0) {
                clearInterval(interval.curernt);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });

    return (
        <div
            className="timer"
            //style={{ minHeight: props.minHeight ? props.minHeight : "100vh" }}
        >
            <Watch top={props.top} />
            {props.timerInfo && (
                <div className="timer-wrapper">
                    <p className="timer-naslov">
                        Do zatvaranja prijava je ostalo još malo!
                    </p>
                    <p className="timer-podnaslov">
                        Sat brzo otkucava. Požuri i prijavi se na ovogodišnji
                        Hakaton za srednjoškolce! Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Culpa pariatur sint fuga
                        tempora veniam harum ratione quisquam aspernatur. Vero,
                        facilis! Tenetur, quidem quo? Nobis veritatis
                        repudiandae ex, soluta ipsam expedita.
                    </p>
                </div>
            )}
            <div className="timer-clock">
                <Clock
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                />
            </div>
            <div className="animacija"></div>
        </div>
    );
};

export default Timer;
